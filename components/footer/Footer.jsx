import React from "react";
import "./footer.css";
import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AdminButton from "../common/AdminButton";

export default function Footer() {
    return (
        <div className="footer h-full">
            <div className="back-on-top">
                <Link href="#top">Back to top</Link>
            </div>
            <div className="footer_container py-3.5 w-11/12 m-auto">
                <div className="footer-top flex h-fit w-full flex-col">
                    <Link href="/" className="w-fit">
                        <Image
                            src="/logo.png"
                            width={120}
                            height={120}
                            alt="BHFS Logo"
                        ></Image>
                    </Link>

                    <div className="fwrap flex w-full items-start justify-between">
                    <nav className="w-fit p-2 text-white thin-text">
                      <h3>BHFS</h3>
                        <ul className="nopad">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/services">Services</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/explore">Explore</Link>
                            </li>
                            <li>
                                <Link href="/posts">Posts</Link>
                            </li>
                            <li>
                                <Link href="/">Mail</Link>
                            </li>
                            <li>
                                <Link href="/contact-us/contact-form">Contact form</Link>
                            </li>
                            <li>
                                <Link href="/">Locate us</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className="w-fit p-2 text-white thin-text">
                      <h3>About</h3>
                        <ul className="nopad">
                            <li>
                                <Link href="/about-us">About us</Link>
                            </li>
                            <li>
                                <Link href="/">How it works</Link>
                            </li>
                            <li>
                                <Link href="/">Team</Link>
                            </li>
                            <li>
                                <Link href="/">Developer</Link>
                            </li>
                            <li>
                                <Link href="/contact-us">Contact us</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className="w-fit p-2 text-white thin-text">
                      <h3>Partners</h3>
                        <ul className="nopad">
                            <li>
                                <Link href="/">Instagram.com</Link>
                            </li>
                            <li>
                                <Link href="/">Facebook.com</Link>
                            </li>
                            <li>
                                <Link href="/">GitHub.com</Link>
                            </li>
                            <li>
                                <Link href="/">Google.com</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className="w-fit p-2 text-white thin-text">
                      <h3>Social</h3>
                        <ul className="nopad">
                            <li>
                                <Link href="/">Instagram</Link>
                            </li>
                            <li>
                                <Link href="/">Facebook</Link>
                            </li>
                            <li>
                                <Link href="/">GitHub</Link>
                            </li>
                        </ul>
                    </nav>
                    <AdminButton/>
                    </div>
                </div>
                <Divider color="whitesmoke" />
                <div className="footer-bottom py-2 text-white flex items-center justify-between">
                    <div className="fleft">
                        <p>2,19,487</p>
                        <div className="thin-text">
                            <ul>
                                <li>Clients Connected</li>
                            </ul>
                        </div>
                    </div>
                    <div className="fcenter">
                        <p>1,98,542</p>
                        <div className="thin-text">
                            <ul>
                                <li>Services Provided</li>
                            </ul>
                        </div>
                    </div>
                    <div className="fright w-2/5">
                        <div className="copyright">
                            <p>
                                BHFS ® is a registered Trademark of
                                Baba Haridas Financial Services Pty Limited & BHFS Online India Private Limited.
                                <br></br>
                                Copyright © 2023
                                BHFS Pty Limited
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
