import React from 'react'
import Head from 'next/head'
import '@/app/globals.css'
import Navbar from '@/components/navbar/Navbar'
import NavBottom from '@/components/navbar/NavBottom'
import Footer from '@/components/footer/Footer'
import Notification from '@/components/navbar/new-updates/Notification'

function posts() {
  return (
    <div className="posts">
        <Head>
            <title>BHFS - Posts</title>
        </Head>
        <Notification title="New posts" point1="Check out recentely updated posts"/>
        <Navbar/>
        <NavBottom/>
        <main>posts</main>
        <Footer/>
    </div>
  )
}

export default posts