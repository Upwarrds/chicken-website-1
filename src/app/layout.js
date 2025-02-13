"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/headersection/page";
import Footer from "./(components)/footersection/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
