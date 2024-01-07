import React from 'react'
import './navbar.css'
import PeopleIcon from '@mui/icons-material/People';
import ReportIcon from '@mui/icons-material/Report';
import SignpostIcon from '@mui/icons-material/Signpost';
import InventoryIcon from '@mui/icons-material/Inventory';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SellIcon from '@mui/icons-material/Sell';
import Link from "next/link";

export default function AdminNavbar() {
  return (
    <div className="navbar_bottom text-white h-full">
        <div className="nav_bottom_container w-11/12 m-auto flex items-center justify-between h-full">
          
            <div className="left phone-hide flex h-full">
              <Link href="/admin/get/reports"><ReportIcon fontSize='small'/>View reports</Link>
              <Link href="/admin/get/products"><InventoryIcon fontSize='small'/>View products</Link>
              <Link href="/admin/get/users"><PeopleIcon fontSize='small'/>View users</Link>
              <Link href="/admin/get/posts"><SignpostIcon fontSize='small'/>View posts</Link>
            </div>
            <div className="right2 flex h-full">
            <Link href='/admin/post/newpost'><EditNoteIcon/>Create Post</Link>
            <Link href="/admin/post/product" className="mr-4"><SellIcon fontSize='small'/>Add new product</Link>
            </div>
        </div>
    </div>
  )
}