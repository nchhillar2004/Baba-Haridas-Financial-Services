import React from 'react'
import './navbar.css'

export default function NavBottom() {
  return (
    <div className="navbar_bottom text-white">
        <div className="nav_bottom_container w-11/12 m-auto flex items-center py-1 justify-end">
            <a href="/contact-form" className="mr-4">Contact Form</a>
            <a href="/">bhfs-contact@gmail.com</a>
        </div>
    </div>
  )
}
