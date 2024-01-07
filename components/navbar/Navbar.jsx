import React from "react";
import "./navbar.css";
import { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExploreIcon from "@mui/icons-material/Explore";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(props) {
    const [scrolled, setScrolled] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div
            id="top"
            className={`navbar w-full bg-white h-fit ${
                scrolled ? "shadow" : ""
            }`}
        >
            <div className="nav_top flex w-11/12 m-auto items-center justify-between">
                <div className="left">
                    <Link href="/" className="image-link w-fit">   
                        <Image
                        priority={true}
                            src="/icon.png"
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        />
                        <h1 className="text-white text-2xl ml-5 font-semibold">{props.title}</h1>
                    </Link>
                </div>
                <div className="right flex h-full">
                    <nav
                        className={`desktop-menu flex items-center ${
                            showMobileMenu ? "hidden" : ""
                        }`}
                    >
                        <ul className="mr-4 h-full">
                            <li>
                                <Link href="/">
                                    <HomeOutlinedIcon /> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    <AttachMoneyIcon /> Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/products">
                                    <LocalMallOutlinedIcon /> Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/explore">
                                    <ExploreIcon /> Explore
                                </Link>
                            </li>
                            <li>
                                <Link href="/posts">
                                    <NewspaperOutlinedIcon /> Posts
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>
                        </ul>
                        <Link href="/contact-us" className="contact-us">
                            Contact us
                        </Link>
                    </nav>

                    <div
                        className={`sidebar ${showMobileMenu ? "active" : ""}`}
                    >
                        <div className="sidebar-content flex h-fit justify-around flex-col w-1/2">
                            <ul className="flex flex-col h-2/3 justify-between">
                                <li>
                                    <Link href="/">
                                        <HomeOutlinedIcon /> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <AttachMoneyIcon /> Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products">
                                        <LocalMallOutlinedIcon /> Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/explore">
                                        <ExploreIcon /> Explore
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/posts">
                                        <NewspaperOutlinedIcon /> Posts
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us">About Us</Link>
                                </li>
                            </ul>
                            <Link href="/contact-us" className="contact-us">
                                Contact us
                            </Link>
                        </div>
                    </div>

                    <div
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                    >
                        <IconButton>
                            <MenuRoundedIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
