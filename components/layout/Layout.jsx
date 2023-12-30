import React from 'react'
import Navbar from '../navbar/Navbar'
import NavBottom from '../navbar/NavBottom'
import Footer from '../footer/Footer'
import Head from 'next/head'

export const Layout = ({children, title}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar/>
        <NavBottom/>
        <main className="w-11/12 m-auto">{children}</main>
        <Footer/>
    </div>
  )
}
