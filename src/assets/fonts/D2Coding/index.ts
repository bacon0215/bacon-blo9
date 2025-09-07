import localFont from 'next/font/local'
import { Fira_Code } from 'next/font/google'

export const d2coding = localFont({
  src: [
    { path: '/fonts/D2Coding.woff2', weight: '400', style: 'normal' },
    { path: '/fonts/D2CodingBold.woff2', weight: '700', style: 'normal' },
    { path: '/fonts/D2Coding-ligature.woff2', weight: '400', style: 'normal' },
    { path: '/fonts/D2CodingBold-ligature.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-d2coding',
})

export const firaCode = Fira_Code({
  weight: ['400','700'],
  style: ['normal'],
  subsets: ['latin'],          // ← 라틴만 로드
  display: 'swap',
  variable: '--font-firacode',
})