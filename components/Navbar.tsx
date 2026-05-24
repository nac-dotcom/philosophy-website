"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#vision", label: "الرؤية" },
  { href: "/#programs", label: "البرامج" },
  { href: "/#media", label: "المحتوى" },
  { href: "/#contact", label: "تواصل" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrolled(sy > 40);
      if (sy > 80 && sy > prevScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      prevScrollY.current = sy;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      } ${
        scrolled
          ? "backdrop-blur-2xl bg-midnight-900/80 border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-heading font-bold tracking-wide text-gradient-gold"
          >
            الفلسفة للجميع
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ivory/60 hover:text-gold transition-colors duration-300 text-sm tracking-wide font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gold/80 hover:text-gold p-2 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/[0.04] backdrop-blur-2xl bg-midnight-900/95"
          >
            <div className="flex flex-col p-8 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-ivory/60 hover:text-gold transition-colors text-base tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
