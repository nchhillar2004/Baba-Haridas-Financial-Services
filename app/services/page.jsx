'use client';
import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Head from 'next/head'

function page() {
  return (
    <div className="services_section">
      <Head>
        <title>BHFS - Services</title>
      </Head>
      <Navbar/>
      <main>
        Services Page
      </main>
      <Footer/>
    </div>
  )
}

export default page