"use client"
import React from "react";
import Navbar from "../navbar/Navbar";
import NavBottom from "../navbar/NavBottom";
import Footer from "../footer/Footer";

export const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <NavBottom />
            <main className="w-11/12 m-auto">{children}</main>
            <Footer />
        </div>
    );
};
