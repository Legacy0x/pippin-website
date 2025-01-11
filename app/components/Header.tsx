'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <Link href="/" className="flex items-center text-lg font-semibold text-[#5A8C5B] no-underline">
        <Image
          src="/assets/images/pippin-logo.svg"
          alt="Pippin Logo"
          width={40}
          height={40}
          className="mr-2 rounded-full"
        />
        Pippin
      </Link>

      <nav className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-[60px] md:top-0 right-4 md:right-0 w-[200px] md:w-auto bg-white/90 md:bg-transparent border md:border-0 border-[#ddd] rounded-lg md:rounded-none shadow-md md:shadow-none p-4 md:p-0 gap-2 md:gap-4`}>
        <Link href="/framework" className="nav-link">Framework</Link>
        <Link href="/token" className="nav-link">Token</Link>
        <Link href="/unicorn" className="nav-link">Unicorn</Link>
        <Link href="https://shop.pippin.love" className="nav-link" target="_blank" rel="noopener noreferrer">Shop</Link>
      </nav>

      <button
        className="block md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Navigation"
      >
        &#9776;
      </button>
    </header>
  );
} 