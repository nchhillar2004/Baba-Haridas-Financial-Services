'use client';
import React from 'react'
import Head from 'next/head'
import '@/app/globals.css'
function contactForm() {
  return (
    <div className="contact-form">
        <Head>
            <title>BHFS - Contact Form</title>
        </Head>
        <div className="form-container">
            <form action="" method="get" className="flex flex-col">
                <input type="text" name="fname" id="fname" placeholder='Full name'/>
                <input type="email" name="email" id="email" placeholder='Email Address'/>
                <input type="number" name="number" id="number" placeholder='Mobile number'/>
                <input type="text" name="description" id="description" placeholder='Description'/>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default contactForm