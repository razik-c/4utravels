"use client";

import Script from "next/script";
import { useEffect } from "react";
import Header from "@/components/Header";
import "./globals.css";
import { inter, merriweather } from "./fonts";
import Footer from "@/components/Footer";

// Minimal typing for the jQuery you load via <Script>
// (Keeps TypeScript happy without pulling in full @types/jquery)
declare global {
  interface Window {
    jQuery?: (selector: string) => {
      owlCarousel: (opts: {
        margin: number;
        padding: number;
        loop: boolean;
        autoHeight: boolean;
        nav: boolean;
        responsive: Record<string, unknown>;
      }) => void;
    };
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const toggleDarkMode = () => {
      const moonIcon = document.getElementById("moon-icon");
      const sunIcon = document.getElementById("sun-icon");
      moonIcon?.classList.toggle("hidden");
      sunIcon?.classList.toggle("hidden");
    };

    document
      .getElementById("dark-mode-button")
      ?.addEventListener("click", toggleDarkMode);

    if (typeof window !== "undefined" && window.jQuery) {
      window
        .jQuery("#carousel")
        .owlCarousel({
          margin: 20,
          padding: 0,
          loop: false,
          autoHeight: true,
          nav: false,
          responsive: {},
        });
    }
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="antialiased bg-white">
        <Script
          src="https://code.jquery.com/jquery-3.7.1.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="beforeInteractive"
        />

        <div className="prose md:prose-tablet lg:prose-desktop text-black !max-w-none">
          <Header />
          <main className="prose md:prose-tablet lg:prose-desktop !max-w-none">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
