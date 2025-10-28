'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bright-black shadow-lg'
          : 'bg-black/60 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-display font-semibold text-white">
              Bright<span className="text-bright-orange">Technology</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-bright-orange transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/hotels"
              className="text-white hover:text-bright-orange transition-colors duration-200 font-medium"
            >
              Our Hotels
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-white hover:text-bright-orange transition-colors duration-200 font-medium flex items-center space-x-1">
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-bright-black border border-bright-orange/20 rounded-lg shadow-xl overflow-hidden">
                  <Link
                    href="/products/bright-booking"
                    className="block px-4 py-3 text-white hover:bg-bright-orange/10 hover:text-bright-orange transition-colors duration-200"
                  >
                    <div className="font-medium">Bright Booking</div>
                    <div className="text-sm text-gray-400">
                      Modern booking system
                    </div>
                  </Link>
                  <Link
                    href="/products/bright-os"
                    className="block px-4 py-3 text-white hover:bg-bright-orange/10 hover:text-bright-orange transition-colors duration-200"
                  >
                    <div className="font-medium">BrightOS</div>
                    <div className="text-sm text-gray-400">
                      Operating system for hotels
                    </div>
                  </Link>
                  <Link
                    href="/products/bright-boost"
                    className="block px-4 py-3 text-white/60 hover:bg-bright-orange/10 transition-colors duration-200"
                  >
                    <div className="font-medium flex items-center space-x-2">
                      <span>Bright Boost</span>
                      <span className="text-xs bg-bright-orange/20 text-bright-orange px-2 py-0.5 rounded">
                        Coming Soon
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Revenue optimization
                    </div>
                  </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-white hover:bg-bright-orange/10 hover:text-bright-orange rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/hotels"
              className="block px-4 py-2 text-white hover:bg-bright-orange/10 hover:text-bright-orange rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Hotels
            </Link>
            <div className="px-4 py-2 text-gray-400 text-sm font-semibold">
              Products
            </div>
            <Link
              href="/products/bright-booking"
              className="block px-8 py-2 text-white hover:bg-bright-orange/10 hover:text-bright-orange rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bright Booking
            </Link>
            <Link
              href="/products/bright-os"
              className="block px-8 py-2 text-white hover:bg-bright-orange/10 hover:text-bright-orange rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BrightOS
            </Link>
            <Link
              href="/products/bright-boost"
              className="block px-8 py-2 text-white/60 hover:bg-bright-orange/10 rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bright Boost <span className="text-xs text-bright-orange">(Coming Soon)</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
