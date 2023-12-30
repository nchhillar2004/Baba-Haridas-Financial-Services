
import {  Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const font = Roboto({ 
  weight: '400',
  subsets: ['latin'] })

export const metadata = {
  title: 'BHFS - Home Page',
  description: 'Financial services web app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Toaster position="top-center" />
        {children}
        </body>
    </html>
  )
}
