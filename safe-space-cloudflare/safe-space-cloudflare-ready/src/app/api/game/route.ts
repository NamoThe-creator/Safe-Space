import { env } from 'cloudflare:workers';
import { createGame,player,act,botAction, type Game } from '../../../lib/game';
export const dynamic='force-dynamic';
const response=(data:any,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
async function digest(s:string){return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))).map(n=>n.toString(16).padStart(2,'0')).join('');}
function clean(g:Game){return g;}
export async function POST(req:Request){try{
 if(req.headers.get('origin')&&req.headers.get('origin')!==new URL(req.url).origin)return response({error:'Origin ไม่ถูกต้อง'},403);
 const raw=await req.text();if(raw.length>4096)return response({error:'ข้อมูลยาวเกินไป'},413);
 const a=JSON.parse(raw);const token=req.headers.get('x-player-token')||'';if(!/^[a-f0-9-]{36}$/.test(token))return response({error:'กรุณาเริ่มเซสชันใหม่'},401);
 const id=await digest(token);const db=env.DB!;if(!db)return response({error:'ฐานข้อมูลยังไม่พร้อม'},503);
 const code=String(a.code||'').toUpperCase();
 if(a.type==='create'){
 const recent=await db.prepare('SELECT COUNT(*) as n FROM rooms WHERE expires > ? AND json_extract(state,\'$.host\') = ?').bind(Date.now(),id).first<{n:number}>();if((recent?.n||0)>=6)return response({error:'สร้างได้สูงสุด 6 ห้องต่อเซสชันใน 24 ชั่วโมง'},429);
 const code=Array.from(crypto.getRandomValues(new Uint8Array(6)),n=>'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[n%32]).join('');const g=createGame(code,id,String(a.name||'เพื่อนใหม่'));
 await db.prepare('INSERT INTO rooms (code,state,version,expires) VALUES (?,?,0,?)').bind(code,JSON.stringify(g),Date.now()+86400000).run();return response({game:clean(g),id});}
 if(!/^[A-Z2-9]{6}$/.test(code))return response({error:'รหัสห้องต้องมี 6 ตัว'},400);
 const row=await db.prepare('SELECT state,version FROM rooms WHERE code=? AND expires>?').bind(code,Date.now()).first<{state:string,version:number}>();if(!row)return response({error:'ไม่พบห้อง หรือห้องหมดอายุ (24 ชั่วโมง)'},404);
 let g:Game=JSON.parse(row.state);let changed=false;
 if(a.type==='join'){if(!g.players.some(p=>p.id===id)){if(g.status!=='lobby'||g.players.length>=4)return response({error:'ห้องเต็มหรือเริ่มเกมแล้ว'},409);g.players.push(player(id,String(a.name||'เพื่อนใหม่')));changed=true;}}
 else {if(!g.players.some(p=>p.id===id))return response({error:'กรุณาเข้าร่วมห้องก่อน'},403);
 if(a.type==='sync'){
 if(g.status==='playing') {if(Date.now()>g.deadline){g=act(g,id,{type:'timeout'});changed=true;}else{const bot=g.players.find(p=>p.bot&&!p.bankrupt&&botAction(g,p));if(bot){g=act(g,bot.id,botAction(g,bot));changed=true;}}}
 }else{g=act(g,id,g.status==='playing'&&Date.now()>g.deadline?{type:'timeout'}:a);changed=true;}}
 if(changed){const result=await db.prepare('UPDATE rooms SET state=?,version=version+1 WHERE code=? AND version=?').bind(JSON.stringify(g),code,row.version).run();if(!result.meta.changes)return response({error:'มีการอัปเดตพร้อมกัน กรุณาลองอีกครั้ง'},409);}
 return response({game:clean(g),id});
 }catch(e){return response({error:e instanceof Error?e.message:'เกิดข้อผิดพลาด'},400);}}
