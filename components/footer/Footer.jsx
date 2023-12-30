import React from "react";
import "./footer.css";
import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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

                    <div className="flex w-full items-start justify-between">
                    <nav className="w-fit p-2 text-white thin-text">
                      <h3>BHFS</h3>
                        <ul className="nopad">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/">Services</Link>
                            </li>
                            <li>
                                <Link href="/">Products</Link>
                            </li>
                            <li>
                                <Link href="/">Explore</Link>
                            </li>
                            <li>
                                <Link href="/">Posts</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className="w-fit p-2 text-white thin-text">
                      <h3>About</h3>
                        <ul className="nopad">
                            <li>
                                <Link href="/">Locate</Link>
                            </li>
                            <li>
                                <Link href="/">Contact</Link>
                            </li>
                            <li>
                                <Link href="/">Contact Form</Link>
                            </li>
                            <li>
                                <Link href="/">Help & support</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className="w-fit p-2 text-white thin-text">
                      <h3>Partners</h3>
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
