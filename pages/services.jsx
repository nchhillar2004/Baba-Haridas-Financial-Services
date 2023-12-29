import React from 'react'
import Head from 'next/head'
import '@/app/globals.css'
import Navbar from '@/components/navbar/Navbar'
import NavBottom from '@/components/navbar/NavBottom'
import Footer from '@/components/footer/Footer'

function services() {
  return (
    <div className="services">
        <Head>
            <title>BHFS - Services</title>
        </Head>
        <Navbar/>
        <NavBottom/>
        <main>services</main>
        <Footer/>
    </div>
  )
}

export default services