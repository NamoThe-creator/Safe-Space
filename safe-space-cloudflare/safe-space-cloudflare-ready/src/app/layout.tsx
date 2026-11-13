import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Safe Space • Campus Tycoon',description:'ทอยเต๋า สร้างพื้นที่ปลอดภัย เรียนรู้ไปด้วยกัน — บอร์ดเกมออนไลน์ 2–4 คน',manifest:'/manifest.webmanifest',icons:{icon:'/icon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="th"><body>{children}</body></html>}
