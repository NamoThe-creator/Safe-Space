// Safe Space • Campus Tycoon (Browser Bundle)
(function() {
const GROUPS = ['#ec927b', '#e3b745', '#58ae9a', '#6d9cce', '#9a87c4', '#d681a6'];
const BOARD = [['จุดเริ่มต้น', 'start', '🚩'], ['ลานเพื่อนใจ', 'land', '🌳', 0, 100], ['เปิดใจ', 'quiz', '💬'], ['สวนร่วมใจ', 'land', '🌷', 0, 120], ['กองทุนส่วนกลาง', 'tax', '🪙'], ['รถรับส่งเหนือ', 'station', '🚌', 6, 200], ['มุมอ่านหนังสือ', 'land', '📚', 1, 140], ['โอกาสดี', 'chance', '✨'], ['ห้องสมุดกลาง', 'land', '🏛️', 1, 160], ['พักใจ', 'rest', '☕'], ['ชมรมศิลปะ', 'land', '🎨', 2, 180], ['เปิดใจ', 'quiz', '💬'], ['ชมรมดนตรี', 'land', '🎸', 2, 200], ['รถรับส่งใต้', 'station', '🚌', 6, 200], ['ร้านเพื่อนช่วยเพื่อน', 'land', '🥐', 3, 220], ['โอกาสดี', 'chance', '✨'], ['คาเฟ่รับฟัง', 'land', '☕', 3, 240], ['ไปพักใจ', 'goto', '🧘'], ['ห้องให้คำปรึกษา', 'land', '🛋️', 4, 260], ['เปิดใจ', 'quiz', '💬'], ['ศูนย์เพื่อนใจ', 'land', '💛', 4, 280], ['กองทุนส่วนกลาง', 'tax', '🪙'], ['ลานสร้างสรรค์', 'land', '🎪', 5, 300], ['พื้นที่ปลอดภัย', 'land', '🛡️', 5, 320]].map((a, i) => ({
  id: i,
  name: String(a[0]),
  type: String(a[1]),
  icon: String(a[2]),
  group: Number(a[3] ?? -1),
  price: Number(a[4] || 0)
}));
const QUIZZES = [{
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
function player(id, name, bot = false) {
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
function createGame(code, id, name) {
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
function worth(g, p) {
  return p.cash + BOARD.filter(t => g.owners[t.id] === p.id).reduce((s, t) => s + t.price * (g.mortgage[t.id] ? 0.5 : 1) + (g.houses[t.id] || 0) * 100, 0);
}
function log(g, s) {
  g.logs = [s, ...g.logs].slice(0, 50);
}
function need(v, m = 'ไม่สามารถทำรายการนี้ได้') {
  if (!v) throw new Error(m);
}
function rent(g, id) {
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
function act(original, id, a, rand = () => crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296, now = Date.now()) {
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
function botAction(g, p) {
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

const {
  useEffect,
  useState
} = React;
const COLORS = ['#df775d', '#518fba', '#d3ad46', '#839a6d'];
const TOKENS = ['🦊', '🐳', '🐝', '🐢'];
const PREVIEW = createGame('DEMO', 'demo', 'คุณ');
PREVIEW.status = 'preview';
PREVIEW.players = [player('demo', 'คุณ'), player('p2', 'เพื่อนคนที่ 2'), player('p3', 'เพื่อนคนที่ 3'), player('p4', 'เพื่อนคนที่ 4')];
PREVIEW.players.forEach((p, i) => p.pos = [0, 5, 12, 18][i]);
const money = n => n.toLocaleString('th-TH');
function cellPosition(i) {
  if (i <= 6) return {
    gridRow: 7,
    gridColumn: 7 - i
  };
  if (i <= 12) return {
    gridRow: 13 - i,
    gridColumn: 1
  };
  if (i <= 18) return {
    gridRow: 1,
    gridColumn: i - 11
  };
  return {
    gridRow: i - 17,
    gridColumn: 7
  };
}
function Page() {
  const [g, setG] = useState(null),
    [id, setId] = useState(''),
    [mode, setMode] = useState(''),
    [name, setName] = useState(''),
    [code, setCode] = useState(''),
    [error, setError] = useState(''),
    [busy, setBusy] = useState(false),
    [modal, setModal] = useState(''),
    [selected, setSelected] = useState(null),
    [tab, setTab] = useState('players'),
    [now, setNow] = useState(Date.now()),
    [install, setInstall] = useState(null),
    [give, setGive] = useState(''),
    [take, setTake] = useState(''),
    [offer, setOffer] = useState('0');
  useEffect(() => {
    let token = localStorage.getItem('ss-token');
    if (!token) {
      token = Array.from(crypto.getRandomValues(new Uint8Array(18)), n => n.toString(16).padStart(2, '0')).join('');
      localStorage.setItem('ss-token', token);
    }
    try {
      const saved = JSON.parse(localStorage.getItem('ss-practice') || 'null');
      if (saved) {
        setG(saved);
        setId('local');
        setMode('practice');
      }
    } catch {}
    navigator.serviceWorker?.register('/sw.js').catch(() => {});
    const handle = e => {
      e.preventDefault();
      setInstall(e);
    };
    window.addEventListener('beforeinstallprompt', handle);
    const tm = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      clearInterval(tm);
      window.removeEventListener('beforeinstallprompt', handle);
    };
  }, []);
  async function api(a, quiet = false) {
    if (!quiet) {
      setBusy(true);
      setError('');
    }
    try {
      const r = await fetch('/api/game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-player-token': localStorage.getItem('ss-token') || ''
        },
        body: JSON.stringify({
          ...a,
          code: a.code ?? g?.code
        })
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || 'เชื่อมต่อไม่สำเร็จ');
      setG(data.game);
      setId(data.id);
      setMode('online');
      localStorage.setItem('ss-room', data.game.code);
      if (!quiet) setModal('');
    } catch (e) {
      setError(e.message);
    } finally {
      if (!quiet) setBusy(false);
    }
  }
  function send(a) {
    setError('');
    if (mode === 'practice' && g) {
      try {
        setG(act(g, id, a));
      } catch (e) {
        setError(e.message);
      }
    } else api(a);
  }
  useEffect(() => {
    if (mode === 'practice' && g) localStorage.setItem('ss-practice', JSON.stringify(g));
  }, [g, mode]);
  useEffect(() => {
    if (mode !== 'online' || !g) return;
    const t = setInterval(() => {
      if (!document.hidden && !busy) api({
        type: 'sync'
      }, true);
    }, 2500);
    return () => clearInterval(t);
  }, [mode, g?.code, busy]);
  useEffect(() => {
    if (mode !== 'practice' || !g || g.status !== 'playing') return;
    const bot = g.players.find(p => p.bot && !p.bankrupt && botAction(g, p));
    if (!bot) return;
    const t = setTimeout(() => {
      try {
        setG(act(g, bot.id, botAction(g, bot)));
      } catch (e) {
        setError(e.message);
      }
    }, 1100);
    return () => clearTimeout(t);
  }, [g, mode]);
  function practice() {
    const game = createGame('PRACTICE', 'local', name.trim() || 'คุณ');
    game.players.push(player('bot-1', 'วาฬใจดี', true), player('bot-2', 'ผึ้งน้อย', true), player('bot-3', 'เต่าอุ่นใจ', true));
    setG(act(game, 'local', {
      type: 'start'
    }));
    setId('local');
    setMode('practice');
    setModal('');
    setError('');
  }
  const display = g || PREVIEW,
    active = display.players[display.turn],
    me = g?.players.find(p => p.id === id),
    myTurn = active.id === id,
    mine = BOARD.filter(t => g?.owners[t.id] === id),
    tile = selected === null ? null : BOARD[selected],
    owner = tile ? display.players.find(p => p.id === display.owners[tile.id]) : null;
  const actionDisabled = busy || !myTurn || g?.status !== 'playing';
  function exit() {
    setG(null);
    setMode('');
    localStorage.removeItem('ss-practice');
    setModal('');
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: "/",
    "aria-label": "Safe Space \u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-icon"
  }, "\u2661"), /*#__PURE__*/React.createElement("span", null, "safe space", /*#__PURE__*/React.createElement("span", {
    className: "brand-sub"
  }, "CAMPUS TYCOON"))), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("button", {
    className: "nav-active",
    onClick: () => setModal('')
  }, "\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E40\u0E01\u0E21"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setModal('learn')
  }, "\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setModal('rules')
  }, "\u0E27\u0E34\u0E18\u0E35\u0E40\u0E25\u0E48\u0E19 \u2197")), /*#__PURE__*/React.createElement("button", {
    className: "download",
    onClick: () => setModal('download')
  }, "\u2193 ", /*#__PURE__*/React.createElement("span", null, "\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E01\u0E21"))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "topline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " PLAY TOGETHER. GROW TOGETHER."), /*#__PURE__*/React.createElement("span", {
    className: "edition"
  }, "UNIVERSITY EDITION / 01")), /*#__PURE__*/React.createElement("section", {
    className: "intro"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "\u0E17\u0E2D\u0E22\u0E40\u0E15\u0E4B\u0E32 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48", /*#__PURE__*/React.createElement("span", null, "\u0E17\u0E35\u0E48\u0E17\u0E38\u0E01\u0E04\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E44\u0E14\u0E49", /*#__PURE__*/React.createElement("span", {
    className: "spark"
  }, "\u2733"))), /*#__PURE__*/React.createElement("p", null, "\u0E0B\u0E37\u0E49\u0E2D\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E21\u0E34\u0E15\u0E23\u0E20\u0E32\u0E1E \u0E41\u0E25\u0E30\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E08\u0E30\u0E22\u0E37\u0E19\u0E02\u0E49\u0E32\u0E07\u0E01\u0E31\u0E19", /*#__PURE__*/React.createElement("br", {
    className: "mobile-break"
  }), " \u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E40\u0E01\u0E21\u0E40\u0E25\u0E47\u0E01 \u0E46 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E17\u0E35\u0E48\u0E19\u0E48\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E02\u0E36\u0E49\u0E19")), /*#__PURE__*/React.createElement("div", {
    className: "intro-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatars"
  }, /*#__PURE__*/React.createElement("b", null, "\uD83E\uDD8A"), /*#__PURE__*/React.createElement("b", null, "\uD83D\uDC33"), /*#__PURE__*/React.createElement("b", null, "\uD83D\uDC1D"), /*#__PURE__*/React.createElement("b", null, "\uD83D\uDC22")), /*#__PURE__*/React.createElement("span", null, "2\u20134 \u0E04\u0E19\u0E15\u0E48\u0E2D\u0E2B\u0E49\u0E2D\u0E07 \xB7 30 \u0E23\u0E2D\u0E1A"), /*#__PURE__*/React.createElement("small", null, "\u0E40\u0E25\u0E48\u0E19\u0E01\u0E31\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19 \u0E2B\u0E23\u0E37\u0E2D\u0E1D\u0E36\u0E01\u0E01\u0E31\u0E1A\u0E1A\u0E2D\u0E17"))), /*#__PURE__*/React.createElement("section", {
    className: "game-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board-toolbar"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "live-pill"
  }, mode === 'online' ? '● ONLINE' : mode === 'practice' ? '● PRACTICE' : '✦ CAMPUS BOARD'), /*#__PURE__*/React.createElement("span", null, g ? `ห้อง ${g.code}` : 'มหาวิทยาลัยของเรา')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setModal('rules')
  }, "\u24D8 \u0E01\u0E15\u0E34\u0E01\u0E32\u0E40\u0E01\u0E21")), /*#__PURE__*/React.createElement("div", {
    className: "board-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board"
  }, BOARD.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: `tile ${t.price ? 'property' : 'special'} ${selected === t.id ? 'selected' : ''}`,
    style: {
      ...cellPosition(t.id),
      '--tile-color': GROUPS[t.group] || '#739d99'
    },
    onClick: () => setSelected(t.id),
    "aria-label": `${t.name}${t.price ? ' ราคา ' + t.price : ''}`
  }, t.price > 0 && /*#__PURE__*/React.createElement("div", {
    className: "color-strip",
    style: {
      background: GROUPS[t.group] || '#4d7978'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "tile-icon"
  }, t.icon), /*#__PURE__*/React.createElement("span", {
    className: "tile-name"
  }, t.name), /*#__PURE__*/React.createElement("small", null, t.price ? `◈ ${t.price}` : t.type === 'start' ? '+200 เหรียญ' : t.type === 'quiz' ? 'การ์ดความรู้' : t.type === 'tax' ? '-100 เหรียญ' : t.type === 'chance' ? 'การ์ดโอกาส' : 'พักสักนิด'), display.owners[t.id] && /*#__PURE__*/React.createElement("span", {
    className: "ownership",
    style: {
      background: COLORS[display.players.findIndex(p => p.id === display.owners[t.id])]
    }
  }, display.mortgage[t.id] ? 'จำนอง' : display.houses[t.id] === 5 ? '★ ศูนย์ใจ' : display.houses[t.id] ? '⌂'.repeat(display.houses[t.id]) : '●'), /*#__PURE__*/React.createElement("span", {
    className: "pieces"
  }, display.players.filter(p => p.pos === t.id && !p.bankrupt).map(p => /*#__PURE__*/React.createElement("span", {
    key: p.id,
    style: {
      background: COLORS[display.players.indexOf(p)]
    }
  }, TOKENS[display.players.indexOf(p)]))))), /*#__PURE__*/React.createElement("div", {
    className: "board-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "orbit orbit-one"
  }), /*#__PURE__*/React.createElement("div", {
    className: "orbit orbit-two"
  }), /*#__PURE__*/React.createElement("span", {
    className: "center-tag"
  }, "A LITTLE KINDNESS GOES A LONG WAY"), /*#__PURE__*/React.createElement("div", {
    className: "campus-art"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tree"
  }, "\uD83C\uDF33"), /*#__PURE__*/React.createElement("div", {
    className: "building"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roof"
  }, "\u2661"), /*#__PURE__*/React.createElement("div", {
    className: "windows"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
    className: "door"
  })), /*#__PURE__*/React.createElement("span", {
    className: "tree right"
  }, "\uD83C\uDF33"), /*#__PURE__*/React.createElement("div", {
    className: "art-ground"
  })), /*#__PURE__*/React.createElement("h2", null, "safe space", /*#__PURE__*/React.createElement("span", null, "CAMPUS TYCOON")), /*#__PURE__*/React.createElement("p", null, "\u0E17\u0E38\u0E01\u0E01\u0E49\u0E32\u0E27\u0E40\u0E25\u0E47\u0E01 \u0E46 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E44\u0E14\u0E49"), g?.status === 'playing' ? /*#__PURE__*/React.createElement("div", {
    className: "center-turn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dice"
  }, /*#__PURE__*/React.createElement("span", null, ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][g.dice[0]]), /*#__PURE__*/React.createElement("span", null, ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][g.dice[1]])), /*#__PURE__*/React.createElement("span", null, "\u0E23\u0E2D\u0E1A\u0E17\u0E35\u0E48 ", Math.min(g.round, 30), " / 30 \xB7 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E02\u0E2D\u0E07 ", active.name), /*#__PURE__*/React.createElement("small", null, mode === 'online' ? `เวลา ${Math.max(0, Math.ceil((g.deadline - now) / 1000))} วินาที` : 'โหมดฝึก • ไม่จำกัดเวลา')) : /*#__PURE__*/React.createElement("div", {
    className: "center-quote"
  }, "\u201C\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48\u0E21\u0E35\u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49\u0E17\u0E38\u0E01\u0E04\u0E19\u0E40\u0E2A\u0E21\u0E2D\u201D")))), /*#__PURE__*/React.createElement("div", {
    className: "board-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\u2196 \u0E41\u0E15\u0E30\u0E0A\u0E48\u0E2D\u0E07\u0E1A\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"), /*#__PURE__*/React.createElement("span", null, "\u25C8 \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E43\u0E08 ", /*#__PURE__*/React.createElement("i", null), " \u2661 \u0E04\u0E30\u0E41\u0E19\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08")), /*#__PURE__*/React.createElement("div", {
    className: "kindness"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCAC"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "\u0E04\u0E27\u0E32\u0E21\u0E43\u0E08\u0E14\u0E35 \u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E1F\u0E31\u0E07"), /*#__PURE__*/React.createElement("p", null, "\u0E44\u0E21\u0E48\u0E25\u0E49\u0E2D \u0E44\u0E21\u0E48\u0E41\u0E0A\u0E23\u0E4C\u0E0B\u0E49\u0E33 \u0E44\u0E21\u0E48\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E43\u0E2B\u0E49\u0E43\u0E04\u0E23\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1C\u0E0A\u0E34\u0E0D\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E22\u0E32\u0E01 \u0E46 \u0E04\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setModal('learn')
  }, "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21 \u2197"))), /*#__PURE__*/React.createElement("aside", null, !g ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "panel welcome"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-label"
  }, "LET\u2019S MAKE A SAFE SPACE"), /*#__PURE__*/React.createElement("h2", null, "\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E40\u0E25\u0E48\u0E19\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19\u0E44\u0E2B\u0E21?"), /*#__PURE__*/React.createElement("p", null, "\u0E0A\u0E27\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E02\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19", /*#__PURE__*/React.createElement("br", null), "\u0E41\u0E25\u0E49\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E20\u0E32\u0E23\u0E01\u0E34\u0E08\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22"), /*#__PURE__*/React.createElement("label", null, "\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E40\u0E01\u0E21", /*#__PURE__*/React.createElement("input", {
    placeholder: "\u0E40\u0E0A\u0E48\u0E19 \u0E19\u0E49\u0E2D\u0E07\u0E43\u0E08\u0E14\u0E35",
    maxLength: 24,
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    disabled: busy,
    onClick: () => api({
      type: 'create',
      name: name.trim() || 'เพื่อนใหม่'
    })
  }, "\uFF0B \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("button", {
    className: "secondary",
    onClick: () => setModal('join')
  }, "\u2318 \u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2B\u0E49\u0E2D\u0E07\u0E14\u0E49\u0E27\u0E22\u0E23\u0E2B\u0E31\u0E2A"), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }, /*#__PURE__*/React.createElement("span", null, "\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35")), /*#__PURE__*/React.createElement("button", {
    className: "practice",
    onClick: practice
  }, "\u2684 \u0E1D\u0E36\u0E01\u0E40\u0E25\u0E48\u0E19\u0E01\u0E31\u0E1A\u0E1A\u0E2D\u0E17 3 \u0E15\u0E31\u0E27 ", /*#__PURE__*/React.createElement("span", null, "\u2197")), /*#__PURE__*/React.createElement("div", {
    className: "micro"
  }, "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E47\u0E1A\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07 \xB7 \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E07\u0E34\u0E19\u0E08\u0E23\u0E34\u0E07 \xB7 \u0E40\u0E25\u0E48\u0E19\u0E1A\u0E19\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D\u0E44\u0E14\u0E49")), /*#__PURE__*/React.createElement("section", {
    className: "panel how"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-label"
  }, "YOUR FIRST THREE STEPS"), /*#__PURE__*/React.createElement("h3", null, "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E07\u0E48\u0E32\u0E22 \u0E46 \u0E43\u0E19 3 \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19"), [['01', 'สร้างห้อง ชวนเพื่อน', 'แชร์รหัส 6 ตัว เล่นได้สูงสุด 4 คน'], ['02', 'ทอยเต๋า ดูแลพื้นที่', 'ซื้อ แลกเปลี่ยน และพัฒนาพื้นที่ของคุณ'], ['03', 'เรียนรู้ แล้วเติบโต', 'ตอบการ์ดบูลลี่ รับเหรียญและคะแนนใจ']].map(x => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: x[0]
  }, /*#__PURE__*/React.createElement("b", null, x[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, x[1]), /*#__PURE__*/React.createElement("p", null, x[2])))))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "panel room"
  }, /*#__PURE__*/React.createElement("div", {
    className: "room-title"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mini-label"
  }, mode === 'online' ? 'ONLINE ROOM' : 'PRACTICE ROOM'), /*#__PURE__*/React.createElement("h2", null, g.status === 'lobby' ? 'รอเพื่อนเข้าห้อง' : g.status === 'finished' ? 'จบเกมแล้ว 🎉' : 'มาสร้างพื้นที่ปลอดภัย')), /*#__PURE__*/React.createElement("span", {
    className: "room-count"
  }, g.players.length, "/4")), mode === 'online' && /*#__PURE__*/React.createElement("button", {
    className: "room-code",
    onClick: () => navigator.clipboard.writeText(g.code).then(() => setError('คัดลอกรหัสห้องแล้ว')).catch(() => setError('รหัสห้อง: ' + g.code))
  }, g.code, " ", /*#__PURE__*/React.createElement("small", null, "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A \u25A2")), /*#__PURE__*/React.createElement("div", {
    className: "aside-tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: tab === 'players' ? 'active' : '',
    onClick: () => setTab('players')
  }, "\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19"), /*#__PURE__*/React.createElement("button", {
    className: tab === 'assets' ? 'active' : '',
    onClick: () => setTab('assets')
  }, "\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19"), /*#__PURE__*/React.createElement("button", {
    className: tab === 'log' ? 'active' : '',
    onClick: () => setTab('log')
  }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E01\u0E21")), tab === 'players' ? /*#__PURE__*/React.createElement("div", {
    className: "player-list"
  }, g.players.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: `player ${g.turn === i && g.status === 'playing' ? 'current' : ''} ${p.bankrupt ? 'out' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar",
    style: {
      background: COLORS[i] + '25'
    }
  }, TOKENS[i]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, p.name, " ", p.id === id && /*#__PURE__*/React.createElement("small", null, "(\u0E04\u0E38\u0E13)")), /*#__PURE__*/React.createElement("small", null, p.bot ? 'บอท • ' : '', p.bankrupt ? 'ออกจากเกม' : `♡ ${p.heart} · ${BOARD.filter(t => g.owners[t.id] === p.id).length} พื้นที่`)), /*#__PURE__*/React.createElement("b", null, "\u25C8 ", money(p.cash))))) : tab === 'assets' ? /*#__PURE__*/React.createElement("div", {
    className: "assets"
  }, mine.length ? mine.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setSelected(t.id)
  }, /*#__PURE__*/React.createElement("span", null, t.icon, " ", t.name), /*#__PURE__*/React.createElement("small", null, g.mortgage[t.id] ? 'จำนอง' : `ค่าเยี่ยม ${rent(g, t.id)}`, " \u2192"))) : /*#__PURE__*/React.createElement("p", null, "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48 \u0E17\u0E2D\u0E22\u0E40\u0E15\u0E4B\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22")) : /*#__PURE__*/React.createElement("div", {
    className: "log-list"
  }, g.logs.map((s, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, s))), g.status === 'lobby' ? /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "\u0E2A\u0E48\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E27\u0E47\u0E1A\u0E41\u0E25\u0E49\u0E27\u0E01\u0E14 \u201C\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2B\u0E49\u0E2D\u0E07\u201D"), g.host === id ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "primary",
    disabled: busy || g.players.length < 2,
    onClick: () => send({
      type: 'start'
    })
  }, "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E01\u0E21 \u2192"), /*#__PURE__*/React.createElement("button", {
    className: "secondary",
    disabled: busy || g.players.length >= 4,
    onClick: () => send({
      type: 'bot'
    })
  }, "\uFF0B \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1A\u0E2D\u0E17")) : /*#__PURE__*/React.createElement("p", null, "\u0E23\u0E2D\u0E40\u0E08\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E01\u0E21\u2026")) : g.status === 'finished' ? /*#__PURE__*/React.createElement("div", {
    className: "results"
  }, /*#__PURE__*/React.createElement("h3", null, "\uD83C\uDFC6 ", g.players.find(p => p.id === g.winner)?.name), [...g.players].sort((a, b) => worth(g, b) - worth(g, a)).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: p.id
  }, i + 1, ". ", p.name, /*#__PURE__*/React.createElement("b", null, money(worth(g, p)), " \u25C8 \xB7 ", p.heart, " \u2661"))), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: exit
  }, "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01")) : /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "turn-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), myTurn ? 'ถึงตาคุณแล้ว' : `รอ ${active.name}`), g.phase === 'roll' && /*#__PURE__*/React.createElement("button", {
    className: "primary roll",
    disabled: actionDisabled,
    onClick: () => send({
      type: 'roll'
    })
  }, "\u2684 ", active.jail ? 'พักใจ 1 เทิร์น' : 'ทอยลูกเต๋า'), g.phase === 'buy' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, BOARD[active.pos].icon, " ", BOARD[active.pos].name, " \u2022 \u25C8 ", BOARD[active.pos].price), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    disabled: actionDisabled || active.cash < BOARD[active.pos].price,
    onClick: () => send({
      type: 'buy'
    })
  }, "\u0E0B\u0E37\u0E49\u0E2D\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E19\u0E35\u0E49"), /*#__PURE__*/React.createElement("button", {
    className: "secondary",
    disabled: actionDisabled,
    onClick: () => send({
      type: 'auction'
    })
  }, "\u0E40\u0E1B\u0E34\u0E14\u0E1B\u0E23\u0E30\u0E21\u0E39\u0E25\u0E41\u0E17\u0E19")), g.phase === 'quiz' && /*#__PURE__*/React.createElement("div", {
    className: "quiz-card"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCAC \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E08"), /*#__PURE__*/React.createElement("h3", null, QUIZZES[g.quiz].q), QUIZZES[g.quiz].a.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    disabled: actionDisabled,
    onClick: () => send({
      type: 'answer',
      answer: i
    })
  }, i + 1, ". ", a))), g.feedback && /*#__PURE__*/React.createElement("p", {
    className: "feedback"
  }, g.feedback), g.auction && /*#__PURE__*/React.createElement("div", {
    className: "auction"
  }, /*#__PURE__*/React.createElement("h3", null, "\uD83D\uDD28 \u0E1B\u0E23\u0E30\u0E21\u0E39\u0E25 ", BOARD[g.auction.tile].name), /*#__PURE__*/React.createElement("p", null, "\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 \u25C8 ", g.auction.high, " ", g.players.find(p => p.id === g.auction?.bidder)?.name), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    disabled: busy || me?.bankrupt || g.auction.passed.includes(id) || g.auction.bidder === id || (me?.cash || 0) < g.auction.high + 20,
    onClick: () => send({
      type: 'bid'
    })
  }, "\u0E40\u0E2A\u0E19\u0E2D ", g.auction.high + 20, " \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D"), /*#__PURE__*/React.createElement("button", {
    className: "secondary",
    disabled: busy || g.auction.passed.includes(id) || g.auction.bidder === id,
    onClick: () => send({
      type: 'pass'
    })
  }, "\u0E44\u0E21\u0E48\u0E23\u0E48\u0E27\u0E21\u0E1B\u0E23\u0E30\u0E21\u0E39\u0E25")), g.phase === 'end' && /*#__PURE__*/React.createElement("button", {
    className: "primary",
    disabled: actionDisabled || active.cash < 0 || !!g.trade,
    onClick: () => send({
      type: 'end'
    })
  }, g.doubles && !active.jail ? 'แต้มคู่! ทอยต่อ →' : 'จบเทิร์น →'), myTurn && active.cash < 0 && /*#__PURE__*/React.createElement("div", {
    className: "debt"
  }, "\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E15\u0E34\u0E14\u0E25\u0E1A: \u0E02\u0E32\u0E22\u0E2A\u0E34\u0E48\u0E07\u0E1B\u0E25\u0E39\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E08\u0E33\u0E19\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E41\u0E17\u0E47\u0E1A\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19", /*#__PURE__*/React.createElement("button", {
    className: "secondary",
    onClick: () => setModal('bankrupt')
  }, "\u0E22\u0E2D\u0E21\u0E41\u0E1E\u0E49\u0E41\u0E25\u0E30\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E40\u0E01\u0E21")), myTurn && g.phase === 'end' && !g.trade && mine.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "text-button",
    onClick: () => setModal('trade')
  }, "\u21C4 \u0E40\u0E2A\u0E19\u0E2D\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48"), g.trade && /*#__PURE__*/React.createElement("div", {
    className: "trade-notice"
  }, /*#__PURE__*/React.createElement("p", null, g.players.find(p => p.id === g.trade.from)?.name, " \u0E40\u0E2A\u0E19\u0E2D ", BOARD[g.trade.give].name, " + ", g.trade.cash, " \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D \u0E41\u0E25\u0E01 ", BOARD[g.trade.take].name), g.trade.to === id ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => send({
      type: 'tradeReply',
      accept: true
    })
  }, "\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A"), /*#__PURE__*/React.createElement("button", {
    className: "secondary",
    onClick: () => send({
      type: 'tradeReply',
      accept: false
    })
  }, "\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18")) : g.trade.from === id ? /*#__PURE__*/React.createElement("button", {
    className: "secondary",
    onClick: () => send({
      type: 'cancelTrade'
    })
  }, "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D") : null))), /*#__PURE__*/React.createElement("section", {
    className: "panel small-note"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDF31"), /*#__PURE__*/React.createElement("p", null, "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E43\u0E08\u0E1A\u0E2D\u0E01\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49", /*#__PURE__*/React.createElement("br", null), "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E01\u0E32\u0E23\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E38\u0E13\u0E04\u0E48\u0E32\u0E02\u0E2D\u0E07\u0E43\u0E04\u0E23")), /*#__PURE__*/React.createElement("button", {
    className: "text-button full",
    onClick: () => setModal('leave')
  }, "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01 / \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2B\u0E49\u0E2D\u0E07")), error && /*#__PURE__*/React.createElement("div", {
    className: "error",
    role: "status"
  }, error, /*#__PURE__*/React.createElement("button", {
    onClick: () => setError('')
  }, "\xD7")))), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-logo"
  }, "\u2661 safe space ", /*#__PURE__*/React.createElement("span", null, "\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E40\u0E25\u0E47\u0E01 \u0E46 \u0E02\u0E2D\u0E07\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08")), /*#__PURE__*/React.createElement("p", null, "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \xB7 \u0E40\u0E01\u0E21\u0E15\u0E49\u0E19\u0E09\u0E1A\u0E31\u0E1A\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E41\u0E23\u0E07\u0E1A\u0E31\u0E19\u0E14\u0E32\u0E25\u0E43\u0E08\u0E08\u0E32\u0E01\u0E40\u0E01\u0E21\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E32\u0E22\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48 \xB7 \xA9 2026"))), selected !== null && tile && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: () => setSelected(null)
  }, /*#__PURE__*/React.createElement("section", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": tile.name,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "close",
    onClick: () => setSelected(null)
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    className: "detail-icon"
  }, tile.icon), /*#__PURE__*/React.createElement("h2", null, tile.name), tile.price ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "\u0E23\u0E32\u0E04\u0E32\u0E0B\u0E37\u0E49\u0E2D ", tile.price, " \u25C8 \xB7 \u0E04\u0E48\u0E32\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21 ", rent(display, tile.id), " \u25C8"), /*#__PURE__*/React.createElement("p", null, "\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25: ", owner?.name || 'ยังไม่มีเจ้าของ', " \xB7 ", display.mortgage[tile.id] ? 'จำนองอยู่' : `ระดับ ${display.houses[tile.id] || 0}/5`), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "\u0E04\u0E23\u0E1A\u0E0A\u0E38\u0E14\u0E2A\u0E35\u0E44\u0E14\u0E49\u0E04\u0E48\u0E32\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21 2 \u0E40\u0E17\u0E48\u0E32 \u2022 \u0E2A\u0E23\u0E49\u0E32\u0E07 100/\u0E23\u0E30\u0E14\u0E31\u0E1A \u2022 \u0E02\u0E32\u0E22\u0E04\u0E37\u0E19 50/\u0E23\u0E30\u0E14\u0E31\u0E1A \u2022 \u0E08\u0E33\u0E19\u0E2D\u0E07 50% \u2022 \u0E44\u0E16\u0E48\u0E16\u0E2D\u0E19 55% \u0E02\u0E2D\u0E07\u0E23\u0E32\u0E04\u0E32\u0E0B\u0E37\u0E49\u0E2D"), owner?.id === id && g?.status === 'playing' && /*#__PURE__*/React.createElement("div", {
    className: "manage-grid"
  }, [['build', '⌂ พัฒนา +1'], ['sell', '− ขายสิ่งปลูกสร้าง'], ['mortgage', 'จำนอง'], ['redeem', 'ไถ่ถอน']].map(([type, label]) => /*#__PURE__*/React.createElement("button", {
    className: "secondary",
    key: type,
    disabled: !myTurn || busy,
    onClick: () => {
      send({
        type,
        tile: tile.id
      });
      setSelected(null);
    }
  }, label)))) : /*#__PURE__*/React.createElement("p", null, tile.type === 'quiz' ? 'ตอบสถานการณ์การบูลลี่ เรียนรู้วิธีรับมืออย่างปลอดภัย ตอบถูกได้รับ 100 เหรียญและ 1 คะแนนใจ' : tile.type === 'start' ? 'เดินผ่านหรือหยุดที่จุดเริ่มต้น รับ 200 เหรียญ' : tile.type === 'tax' ? 'ร่วมสมทบกองทุนพื้นที่ส่วนกลาง 100 เหรียญ' : tile.type === 'chance' ? 'เปิดการ์ดกิจกรรมสุ่ม รับทุนหรือร่วมจ่ายเพื่อพัฒนามหาวิทยาลัย' : tile.type === 'goto' ? 'ย้ายไปช่องพักใจและหยุด 1 เทิร์น ไม่เกี่ยวกับความผิดของผู้ถูกบูลลี่' : 'แวะเยี่ยมได้ตามปกติ หากถูกส่งมาจะพัก 1 เทิร์น'))), modal && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: () => setModal('')
  }, /*#__PURE__*/React.createElement("section", {
    className: `modal ${modal === 'learn' ? 'wide' : ''}`,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E21",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "close",
    onClick: () => setModal('')
  }, "\xD7"), modal === 'join' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "mini-label"
  }, "JOIN YOUR FRIENDS"), /*#__PURE__*/React.createElement("h2", null, "\u0E21\u0E35\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32\u0E07\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E40\u0E2A\u0E21\u0E2D"), /*#__PURE__*/React.createElement("label", null, "\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E40\u0E01\u0E21", /*#__PURE__*/React.createElement("input", {
    value: name,
    maxLength: 24,
    onChange: e => setName(e.target.value),
    placeholder: "\u0E19\u0E49\u0E2D\u0E07\u0E43\u0E08\u0E14\u0E35"
  })), /*#__PURE__*/React.createElement("label", null, "\u0E23\u0E2B\u0E31\u0E2A\u0E2B\u0E49\u0E2D\u0E07 6 \u0E15\u0E31\u0E27", /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: code,
    maxLength: 6,
    onChange: e => setCode(e.target.value.toUpperCase()),
    placeholder: "ABC234",
    className: "code-input"
  })), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    disabled: busy || code.length !== 6,
    onClick: () => api({
      type: 'join',
      code,
      name: name.trim() || 'เพื่อนใหม่'
    })
  }, "\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2B\u0E49\u0E2D\u0E07 \u2192"), error && /*#__PURE__*/React.createElement("p", {
    className: "error"
  }, error), /*#__PURE__*/React.createElement("button", {
    className: "text-button",
    onClick: () => {
      const last = localStorage.getItem('ss-room');
      if (last) api({
        type: 'sync',
        code: last
      });else setError('ยังไม่มีห้องล่าสุด');
    }
  }, "\u0E01\u0E25\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14")), modal === 'rules' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "mini-label"
  }, "HOW TO PLAY"), /*#__PURE__*/React.createElement("h2", null, "\u0E01\u0E15\u0E34\u0E01\u0E32 Campus Tycoon"), /*#__PURE__*/React.createElement("ol", {
    className: "rules"
  }, /*#__PURE__*/React.createElement("li", null, "\u0E40\u0E25\u0E48\u0E19 2\u20134 \u0E04\u0E19 \u0E40\u0E23\u0E34\u0E48\u0E21\u0E04\u0E19\u0E25\u0E30 1,500 \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D \u0E17\u0E2D\u0E22\u0E25\u0E39\u0E01\u0E40\u0E15\u0E4B\u0E32 2 \u0E25\u0E39\u0E01 \u0E40\u0E14\u0E34\u0E19\u0E23\u0E2D\u0E1A\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19 \u0E1C\u0E48\u0E32\u0E19\u0E08\u0E38\u0E14\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E23\u0E31\u0E1A 200 \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D"), /*#__PURE__*/React.createElement("li", null, "\u0E0B\u0E37\u0E49\u0E2D\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E1B\u0E34\u0E14\u0E1B\u0E23\u0E30\u0E21\u0E39\u0E25 \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E32\u0E04\u0E32\u0E04\u0E23\u0E31\u0E49\u0E07\u0E25\u0E30 20 \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D \u0E04\u0E19\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E1B\u0E23\u0E30\u0E21\u0E39\u0E25\u0E15\u0E48\u0E2D\u0E01\u0E14\u0E1C\u0E48\u0E32\u0E19 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E2A\u0E19\u0E2D\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E04\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27\u0E08\u0E36\u0E07\u0E1B\u0E34\u0E14\u0E1B\u0E23\u0E30\u0E21\u0E39\u0E25"), /*#__PURE__*/React.createElement("li", null, "\u0E40\u0E02\u0E49\u0E32\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E04\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E08\u0E48\u0E32\u0E22\u0E04\u0E48\u0E32\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21 \u0E16\u0E37\u0E2D\u0E04\u0E23\u0E1A\u0E2A\u0E35\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E48\u0E32\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21 2 \u0E40\u0E17\u0E48\u0E32 \u0E1E\u0E31\u0E12\u0E19\u0E32\u0E41\u0E1A\u0E1A\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E19\u0E44\u0E14\u0E49 5 \u0E23\u0E30\u0E14\u0E31\u0E1A (\u0E23\u0E30\u0E14\u0E31\u0E1A 5 \u0E40\u0E1B\u0E47\u0E19\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E43\u0E08) \u0E23\u0E32\u0E04\u0E32\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E25\u0E30 100 \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D"), /*#__PURE__*/React.createElement("li", null, "\u0E41\u0E15\u0E49\u0E21\u0E04\u0E39\u0E48\u0E44\u0E14\u0E49\u0E17\u0E2D\u0E22\u0E15\u0E48\u0E2D \u0E41\u0E15\u0E49\u0E21\u0E04\u0E39\u0E48\u0E15\u0E34\u0E14\u0E01\u0E31\u0E19 3 \u0E04\u0E23\u0E31\u0E49\u0E07\u0E44\u0E1B\u0E1E\u0E31\u0E01\u0E43\u0E08 \u0E1E\u0E31\u0E01 1 \u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19\u0E41\u0E25\u0E49\u0E27\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32 \u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E25\u0E07\u0E42\u0E17\u0E29\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E16\u0E39\u0E01\u0E1A\u0E39\u0E25\u0E25\u0E35\u0E48"), /*#__PURE__*/React.createElement("li", null, "\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E08\u0E15\u0E2D\u0E1A\u0E16\u0E39\u0E01\u0E44\u0E14\u0E49 100 \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E41\u0E25\u0E30 1 \u0E43\u0E08 \u0E15\u0E2D\u0E1A\u0E1C\u0E34\u0E14\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32\u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E40\u0E2A\u0E21\u0E2D"), /*#__PURE__*/React.createElement("li", null, "\u0E41\u0E25\u0E01\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E08\u0E33\u0E19\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E48\u0E07\u0E1B\u0E25\u0E39\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E07\u0E34\u0E19\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E44\u0E14\u0E49 \u0E2D\u0E35\u0E01\u0E1D\u0E48\u0E32\u0E22\u0E15\u0E49\u0E2D\u0E07\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A \u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E08\u0E1A\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19"), /*#__PURE__*/React.createElement("li", null, "\u0E2B\u0E32\u0E01\u0E15\u0E34\u0E14\u0E2B\u0E19\u0E35\u0E49 \u0E43\u0E2B\u0E49\u0E02\u0E32\u0E22\u0E2A\u0E34\u0E48\u0E07\u0E1B\u0E25\u0E39\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E37\u0E19\u0E04\u0E23\u0E36\u0E48\u0E07\u0E23\u0E32\u0E04\u0E32 \u0E08\u0E33\u0E19\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E14\u0E34\u0E19 50% \u0E02\u0E2D\u0E07\u0E23\u0E32\u0E04\u0E32 \u0E44\u0E16\u0E48\u0E16\u0E2D\u0E19 55% \u0E08\u0E33\u0E19\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E16\u0E49\u0E32\u0E0A\u0E38\u0E14\u0E2A\u0E35\u0E22\u0E31\u0E07\u0E21\u0E35\u0E2A\u0E34\u0E48\u0E07\u0E1B\u0E25\u0E39\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07"), /*#__PURE__*/React.createElement("li", null, "\u0E04\u0E23\u0E1A 30 \u0E23\u0E2D\u0E1A \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E04\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27 \u0E08\u0E31\u0E14\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E4C\u0E2A\u0E34\u0E19\u0E23\u0E27\u0E21 (\u0E17\u0E35\u0E48\u0E14\u0E34\u0E19\u0E08\u0E33\u0E19\u0E2D\u0E07\u0E04\u0E34\u0E14\u0E04\u0E23\u0E36\u0E48\u0E07\u0E23\u0E32\u0E04\u0E32) \u0E43\u0E0A\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19\u0E43\u0E08\u0E15\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E2A\u0E21\u0E2D"), /*#__PURE__*/React.createElement("li", null, "\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u0E43\u0E2B\u0E49\u0E40\u0E27\u0E25\u0E32 90 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35\u0E15\u0E48\u0E2D\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E2B\u0E21\u0E14\u0E40\u0E27\u0E25\u0E32\u0E41\u0E25\u0E49\u0E27\u0E02\u0E49\u0E32\u0E21\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 \u0E2B\u0E32\u0E01\u0E22\u0E31\u0E07\u0E15\u0E34\u0E14\u0E2B\u0E19\u0E35\u0E49\u0E08\u0E30\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E40\u0E01\u0E21 \u0E2B\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E2D\u0E32\u0E22\u0E38 24 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07 \u0E23\u0E35\u0E40\u0E1F\u0E23\u0E0A\u0E41\u0E25\u0E49\u0E27\u0E01\u0E14\u0E01\u0E25\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E2B\u0E49\u0E2D\u0E07\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14\u0E44\u0E14\u0E49\u0E14\u0E49\u0E27\u0E22\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E14\u0E34\u0E21"))), modal === 'learn' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "mini-label"
  }, "KINDNESS TOOLKIT"), /*#__PURE__*/React.createElement("h2", null, "\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22 \u0E40\u0E23\u0E34\u0E48\u0E21\u0E17\u0E35\u0E48\u0E40\u0E23\u0E32"), /*#__PURE__*/React.createElement("p", null, "\u0E44\u0E21\u0E48\u0E27\u0E48\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19\u0E01\u0E23\u0E30\u0E14\u0E32\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E43\u0E19\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E08\u0E23\u0E34\u0E07 \u0E17\u0E38\u0E01\u0E04\u0E19\u0E04\u0E27\u0E23\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E40\u0E04\u0E32\u0E23\u0E1E"), /*#__PURE__*/React.createElement("div", {
    className: "learn-grid"
  }, QUIZZES.map((q, i) => /*#__PURE__*/React.createElement("article", {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, "0", i + 1, " / \uD83D\uDCAC"), /*#__PURE__*/React.createElement("h3", null, q.q), /*#__PURE__*/React.createElement("p", null, q.why)))), /*#__PURE__*/React.createElement("div", {
    className: "feedback"
  }, "\u0E2B\u0E32\u0E01\u0E40\u0E01\u0E34\u0E14\u0E40\u0E2B\u0E15\u0E38\u0E08\u0E23\u0E34\u0E07: \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E08\u0E38\u0E14\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22 \u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2D\u0E32\u0E08\u0E32\u0E23\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32 \u0E01\u0E34\u0E08\u0E01\u0E32\u0E23\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E02\u0E2D\u0E07\u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22 \u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E1C\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E43\u0E19\u0E40\u0E01\u0E21")), modal === 'download' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "mini-label"
  }, "TAKE KINDNESS WITH YOU"), /*#__PURE__*/React.createElement("h2", null, "\u0E1E\u0E32 Safe Space \u0E44\u0E1B\u0E14\u0E49\u0E27\u0E22"), /*#__PURE__*/React.createElement("p", null, "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E25\u0E48\u0E19\u0E1C\u0E48\u0E32\u0E19\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E14\u0E49\u0E1A\u0E19\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D \u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2D\u0E34\u0E19\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E47\u0E15"), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: async () => {
      if (install) {
        await install.prompt();
        setInstall(null);
      } else setError('ใช้เมนูเบราว์เซอร์ → เพิ่มไปยังหน้าจอหลัก / ติดตั้งแอป หากเบราว์เซอร์รองรับ');
    }
  }, "\uFF0B \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E01\u0E21\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D\u0E2B\u0E25\u0E31\u0E01"), /*#__PURE__*/React.createElement("a", {
    className: "secondary anchor",
    href: "/safe-space-source.zip",
    download: true
  }, "\u2193 \u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E0B\u0E2D\u0E23\u0E4C\u0E2A\u0E42\u0E04\u0E49\u0E14\u0E17\u0E31\u0E49\u0E07\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23 (.zip)"), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "\u0E44\u0E1F\u0E25\u0E4C ZIP \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E19\u0E33\u0E44\u0E1B\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E40\u0E2D\u0E07 \u0E21\u0E35\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 \u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49 Node.js \u0E41\u0E25\u0E30 Cloudflare Workers/D1 \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E44\u0E1F\u0E25\u0E4C\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 Windows"), error && /*#__PURE__*/React.createElement("p", null, error)), modal === 'trade' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "\u21C4 \u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48"), /*#__PURE__*/React.createElement("label", null, "\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E17\u0E35\u0E48\u0E40\u0E2A\u0E19\u0E2D", /*#__PURE__*/React.createElement("select", {
    value: give,
    onChange: e => setGive(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48"), mine.filter(t => !g.houses[t.id] && !g.mortgage[t.id]).map(t => /*#__PURE__*/React.createElement("option", {
    key: t.id,
    value: t.id
  }, t.name)))), /*#__PURE__*/React.createElement("label", null, "\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23", /*#__PURE__*/React.createElement("select", {
    value: take,
    onChange: e => setTake(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48"), BOARD.filter(t => g.owners[t.id] && g.owners[t.id] !== id && !g.houses[t.id] && !g.mortgage[t.id]).map(t => /*#__PURE__*/React.createElement("option", {
    key: t.id,
    value: t.id
  }, t.name)))), /*#__PURE__*/React.createElement("label", null, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E07\u0E34\u0E19\u0E43\u0E2B\u0E49\u0E40\u0E08\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48", /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    step: "1",
    value: offer,
    onChange: e => setOffer(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    disabled: give === '' || take === '',
    onClick: () => {
      send({
        type: 'trade',
        give: Number(give),
        take: Number(take),
        cash: Number(offer)
      });
      setModal('');
    }
  }, "\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D")), modal === 'leave' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01?"), /*#__PURE__*/React.createElement("p", null, mode === 'online' ? 'คุณยังอยู่ในห้องเดิม กลับเข้าห้องล่าสุดได้ภายใน 24 ชั่วโมง เทิร์นออนไลน์ยังเดินต่อเมื่อหมดเวลา' : 'ความคืบหน้าฝึกเล่นจะถูกล้าง'), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: exit
  }, "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01")), modal === 'bankrupt' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E40\u0E01\u0E21?"), /*#__PURE__*/React.createElement("p", null, "\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E08\u0E30\u0E04\u0E37\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07 \u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E40\u0E25\u0E48\u0E19\u0E15\u0E48\u0E2D"), /*#__PURE__*/React.createElement("button", {
    className: "primary",
    onClick: () => {
      send({
        type: 'bankrupt'
      });
      setModal('');
    }
  }, "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E41\u0E1E\u0E49")))));
}

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(React.createElement(Page));
}
})();
