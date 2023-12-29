import React from 'react'
import Head from 'next/head'
import '@/app/globals.css'
import Navbar from '@/components/navbar/Navbar'
import NavBottom from '@/components/navbar/NavBottom'
import Footer from '@/components/footer/Footer'

function explore() {
  return (
    <div className="explore">
        <Head>
            <title>BHFS - Explore</title>
        </Head>
        <Navbar/>
        <NavBottom/>
        <main>explore</main>
        <Footer/>
    </div>
  )
}

export default explore