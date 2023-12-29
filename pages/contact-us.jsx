import React from 'react'
import Head from 'next/head'
import '@/app/globals.css'
import Navbar from '@/components/navbar/Navbar'
import NavBottom from '@/components/navbar/NavBottom'
import Footer from '@/components/footer/Footer'

function contactUs() {
  return (
    <div className="contact-us">
        <Head>
            <title>BHFS - Contact us</title>
        </Head>
        <Navbar/>
        <NavBottom/>
        <main>contact us</main>
        <Footer/>
    </div>
  )
}

export default contactUs