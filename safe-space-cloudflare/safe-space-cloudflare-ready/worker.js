// Safe Space • Campus Tycoon — Cloudflare Worker + D1 Backend
export const GROUPS = ['#ec927b', '#e3b745', '#58ae9a', '#6d9cce', '#9a87c4', '#d681a6'];
export const BOARD = [['จุดเริ่มต้น', 'start', '🚩'], ['ลานเพื่อนใจ', 'land', '🌳', 0, 100], ['เปิดใจ', 'quiz', '💬'], ['สวนร่วมใจ', 'land', '🌷', 0, 120], ['กองทุนส่วนกลาง', 'tax', '🪙'], ['รถรับส่งเหนือ', 'station', '🚌', 6, 200], ['มุมอ่านหนังสือ', 'land', '📚', 1, 140], ['โอกาสดี', 'chance', '✨'], ['ห้องสมุดกลาง', 'land', '🏛️', 1, 160], ['พักใจ', 'rest', '☕'], ['ชมรมศิลปะ', 'land', '🎨', 2, 180], ['เปิดใจ', 'quiz', '💬'], ['ชมรมดนตรี', 'land', '🎸', 2, 200], ['รถรับส่งใต้', 'station', '🚌', 6, 200], ['ร้านเพื่อนช่วยเพื่อน', 'land', '🥐', 3, 220], ['โอกาสดี', 'chance', '✨'], ['คาเฟ่รับฟัง', 'land', '☕', 3, 240], ['ไปพักใจ', 'goto', '🧘'], ['ห้องให้คำปรึกษา', 'land', '🛋️', 4, 260], ['เปิดใจ', 'quiz', '💬'], ['ศูนย์เพื่อนใจ', 'land', '💛', 4, 280], ['กองทุนส่วนกลาง', 'tax', '🪙'], ['ลานสร้างสรรค์', 'land', '🎪', 5, 300], ['พื้นที่ปลอดภัย', 'land', '🛡️', 5, 320]].map((a, i) => ({
  id: i,
  name: String(a[0]),
  type: String(a[1]),
  icon: String(a[2]),
  group: Number(a[3] ?? -1),
  price: Number(a[4] || 0)
}));
export const QUIZZES = [{
  q: 'เพื่อนถูกล้อสำเนียงระหว่างนำเสนอ คุณจะช่วยอย่างไร?',
  a: ['หัวเราะตามเพื่อเข้ากลุ่ม', 'หยุดการล้ออย่างสุภาพถ้าปลอดภัย แล้วถามเพื่อนว่าต้องการความช่วยเหลือไหม', 'อัดคลิปลงกลุ่ม'],
  correct: 1,
  why: 'การไม่ร่วมล้อและรับฟังโดยไม่ตัดสินช่วยให้ผู้ถูกกระทำไม่รู้สึกโดดเดี่ยว หากไม่ปลอดภัยให้ขอความช่วยเหลือจากอาจารย์'
}, {
  q: 'มีคนโพสต์ภาพเพื่อนเพื่อประจาน สิ่งใดเหมาะสมที่สุด?',
  a: ['ส่งต่อเพื่อให้ทุกคนรู้', 'โต้กลับด้วยข้อมูลส่วนตัว', 'ไม่ส่งต่อ เก็บหลักฐานอย่างเป็นส่วนตัว และรายงานโพสต์'],
  correct: 2,
  why: 'การส่งต่ออาจซ้ำเติมผู้ถูกกระทำ เก็บลิงก์ วันเวลา และภาพหน้าจอเท่าที่จำเป็น บล็อกและรายงานผ่านแพลตฟอร์ม'
}, {
  q: 'เพื่อนบอกว่า “ก็แค่ล้อเล่น” แต่คุณรู้สึกไม่สบายใจ',
  a: ['บอกขอบเขตว่าคำพูดนั้นทำให้ไม่สบายใจ และขอให้หยุด', 'ต้องยอมรับเพราะเป็นเพื่อน', 'ล้อกลับให้เจ็บกว่า'],
  correct: 0,
  why: 'ความยินยอมและความรู้สึกของผู้ถูกล้อสำคัญ คุณมีสิทธิ์ตั้งขอบเขต หากการพูดยังไม่ปลอดภัย ขอให้คนที่ไว้ใจช่วย'
}, {
  q: 'เห็นเพื่อนถูกกีดกันจากกลุ่มงานซ้ำ ๆ เพราะรูปลักษณ์',
  a: ['เป็นเรื่องปกติของกลุ่ม', 'ชวนเพื่อนเข้าร่วม และขอให้อาจารย์ช่วยจัดการอย่างเป็นธรรม', 'บอกให้เพื่อนเปลี่ยนรูปลักษณ์'],
  correct: 1,
  why: 'การกีดกันและทำให้โดดเดี่ยวอาจเป็นการบูลลี่ทางสังคม ความรับผิดชอบอยู่ที่พฤติกรรมของผู้กระทำ ไม่ใช่รูปลักษณ์ของผู้ถูกกระทำ'
}, {
  q: 'เมื่อเห็นการคุกคามทางร่างกาย คุณควรทำอย่างไร?',
  a: ['เข้าไปต่อสู้ทันที', 'ถ่ายคลิปเพื่อความสนุก', 'ไปยังจุดปลอดภัยและแจ้งเจ้าหน้าที่หรืออาจารย์ที่อยู่ใกล้'],
  correct: 2,
  why: 'ให้ความปลอดภัยมาก่อน ไม่จำเป็นต้องเสี่ยงเข้าปะทะ การขอความช่วยเหลือเป็นการช่วยที่สำคัญ'
}, {
  q: 'เพื่อนเล่าว่าถูกบูลลี่ คำตอบใดช่วยได้?',
  a: ['ขอบคุณที่ไว้ใจเล่า เรื่องนี้ไม่ใช่ความผิดของเธอ อยากให้ช่วยอย่างไร?', 'อย่าคิดมาก', 'เธอทำอะไรให้เขาโกรธหรือเปล่า'],
  correct: 0,
  why: 'รับฟัง ไม่กล่าวโทษ และให้ผู้ถูกกระทำมีส่วนตัดสินใจว่าจะขอความช่วยเหลือแบบใด อย่าเผยแพร่เรื่องราวโดยไม่ได้รับอนุญาต'
}, {
  q: 'คุณเพิ่งรู้ว่าคำล้อของตัวเองทำให้เพื่อนเสียใจ',
  a: ['บอกว่าเพื่อนอ่อนไหวไปเอง', 'ยอมรับ ขอโทษโดยไม่แก้ตัว หยุดและปรับพฤติกรรม', 'ขอให้เพื่อนลืมทันที'],
  correct: 1,
  why: 'คำขอโทษที่ดีมาพร้อมการเปลี่ยนพฤติกรรม เคารพขอบเขตและให้เวลาอีกฝ่าย โดยไม่กดดันให้ให้อภัย'
}, {
  q: 'ถูกคุกคามซ้ำ ๆ ทางข้อความ ควรเริ่มจากอะไร?',
  a: ['นัดพบคนส่งข้อความคนเดียว', 'เผยแพร่ที่อยู่ผู้กระทำ', 'เก็บหลักฐาน บล็อก/รายงาน และขอความช่วยเหลือจากคนที่ไว้ใจ'],
  correct: 2,
  why: 'อย่าไปพบผู้คุกคามเพียงลำพัง เลือกช่องทางช่วยเหลือของมหาวิทยาลัยและคนที่ไว้ใจ ไม่เผยแพร่ข้อมูลส่วนตัวตอบโต้'
}];
export function player(id, name, bot = false) {
  return {
    id,
    name: name.slice(0, 24),
    pos: 0,
    cash: 1500,
    heart: 0,
    jail: 0,
    bankrupt: false,
    bot
  };
}
export function createGame(code, id, name) {
  return {
    code,
    host: id,
    status: 'lobby',
    players: [player(id, name)],
    turn: 0,
    round: 1,
    phase: 'roll',
    dice: [1, 1],
    doubles: 0,
    owners: {},
    houses: {},
    mortgage: {},
    logs: ['ยินดีต้อนรับสู่มหาวิทยาลัยของเรา 🌱'],
    deadline: Date.now() + 90000
  };
}
export function worth(g, p) {
  return p.cash + BOARD.filter(t => g.owners[t.id] === p.id).reduce((s, t) => s + t.price * (g.mortgage[t.id] ? 0.5 : 1) + (g.houses[t.id] || 0) * 100, 0);
}
export function log(g, s) {
  g.logs = [s, ...g.logs].slice(0, 50);
}
function need(v, m = 'ไม่สามารถทำรายการนี้ได้') {
  if (!v) throw new Error(m);
}
export function rent(g, id) {
  const t = BOARD[id];
  if (g.mortgage[id]) return 0;
  if (t.type === 'station') return 25 * 2 ** (BOARD.filter(x => x.type === 'station' && g.owners[x.id] === g.owners[id]).length - 1);
  const full = BOARD.filter(x => x.group === t.group).every(x => g.owners[x.id] === g.owners[id] && !g.mortgage[x.id]);
  return Math.floor(t.price * .16) * (g.houses[id] ? [1, 3, 6, 10, 15, 22][g.houses[id]] : full ? 2 : 1);
}
function finish(g) {
  const alive = g.players.filter(p => !p.bankrupt);
  if (alive.length <= 1 || g.round > 30) {
    g.status = 'finished';
    g.trade = undefined;
    g.winner = [...alive].sort((a, b) => worth(g, b) - worth(g, a) || b.heart - a.heart)[0]?.id;
    log(g, 'จบเกม! จัดอันดับตามมูลค่าทรัพย์สินรวม และใช้คะแนนใจตัดสินเมื่อเสมอ');
  }
}
function next(g) {
  g.trade = undefined;
  g.feedback = undefined;
  g.quiz = undefined;
  g.auction = undefined;
  g.phase = 'roll';
  g.doubles = 0;
  let i = 0;
  do {
    g.turn = (g.turn + 1) % g.players.length;
    if (g.turn === 0) g.round++;
    i++;
  } while (g.players[g.turn].bankrupt && i <= 4);
  g.deadline = Date.now() + 90000;
  finish(g);
}
function eliminate(g, p) {
  p.bankrupt = true;
  for (const t of BOARD) if (g.owners[t.id] === p.id) {
    delete g.owners[t.id];
    delete g.houses[t.id];
    delete g.mortgage[t.id];
  }
  log(g, `${p.name} ออกจากเกม • ขอบคุณที่ร่วมสร้างพื้นที่ปลอดภัย`);
  next(g);
}
function land(g, p, rand) {
  const t = BOARD[p.pos];
  g.phase = 'end';
  if (t.price) {
    if (!g.owners[t.id]) g.phase = 'buy';else if (g.owners[t.id] !== p.id) {
      const r = rent(g, t.id);
      p.cash -= r;
      g.players.find(x => x.id === g.owners[t.id]).cash += r;
      log(g, `${p.name} จ่ายค่าเยี่ยม ${t.name} ${r} เหรียญ`);
    }
  } else if (t.type === 'quiz') {
    g.quiz = Math.floor(rand() * QUIZZES.length);
    g.phase = 'quiz';
  } else if (t.type === 'tax') {
    p.cash -= 100;
    log(g, `${p.name} สนับสนุนกองทุนส่วนกลาง 100 เหรียญ`);
  } else if (t.type === 'goto') {
    p.pos = 9;
    p.jail = 1;
    log(g, `${p.name} ไปพักใจ 1 เทิร์น (เป็นกติกาเกม ไม่ใช่การลงโทษผู้ถูกบูลลี่)`);
  } else if (t.type === 'chance') {
    const events = [['จัดกิจกรรมเพื่อนช่วยเพื่อน รับทุน 150', 150], ['อาสาดูแลพื้นที่ส่วนกลาง รับ 100', 100], ['ปรับปรุงทางเข้าที่ทุกคนเข้าถึงได้ จ่าย 80', -80], ['ร่วมจัดเวิร์กช็อปการรับฟัง รับ 120', 120]];
    const e = events[Math.floor(rand() * events.length)];
    p.cash += e[1];
    log(g, `${p.name}: ${e[0]} เหรียญ`);
  }
}
export function act(original, id, a, rand = () => crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296, now = Date.now()) {
  const g = structuredClone(original);
  const p = g.players.find(x => x.id === id);
  need(p, 'ไม่พบผู้เล่น');
  const me = p;
  if (a.type === 'join') throw new Error('ใช้ช่องทางเข้าร่วมห้อง');
  if (a.type === 'start') {
    need(g.status === 'lobby' && id === g.host && g.players.length >= 2, 'ต้องมีผู้เล่นอย่างน้อย 2 คนและเริ่มโดยเจ้าของห้อง');
    g.status = 'playing';
    g.deadline = now + 90000;
    log(g, 'เริ่มเกม • ทุกคนได้รับ 1,500 เหรียญใจ');
    return g;
  }
  if (a.type === 'bot') {
    need(g.status === 'lobby' && id === g.host && g.players.length < 4);
    g.players.push(player('bot-' + g.players.length, 'น้องใจดี ' + g.players.length, true));
    return g;
  }
  need(g.status === 'playing', 'เกมยังไม่เริ่มหรือจบแล้ว');
  if (a.type === 'timeout') {
    need(now > g.deadline, 'ยังไม่หมดเวลา');
    const current = g.players[g.turn];
    if (g.auction) {
      if (g.auction.bidder) {
        g.owners[g.auction.tile] = g.auction.bidder;
        g.players.find(x => x.id === g.auction.bidder).cash -= g.auction.high;
      }
      g.auction = undefined;
      g.phase = 'end';
    }
    if (current.cash < 0) {
      eliminate(g, current);
    } else {
      log(g, `${current.name} หมดเวลาเทิร์น`);
      next(g);
    }
    return g;
  }
  need(!me.bankrupt);
  if (a.type === 'tradeReply') {
    need(g.trade && g.trade.to === id);
    const tr = g.trade;
    const from = g.players.find(x => x.id === tr.from);
    if (a.accept) {
      need(g.owners[tr.give] === from.id && g.owners[tr.take] === id && from.cash >= tr.cash && !g.houses[tr.give] && !g.houses[tr.take] && !g.mortgage[tr.give] && !g.mortgage[tr.take]);
      g.owners[tr.give] = id;
      g.owners[tr.take] = from.id;
      from.cash -= tr.cash;
      me.cash += tr.cash;
      log(g, `${from.name} แลกเปลี่ยนพื้นที่กับ ${me.name}`);
    }
    g.trade = undefined;
    return g;
  }
  if (a.type === 'bid' || a.type === 'pass') {
    need(g.phase === 'auction' && g.auction);
    const au = g.auction;
    need(!au.passed.includes(id) && au.bidder !== id);
    if (a.type === 'bid') {
      const bid = au.high + 20;
      need(me.cash >= bid, 'เหรียญไม่เพียงพอ');
      au.high = bid;
      au.bidder = id;
      log(g, `${me.name} ประมูล ${bid} เหรียญ`);
    } else au.passed.push(id);
    const rest = g.players.filter(x => !x.bankrupt && !au.passed.includes(x.id) && x.id !== au.bidder);
    if (!rest.length) {
      if (au.bidder) {
        g.owners[au.tile] = au.bidder;
        g.players.find(x => x.id === au.bidder).cash -= au.high;
        log(g, `ปิดประมูล ${BOARD[au.tile].name} ที่ ${au.high} เหรียญ`);
      }
      g.phase = 'end';
      g.auction = undefined;
    }
    return g;
  }
  need(g.players[g.turn].id === id, 'ยังไม่ใช่เทิร์นของคุณ');
  if (a.type === 'trade') {
    need(g.phase === 'end' && !g.trade);
    const give = Number(a.give),
      take = Number(a.take),
      cash = Number(a.cash);
    need(Number.isInteger(cash) && cash >= 0 && cash <= me.cash);
    need(BOARD.filter(t => t.group === BOARD[give]?.group || t.group === BOARD[take]?.group).every(t => !g.houses[t.id]), 'ขายสิ่งปลูกสร้างในชุดสีก่อนแลกเปลี่ยน');
    need(g.owners[give] === id && g.owners[take] && g.owners[take] !== id && !g.houses[give] && !g.houses[take] && !g.mortgage[give] && !g.mortgage[take]);
    g.trade = {
      from: id,
      to: g.owners[take],
      give,
      take,
      cash
    };
    return g;
  }
  if (a.type === 'cancelTrade') {
    g.trade = undefined;
    return g;
  }
  if (['build', 'mortgage', 'redeem', 'sell'].includes(a.type)) {
    need(['roll', 'end', 'buy'].includes(g.phase) && !g.trade);
    const t = BOARD[Number(a.tile)];
    need(t && g.owners[t.id] === id);
    const h = g.houses[t.id] || 0;
    const group = BOARD.filter(x => x.group === t.group);
    if (a.type === 'mortgage') {
      need(!g.mortgage[t.id] && group.every(x => !g.houses[x.id]));
      g.mortgage[t.id] = true;
      me.cash += t.price / 2;
    }
    if (a.type === 'redeem') {
      const cost = Math.ceil(t.price * .55);
      need(g.mortgage[t.id] && me.cash >= cost);
      g.mortgage[t.id] = false;
      me.cash -= cost;
    }
    if (a.type === 'build') {
      need(t.type === 'land' && group.every(x => g.owners[x.id] === id && !g.mortgage[x.id]) && h < 5 && me.cash >= 100 && h === Math.min(...group.map(x => g.houses[x.id] || 0)), 'ต้องครบชุดสี ไม่มีจำนอง และสร้างให้เท่ากัน');
      g.houses[t.id] = h + 1;
      me.cash -= 100;
    }
    if (a.type === 'sell') {
      need(h > 0 && h === Math.max(...group.map(x => g.houses[x.id] || 0)), 'ขายสิ่งปลูกสร้างจากช่องที่มีมากที่สุดก่อน');
      g.houses[t.id] = h - 1;
      me.cash += 50;
    }
    log(g, `${me.name}: จัดการพื้นที่ ${t.name}`);
    return g;
  }
  if (a.type === 'bankrupt') {
    eliminate(g, me);
    return g;
  }
  need(!g.trade, 'จัดการข้อเสนอแลกเปลี่ยนก่อน');
  if (a.type === 'roll') {
    need(g.phase === 'roll' && me.cash >= 0);
    if (me.jail) {
      me.jail = 0;
      g.phase = 'end';
      log(g, `${me.name} พักใจและพร้อมกลับมาในเทิร์นหน้า`);
      return g;
    }
    g.dice = [1 + Math.floor(rand() * 6), 1 + Math.floor(rand() * 6)];
    const move = g.dice[0] + g.dice[1];
    if (g.dice[0] === g.dice[1]) g.doubles++;else g.doubles = 0;
    if (g.doubles === 3) {
      me.pos = 9;
      me.jail = 1;
      g.phase = 'end';
      return g;
    }
    const pos = me.pos + move;
    if (pos >= 24) {
      me.cash += 200;
      log(g, `${me.name} ผ่านจุดเริ่มต้น รับ 200 เหรียญ`);
    }
    me.pos = pos % 24;
    log(g, `${me.name} ทอยได้ ${g.dice.join(' + ')} → ${BOARD[me.pos].name}`);
    land(g, me, rand);
    return g;
  }
  if (a.type === 'buy') {
    const t = BOARD[me.pos];
    need(g.phase === 'buy' && !g.owners[t.id] && me.cash >= t.price, 'เหรียญไม่พอหรือพื้นที่มีเจ้าของแล้ว');
    g.owners[t.id] = id;
    me.cash -= t.price;
    g.phase = 'end';
    log(g, `${me.name} ดูแล ${t.name} แล้ว`);
    return g;
  }
  if (a.type === 'auction') {
    need(g.phase === 'buy');
    g.phase = 'auction';
    g.auction = {
      tile: me.pos,
      high: 0,
      bidder: '',
      passed: []
    };
    return g;
  }
  if (a.type === 'answer') {
    need(g.phase === 'quiz' && Number.isInteger(a.answer) && a.answer >= 0 && a.answer < 3);
    const q = QUIZZES[g.quiz];
    const correct = a.answer === q.correct;
    me.cash += correct ? 100 : 0;
    me.heart += correct ? 1 : 0;
    g.feedback = (correct ? 'เยี่ยมเลย! +100 เหรียญ และ +1 ใจ • ' : 'เรียนรู้ไปด้วยกัน • ') + q.why;
    g.phase = 'end';
    log(g, `${me.name} เปิดการ์ดเรียนรู้: ${q.why}`);
    return g;
  }
  if (a.type === 'end') {
    need(g.phase === 'end' && me.cash >= 0, 'จัดการเหตุการณ์หรือหนี้ก่อนจบเทิร์น');
    if (g.doubles && !me.jail) {
      g.phase = 'roll';
      g.feedback = undefined;
      g.quiz = undefined;
      log(g, 'แต้มคู่! ทอยอีกครั้งในเทิร์นเดิม');
    } else next(g);
    return g;
  }
  throw new Error('ไม่รู้จักคำสั่ง');
}
export function botAction(g, p) {
  if (g.trade?.to === p.id) return {
    type: 'tradeReply',
    accept: false
  };
  if (g.auction) {
    if (g.auction.bidder === p.id || g.auction.passed.includes(p.id)) return null;
    return {
      type: p.cash > g.auction.high + 250 && g.auction.high < BOARD[g.auction.tile].price * .8 ? 'bid' : 'pass'
    };
  }
  if (g.players[g.turn].id !== p.id) return null;
  if (p.cash < 0) {
    const owned = BOARD.filter(t => g.owners[t.id] === p.id);
    const built = owned.sort((a, b) => (g.houses[b.id] || 0) - (g.houses[a.id] || 0)).find(t => g.houses[t.id]);
    if (built) return {
      type: 'sell',
      tile: built.id
    };
    const t = owned.find(t => !g.mortgage[t.id]);
    return t ? {
      type: 'mortgage',
      tile: t.id
    } : {
      type: 'bankrupt'
    };
  }
  if (g.phase === 'buy') return {
    type: p.cash > BOARD[p.pos].price + 150 ? 'buy' : 'auction'
  };
  if (g.phase === 'quiz') return {
    type: 'answer',
    answer: QUIZZES[g.quiz].correct
  };
  return {
    type: g.phase === 'roll' ? 'roll' : 'end'
  };
}

