'use client';
import React from 'react'
import Head from 'next/head'
import '@/app/globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

function contactForm() {
  return (
    <div className="contact-form">
        <Head>
            <title>BHFS - Contact Form</title>
        </Head>
        <Navbar/>
        <div className="form-container">
            <form action="" method="get" className="flex flex-col">
                <input type="text" name="fname" id="fname" placeholder='Full name'/>
                <input type="email" name="email" id="email" placeholder='Email Address'/>
                <input type="number" name="number" id="number" placeholder='Mobile number'/>
                <input type="text" name="description" id="description" placeholder='Description'/>
                <button type="submit">Submit</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default contactForm