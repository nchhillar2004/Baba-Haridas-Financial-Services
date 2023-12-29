import React from 'react'
import Head from 'next/head'
import '@/app/globals.css'
import Navbar from '@/components/navbar/Navbar'
import NavBottom from '@/components/navbar/NavBottom'
import Footer from '@/components/footer/Footer'
import Notification from '@/components/navbar/new-updates/Notification'

function help() {
  return (
    <div className="services">
        <Head>
            <title>BHFS - Help & Support</title>
        </Head>
        <Navbar/>
        <NavBottom/>
        <Notification title="Err:503 Server busy" point1="Help & Support is currently available" point2="Try again in some time"/>
        <main></main>
        <Footer/>
    </div>
  )
}

export default help