const jsonResponse = (data, status = 200) =>
  Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });

async function digest(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf))
    .map((n) => n.toString(16).padStart(2, '0'))
    .join('');
}

async function handleGameApi(req, env) {
  try {
    if (req.headers.get('origin') && req.headers.get('origin') !== new URL(req.url).origin) {
      return jsonResponse({ error: 'Origin ไม่ถูกต้อง' }, 403);
    }
    const raw = await req.text();
    if (raw.length > 4096) return jsonResponse({ error: 'ข้อมูลยาวเกินไป' }, 413);
    const a = JSON.parse(raw);
    const token = req.headers.get('x-player-token') || '';
    if (!/^[a-f0-9-]{36}$/.test(token)) {
      return jsonResponse({ error: 'กรุณาเริ่มเซสชันใหม่' }, 401);
    }
    const id = await digest(token);
    const db = env.DB;
    if (!db) {
      return jsonResponse({ error: 'ฐานข้อมูล D1 (DB) ยังไม่ได้เชื่อมต่อ กรุณาตรวจสอบ wrangler.toml' }, 503);
    }
    const code = String(a.code || '').toUpperCase();

    if (a.type === 'create') {
      // ล้างห้องที่หมดอายุแล้วออกอัตโนมัติเพื่อประหยัดพื้นที่ D1
      await db.prepare('DELETE FROM rooms WHERE expires <= ?').bind(Date.now()).run().catch(() => {});
      const recent = await db
        .prepare("SELECT COUNT(*) as n FROM rooms WHERE expires > ? AND json_extract(state,'$.host') = ?")
        .bind(Date.now(), id)
        .first();
      if ((recent?.n || 0) >= 50) {
        return jsonResponse({ error: 'สร้างได้สูงสุด 50 ห้องต่อเซสชันใน 24 ชั่วโมง' }, 429);
      }
      const newCode = Array.from(
        crypto.getRandomValues(new Uint8Array(6)),
        (n) => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[n % 32]
      ).join('');
      const g = createGame(newCode, id, String(a.name || 'เพื่อนใหม่'));
      await db
        .prepare('INSERT INTO rooms (code,state,version,expires) VALUES (?,?,0,?)')
        .bind(newCode, JSON.stringify(g), Date.now() + 86400000)
        .run();
      return jsonResponse({ game: g, id });
    }

    if (!/^[A-Z2-9]{6}$/.test(code)) {
      return jsonResponse({ error: 'รหัสห้องต้องมี 6 ตัว' }, 400);
    }
    const row = await db
      .prepare('SELECT state,version FROM rooms WHERE code=? AND expires>?')
      .bind(code, Date.now())
      .first();
    if (!row) {
      return jsonResponse({ error: 'ไม่พบห้อง หรือห้องหมดอายุ (24 ชั่วโมง)' }, 404);
    }

    let g = JSON.parse(row.state);
    let changed = false;

    if (a.type === 'join') {
      if (!g.players.some((p) => p.id === id)) {
        if (g.status !== 'lobby' || g.players.length >= 4) {
          return jsonResponse({ error: 'ห้องเต็มหรือเริ่มเกมแล้ว' }, 409);
        }
        g.players.push(player(id, String(a.name || 'เพื่อนใหม่')));
        changed = true;
      }
    } else {
      if (!g.players.some((p) => p.id === id)) {
        return jsonResponse({ error: 'กรุณาเข้าร่วมห้องก่อน' }, 403);
      }
      if (a.type === 'sync') {
        if (g.status === 'playing') {
          if (Date.now() > g.deadline) {
            g = act(g, id, { type: 'timeout' });
            changed = true;
          } else {
            const bot = g.players.find((p) => p.bot && !p.bankrupt && botAction(g, p));
            if (bot) {
              g = act(g, bot.id, botAction(g, bot));
              changed = true;
            }
          }
        }
      } else {
        g = act(g, id, g.status === 'playing' && Date.now() > g.deadline ? { type: 'timeout' } : a);
        changed = true;
      }
    }

    if (changed) {
      const result = await db
        .prepare('UPDATE rooms SET state=?,version=version+1 WHERE code=? AND version=?')
        .bind(JSON.stringify(g), code, row.version)
        .run();
      if (!result.meta?.changes) {
        return jsonResponse({ error: 'มีการอัปเดตพร้อมกัน กรุณาลองอีกครั้ง' }, 409);
      }
    }
    return jsonResponse({ game: g, id });
  } catch (e) {
    return jsonResponse({ error: e instanceof Error ? e.message : 'เกิดข้อผิดพลาด' }, 400);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/game' && request.method === 'POST') {
      return handleGameApi(request, env);
    }
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response('Not found', { status: 404 });
  },
};
