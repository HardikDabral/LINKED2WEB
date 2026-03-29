"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { useThemeStore } from "@/lib/store/useThemeStore";
// import { PopupForm } from "@/components/sections/Popupform"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  // const { theme, toggleTheme } = useThemeStore();
  const { scrollY } = useScroll();
  const navTop = useTransform(scrollY, [0, 100], ["2.5rem", "1rem"]);

  // useEffect(() => {
  //   const checkTheme = () => {
  //     if (typeof window !== "undefined") {
  //       const savedTheme = localStorage.getItem("theme");
  //       const isDarkMode = savedTheme
  //         ? savedTheme === "dark"
  //         : document.documentElement.classList.contains("dark");
  //       setIsDark(isDarkMode);
  //     }
  //   };
  //   checkTheme();
  //   const observer = new MutationObserver(checkTheme);
  //   if (typeof window !== "undefined") {
  //     observer.observe(document.documentElement, {
  //       attributes: true,
  //       attributeFilter: ["class"],
  //     });
  //   }
  //   return () => observer.disconnect();
  // }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // First, show the logo in a small navbar
    const timer1 = setTimeout(() => {
      setIsExpanded(true);
    }, 200);

    // Then, show the navigation items and buttons
    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      <motion.nav
        aria-label="Fruupy navigation — fruupy.com"
        style={{ top: navTop }}
        className="fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-[96%] sm:max-w-[93%] md:max-w-[90%] lg:max-w-[88%] xl:max-w-[1200px] 2xl:max-w-[1300px] px-4 sm:px-6 flex justify-center sm:!top-10"
      >
        <motion.div
          className="relative flex items-center justify-center lg:justify-between h-16 py-3 pl-4 sm:pl-6 md:pl-8 pr-2 sm:pr-3 rounded-full border border-[#93B1B5]/40 bg-white/90 backdrop-blur-xl shadow-lg shadow-[#0B2E33]/5 overflow-hidden"
          initial={{ width: "300px", marginLeft: "auto", marginRight: "auto" }}
          animate={{
            width: isExpanded ? "100%" : "300px",
            marginLeft: isExpanded ? "0" : "auto",
            marginRight: isExpanded ? "0" : "auto",
            justifyContent: isExpanded ? "space-between" : "center",
          }}
          transition={{
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {/* Mobile: Logo on Left */}
          <div className="xl:hidden">
            <Link href="/" className="flex flex-col items-start gap-0">
              <span className="text-xl font-bold text-[#0B2E33]">Fruupy</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4F7C82]">fruupy.com</span>
              {/* <Image
                src="/images/talents/logowhite.png"
                alt="ZodAi Logo"
                width={100}
                height={100}
                className="h-48 w-auto object-contain"
              /> */}
            </Link>
          </div>

          {/* Desktop: Center - Brand Name (always centered) */}
          <div className="hidden xl:block absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="flex flex-col items-center gap-0">
              <span className="text-2xl font-bold text-[#0B2E33] tracking-tight">Fruupy</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4F7C82]">fruupy.com</span>
              {/* <Image
                src="/images/talents/logowhite.png"
                alt="ZodAi Logo"
                width={500}
                height={500}
                className="h-64 w-auto object-contain"
              /> */}
            </Link>
          </div>

          {/* Desktop: Left - Navigation Links */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                className="hidden xl:flex items-center gap-6 sm:gap-8 md:gap-10"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-sm sm:text-[15px] text-[#0B2E33]/80 font-medium transition-colors hover:text-[#0B2E33] whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop: Right - Theme Toggle & Login Button */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                className="hidden xl:flex items-center gap-4 sm:gap-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >

                {/* Login Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  {/* <PopupForm
                    trigger={
                      <button className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black text-sm sm:text-[15px] font-semibold transition-colors hover:bg-zinc-200 whitespace-nowrap">
                        Start Now
                      </button>
                    }
                  /> */}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile: Theme Toggle & Burger Icon on Right */}
          <div className="xl:hidden flex items-center gap-2">
            {/* <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </motion.button> */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0B2E33] p-2"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Sidebar - Slides from Right - OUTSIDE NAV */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#0B2E33]/20 z-40 xl:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            className="fixed top-0 right-0 h-full w-[320px] z-50 xl:hidden shadow-2xl border-l border-[#93B1B5]/40 bg-[#F8FBFC] transition-transform duration-300 ease-out"
            style={{ transform: 'translateX(0)' }}
          >
            <div className="flex flex-col h-full p-6">
              {/* Header with Brand and Close Button */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="block text-2xl font-bold text-[#0B2E33]">Fruupy</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4F7C82]">fruupy.com</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full transition-colors hover:bg-[#0B2E33]/5 text-[#0B2E33]"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 mb-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-[#0B2E33] hover:text-[#4F7C82] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Action Button */}
              <div className="mt-auto">
                <button
                  // onClick={() => {
                  //   setIsMobileMenuOpen(false);
                  //   setTimeout(() => setIsPopupOpen(true), 100);
                  // }}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-[#0B2E33] text-white text-base font-semibold transition-all duration-300 shadow-lg hover:bg-[#0B2E33]/90"
                >
                  Browse tools
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Controlled PopupForm for Mobile/External Triggers */}
      {/* <PopupForm open={isPopupOpen} onOpenChange={setIsPopupOpen} trigger={<span className="hidden" />} /> */}
    </>
  );
}

