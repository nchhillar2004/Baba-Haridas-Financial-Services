import React from 'react'
import './navbar.css'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Link from "next/link";

export default function NavBottom() {
  return (
    <div className="navbar_bottom text-white h-full">
        <div className="nav_bottom_container w-11/12 m-auto flex items-center justify-between h-full">
          <div className="left flex h-full">
            <Link href='/'><RoomOutlinedIcon/> Locate us</Link>
            <Link href="/contact-us/contact-form" className="mr-4"><EditNoteIcon/> Contact Form</Link>
            <Link href="/" className="phone-hide tab-hide"><EmailOutlinedIcon/> bhfs-contact@gmail.com</Link>
            </div>
            <div className="right2 phone-hide flex h-full">
              <Link href="/help"><HelpOutlineOutlinedIcon/> Help & Support</Link>
            </div>
        </div>
    </div>
  )
}
