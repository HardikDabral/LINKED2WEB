"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-700" /> */}
            <span className="text-lg font-bold text-purple-400">Linked2web</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              About
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-purple-400"
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
          </button>

          {/* Get Started Button */}
          <button className="hidden rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/30 md:block">
            Get started
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button className="w-full rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-700">
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

