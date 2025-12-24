"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Handle scroll event to change navbar appearance


  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`max-w-[90rem] mx-auto px-4 py-3 md:px-6 lg:px-12 transition-all duration-300`}>
        <nav className={`flex items-center justify-between py-4 px-5 md:px-6 w-full bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 border-[2px] border-gray-200 rounded-[12px]`}>
          {/* Logo - Left on desktop, centered on mobile */}
          <div className="flex items-center justify-center flex-1 md:flex-initial md:justify-start">
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/branding/logo.svg"
                alt="Bubbles & Bows - Click to return home"
                width={280}
                height={75}
                className="h-16 w-auto hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Center (Desktop only) */}
          <div className="hidden md:flex items-center justify-center space-x-6 flex-1">
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/daycare" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
              Daycare
            </Link>
            <Link href="/boarding" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
              Boarding
            </Link>
            <Link href="/grooming" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
              Grooming
            </Link>
          </div>

          {/* Right Section - Book Now (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 px-5 py-2 rounded-[12px] hover:bg-gray-800 hover:text-white transition-colors text-sm font-bold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-md z-20 py-4 px-6 mt-2 dropdown-menu border-2 border-[#6bcbeb] rounded-[8px]">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/daycare"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Daycare
              </Link>
              <Link
                href="/boarding"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Boarding
              </Link>
              <Link
                href="/grooming"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Grooming
              </Link>
              <Link
                href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-800 text-gray-800 px-5 py-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors text-sm font-bold inline-block w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
