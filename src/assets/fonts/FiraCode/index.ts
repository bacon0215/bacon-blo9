import { Fira_Code } from 'next/font/google'
export const firaCode = Fira_Code({
  weight: ['400','700'],
  style: ['normal'],
  subsets: ['latin'],   // 영어/숫자만
  display: 'swap',
  variable: '--font-firacode',
})