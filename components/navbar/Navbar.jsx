import React from "react";
import "./navbar.css";
import { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExploreIcon from "@mui/icons-material/Explore";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function Navbar() {
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
            className={`navbar w-full bg-white h-fit ${
                scrolled ? "shadow" : ""
            }`}
        >
            <div className="nav_top flex w-11/12 m-auto items-center justify-between">
                <div className="left">
                    <a href="/">
                        <img src="" alt="Baba Haridas Finance Logo" />
                    </a>
                </div>
                <div className="right flex h-full">
                    <nav
                        className={`desktop-menu flex items-center ${
                            showMobileMenu ? "hidden" : ""
                        }`}
                    >
                        <ul className="mr-4 h-full">
                            <li>
                                <a href="/">
                                    <HomeOutlinedIcon /> Home
                                </a>
                            </li>
                            <li>
                                <a href="/services">
                                    <AttachMoneyIcon /> Services
                                </a>
                            </li>
                            <li>
                                <a href="/explore">
                                    <ExploreIcon /> Explore
                                </a>
                            </li>
                            <li>
                                <a href="/posts">
                                    <NewspaperOutlinedIcon /> Posts
                                </a>
                            </li>
                            <li>
                                <a href="/about-us">About Us</a>
                            </li>
                        </ul>
                        <a href="/contact-us" className="contact-us">
                            Contact us
                        </a>
                    </nav>

                    <div
                        className={`sidebar ${showMobileMenu ? "active" : ""}`}
                    >
                        <div className="sidebar-content flex h-1/2 justify-around flex-col w-1/2">
                            <ul className="flex flex-col h-2/3 justify-between">
                                <li>
                                    <a href="/">
                                        <HomeOutlinedIcon /> Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/services">
                                        <AttachMoneyIcon /> Services
                                    </a>
                                </li>
                                <li>
                                    <a href="/explore">
                                        <ExploreIcon /> Explore
                                    </a>
                                </li>
                                <li>
                                    <a href="/posts">
                                        <NewspaperOutlinedIcon /> Posts
                                    </a>
                                </li>
                                <li>
                                    <a href="/about-us">About Us</a>
                                </li>
                            </ul>
                            <a href="/contact-us" className="contact-us">
                                Contact us
                            </a>
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
