"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Waves } from "lucide-react";
import { navMenus, siteData } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-aqua-500/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#beranda" className="flex items-center gap-2 group">
              <div
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "bg-aqua-500 text-white"
                    : "bg-white/20 text-white backdrop-blur-sm"
                }`}
              >
                <Waves className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-[var(--font-plus-jakarta)] font-extrabold text-sm lg:text-base leading-tight transition-colors duration-300 ${
                    isScrolled ? "text-aqua-700" : "text-white"
                  }`}
                >
                  GADING SPLASH
                </span>
                <span
                  className={`text-[9px] lg:text-[10px] font-medium tracking-wider transition-colors duration-300 ${
                    isScrolled ? "text-aqua-500/70" : "text-white/70"
                  }`}
                >
                  {siteData.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navMenus.map((menu) => (
                <a
                  key={menu.href}
                  href={menu.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-aqua-500/10 ${
                    isScrolled
                      ? "text-gray-700 hover:text-aqua-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {menu.label}
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <a
                href="#tiket"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-aqua-500 to-tropical-500 text-white font-semibold text-sm shadow-lg shadow-aqua-500/30 hover:shadow-aqua-500/50 hover:scale-105 transition-all duration-300"
              >
                Beli Tiket
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "text-aqua-700 hover:bg-aqua-50"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 px-6">
              {navMenus.map((menu, i) => (
                <motion.a
                  key={menu.href}
                  href={menu.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-xl font-semibold text-gray-800 hover:text-aqua-600 py-3 w-full text-center rounded-xl hover:bg-aqua-50 transition-all"
                >
                  {menu.label}
                </motion.a>
              ))}
              <motion.a
                href="#tiket"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navMenus.length * 0.05 }}
                onClick={() => setIsMobileOpen(false)}
                className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-aqua-500 to-tropical-500 text-white font-semibold shadow-lg"
              >
                Beli Tiket
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
