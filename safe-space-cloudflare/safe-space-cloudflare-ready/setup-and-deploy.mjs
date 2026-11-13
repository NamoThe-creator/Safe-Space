import { execSync } from 'node:child_process';
import fs from 'node:fs';

function run(cmd, inherit = true) {
  console.log(`\n> ${cmd}`);
  return execSync(cmd, {
    stdio: inherit ? 'inherit' : 'pipe',
    encoding: 'utf8',
  });
}

console.log('====================================================');
console.log(' Safe Space • Campus Tycoon — ตัวช่วยขึ้นเว็บ Cloudflare');
console.log('====================================================');

try {
  console.log('\n[1/4] ตรวจสอบการเข้าสู่ระบบ Cloudflare...');
  try {
    run('npx wrangler whoami', false);
    console.log('เข้าสู่ระบบ Cloudflare แล้ว');
  } catch {
    console.log('กำลังเปิดเบราว์เซอร์เพื่อเข้าสู่ระบบ Cloudflare (กด Allow ในหน้าเว็บที่เด้งขึ้นมา)...');
    run('npx wrangler login', true);
  }

  console.log('\n[2/4] ตรวจสอบหรือสร้างฐานข้อมูล Cloudflare D1 (safe-space-db)...');
  let dbId = '';
  try {
    const listOut = run('npx wrangler d1 list --json', false);
    const list = JSON.parse(listOut);
    const found = Array.isArray(list) && list.find((d) => d.name === 'safe-space-db');
    if (found && found.uuid) {
      dbId = found.uuid;
      console.log(`พบฐานข้อมูลเดิมแล้ว: ${dbId}`);
    }
  } catch {}

  if (!dbId) {
    const createOut = run('npx wrangler d1 create safe-space-db', false);
    console.log(createOut);
    const match = createOut.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
    if (match) {
      dbId = match[0];
    }
  }

  if (dbId) {
    let toml = fs.readFileSync('wrangler.toml', 'utf8');
    toml = toml.replace(
      /database_id\s*=\s*"[^"]*"/,
      `database_id = "${dbId}"`
    );
    fs.writeFileSync('wrangler.toml', toml, 'utf8');
    console.log(`อัปเดต database_id = "${dbId}" ลงใน wrangler.toml เรียบร้อยแล้ว`);
  } else {
    console.warn('คำเตือน: ไม่สามารถดึง database_id อัตโนมัติได้ กรุณาตรวจสอบไฟล์ wrangler.toml');
  }

  console.log('\n[3/4] สร้างตารางห้องเล่นเกม (rooms) บนฐานข้อมูลออนไลน์...');
  run('npx wrangler d1 execute safe-space-db --remote --file=./drizzle/0000_moaning_blade.sql', true);

  console.log('\n[4/4] กำลังอัปโหลดเว็บไซต์ขึ้น Cloudflare Workers...');
  run('npx wrangler deploy', true);

  console.log('\n====================================================');
  console.log(' สำเร็จ! เว็บเกมของคุณออนไลน์ตลอด 24 ชม. เรียบร้อยแล้ว');
  console.log(' คัดลอกลิงก์ https://safe-space-campus-tycoon.<ชื่อบัญชี>.workers.dev');
  console.log(' ด้านบนไปส่งให้อาจารย์และเพื่อนในคลาสเข้าเล่นพร้อมกันได้เลย!');
  console.log('====================================================');
} catch (err) {
  console.error('\nเกิดข้อผิดพลาดระหว่างตั้งค่า:', err.message || err);
  process.exit(1);
}
