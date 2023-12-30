import React from 'react'
import Link from 'next/link'
import './loading.css'

export default function UnderDevelopment() {
  return (
    <div className="error">
        <h2>This page is under development</h2>
        <p>Try again later</p>
        <Link href="/" className="py-2 my-2 px-3 rounded">Go back</Link>
    </div>
  )
}
