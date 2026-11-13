import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import worker from '../worker.js';

// In-memory mock of Cloudflare D1 database
const roomsMap = new Map();
const mockDB = {
  prepare(sql) {
    let bound = [];
    return {
      bind(...args) {
        bound = args;
        return this;
      },
      async first() {
        if (sql.includes('SELECT COUNT(*) as n')) {
          const [now, hostId] = bound;
          let count = 0;
          for (const r of roomsMap.values()) {
            if (r.expires > now && JSON.parse(r.state).host === hostId) count++;
          }
          return { n: count };
        }
        if (sql.includes('SELECT state,version FROM rooms')) {
          const [code, now] = bound;
          const r = roomsMap.get(code);
          if (r && r.expires > now) return { state: r.state, version: r.version };
          return null;
        }
        return null;
      },
      async run() {
        if (sql.includes('DELETE FROM rooms')) {
          const [now] = bound;
          for (const [k, v] of roomsMap.entries()) {
            if (v.expires <= now) roomsMap.delete(k);
          }
          return { meta: { changes: 1 } };
        }
        if (sql.includes('INSERT INTO rooms')) {
          const [code, state, expires] = bound;
          roomsMap.set(code, { code, state, version: 0, expires });
          return { meta: { changes: 1 } };
        }
        if (sql.includes('UPDATE rooms SET state=?,version=version+1')) {
          const [state, code, version] = bound;
          const r = roomsMap.get(code);
          if (r && r.version === version) {
            r.state = state;
            r.version += 1;
            return { meta: { changes: 1 } };
          }
          return { meta: { changes: 0 } };
        }
        return { meta: { changes: 0 } };
      },
    };
  },
};

const tokens = Array.from({ length: 5 }, () => crypto.randomUUID());

async function call(playerIdx, payload) {
  const req = new Request('https://safe-space.workers.dev/api/game', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'origin': 'https://safe-space.workers.dev',
      'x-player-token': tokens[playerIdx],
    },
    body: JSON.stringify(payload),
  });
  const res = await worker.fetch(req, { DB: mockDB });
  const body = await res.json();
  return { status: res.status, ...body };
}

// Test creating 8 rooms from the same host (verifying classroom >6 room limit works)
let lastRoomCode = '';
for (let i = 0; i < 8; i++) {
  const r = await call(0, { type: 'create', name: 'อาจารย์ผู้สอน' });
  assert.equal(r.status, 200, JSON.stringify(r));
  lastRoomCode = r.game.code;
}

// Join 3 more students into the room
for (let i = 1; i < 4; i++) {
  const r = await call(i, { type: 'join', code: lastRoomCode, name: 'นักศึกษา ' + i });
  assert.equal(r.status, 200, JSON.stringify(r));
}
// 5th player rejected (max 4 per room)
assert.equal((await call(4, { type: 'join', code: lastRoomCode, name: 'คนที่ 5' })).status, 409);

// Start game & roll
assert.equal((await call(0, { type: 'start', code: lastRoomCode })).status, 200);
assert.equal((await call(0, { type: 'roll', code: lastRoomCode })).status, 200);

console.log('ALL WORKER + D1 MULTIPLAYER TESTS PASSED!');
