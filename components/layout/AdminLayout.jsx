"use client"
import Navbar from "../navbar/Navbar";
import React from 'react'
import AdminNavbar from "../navbar/AdminNavbar";

export default function AdminLayout({children}) {
  return (
    <div>
        <Navbar title="Admin dashboard"/>
        <AdminNavbar/>
        <div className="admin_layout">
            {children}
        </div>
    </div>
  )
}
