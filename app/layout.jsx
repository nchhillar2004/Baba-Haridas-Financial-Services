import {  Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Provider from '@/providers/Provider'

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
        <Provider>
        <Toaster position="top-center" />
        {children}
        </Provider>
        </body>
    </html>
  )
}
