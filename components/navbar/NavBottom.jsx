import React from 'react'
import './navbar.css'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export default function NavBottom() {
  return (
    <div className="navbar_bottom text-white h-full">
        <div className="nav_bottom_container w-11/12 m-auto flex items-center justify-between h-full">
          <div className="left flex h-full">
            <a href='/'><RoomOutlinedIcon/> Locate us</a>
            <a href="/contact-form" className="mr-4"><EditNoteIcon/> Contact Form</a>
            <a href="/" className="phone-hide"><EmailOutlinedIcon/> bhfs-contact@gmail.com</a>
            </div>
            <div className="right2 phone-hide flex h-full">
              <a href="/help"><HelpOutlineOutlinedIcon/> Help & Support</a>
            </div>
        </div>
    </div>
  )
}
