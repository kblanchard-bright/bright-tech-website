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
          ? 'bg-white shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-display font-semibold text-gray-900">
              Bright<span className="text-bright-orange">OS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-bright-orange transition-colors duration-200 font-medium"
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-gray-900 hover:text-bright-orange transition-colors duration-200 font-medium flex items-center space-x-1">
                <span>BrightOS</span>
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
                <div className="absolute top-full left-0 pt-2 w-80">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                  <div className="px-4 pt-3 pb-1">
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Agents</span>
                  </div>
                  <Link
                    href="/platform#guest-agent"
                    className="block px-4 py-2.5 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange transition-colors duration-200"
                  >
                    <div className="font-medium">Guest Agent</div>
                    <div className="text-sm text-gray-500">
                      AI that handles every guest interaction
                    </div>
                  </Link>
                  <Link
                    href="/platform#ops-agent"
                    className="block px-4 py-2.5 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange transition-colors duration-200"
                  >
                    <div className="font-medium">Ops Agent</div>
                    <div className="text-sm text-gray-500">
                      Operations intelligence via text
                    </div>
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <div className="px-4 pt-2 pb-1">
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Extensions</span>
                  </div>
                  <Link
                    href="/platform#capabilities"
                    className="block px-4 py-2.5 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange transition-colors duration-200"
                  >
                    <div className="font-medium">Bright Booking</div>
                    <div className="text-sm text-gray-500">
                      Give your agent direct booking power
                    </div>
                  </Link>
                  <Link
                    href="/platform#check-in"
                    className="block px-4 py-2.5 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange transition-colors duration-200"
                  >
                    <div className="font-medium">Bright Check-in</div>
                    <div className="text-sm text-gray-500">
                      Give your agent check-in capabilities
                    </div>
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <Link
                    href="/integrations"
                    className="block px-4 py-2.5 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange transition-colors duration-200"
                  >
                    <div className="font-medium">Integrations</div>
                    <div className="text-sm text-gray-500">
                      PMS connections and supported platforms
                    </div>
                  </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/hotels"
              className="text-gray-900 hover:text-bright-orange transition-colors duration-200 font-medium"
            >
              Our Hotels
            </Link>

            <a
              href="https://brightos.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-bright-orange text-bright-orange hover:bg-bright-orange hover:text-white rounded-full px-5 py-2 transition-all duration-200 font-medium inline-flex items-center space-x-1.5"
            >
              <span>Dashboard</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Add Your Hotel CTA */}
            <Link
              href="/signup"
              className="bg-bright-orange hover:bg-bright-orange/90 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Add Your Hotel
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 p-2"
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
              className="block px-4 py-2 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="px-4 py-2 text-gray-500 text-sm font-semibold">
              Agents
            </div>
            <Link
              href="/platform#guest-agent"
              className="block px-8 py-2 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Guest Agent
            </Link>
            <Link
              href="/platform#ops-agent"
              className="block px-8 py-2 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ops Agent
            </Link>
            <div className="px-4 py-2 text-gray-500 text-sm font-semibold">
              Extensions
            </div>
            <Link
              href="/platform#capabilities"
              className="block px-8 py-2 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bright Booking
            </Link>
            <Link
              href="/platform#check-in"
              className="block px-8 py-2 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bright Check-in
            </Link>
            <div className="px-4 py-2 text-gray-500 text-sm font-semibold">
              Platform
            </div>
            <Link
              href="/integrations"
              className="block px-8 py-2 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link
              href="/hotels"
              className="block px-4 py-2 text-gray-900 hover:bg-bright-orange/10 hover:text-bright-orange rounded transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Hotels
            </Link>
            <a
              href="https://brightos.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-2 px-6 py-3 border border-bright-orange text-bright-orange hover:bg-bright-orange hover:text-white text-center font-semibold rounded-full transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
              <svg className="w-3.5 h-3.5 inline ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              href="/signup"
              className="block mx-4 mt-2 px-6 py-3 bg-bright-orange hover:bg-bright-orange/90 text-white text-center font-semibold rounded-full transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Add Your Hotel
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
