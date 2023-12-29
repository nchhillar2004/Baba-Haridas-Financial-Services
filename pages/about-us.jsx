import React from 'react'
import Head from 'next/head'
import '@/app/globals.css'
import Navbar from '@/components/navbar/Navbar'
import NavBottom from '@/components/navbar/NavBottom'
import Footer from '@/components/footer/Footer'

function aboutUs() {
  return (
    <div className="about-us">
        <Head>
            <title>BHFS - About us</title>
        </Head>
        <Navbar/>
        <NavBottom/>
        <main>About us</main>
        <Footer/>
    </div>
  )
}

export default aboutUs