"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Menu", href: "#menu" },
        { name: "Gallery", href: "#gallery" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 bg-cream border-b border-[#C9A84C]/30 py-3 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
            <div className="navbar-container container mx-auto px-6 md:px-20 flex justify-between items-center">
                {/* Logo Left */}
                <Link href="/" className="flex flex-col">

                    {/* Sree Vari Logo Text */}
                    <div className="flex flex-col">
                        <span style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '22px',
                            fontWeight: '700',
                            letterSpacing: '0.05em',
                            color: '#1A1A1A'
                        }}>
                            SREE VARI
                        </span>
                        <span style={{
                            fontSize: '9px',
                            letterSpacing: '0.2em',
                            color: '#666',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: '400'
                        }}>
                            RESTAURANT
                        </span>
                    </div>
                </Link>

                {/* Nav Links Center */}
                <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-foreground/80 hover:text-foreground text-sm font-bold uppercase tracking-widest transition-colors duration-300 group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Right CTA */}
                <div className="hidden md:block">
                    <button className="bg-primary-green text-cream border border-[#C9A84C] px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-cream hover:text-primary-green">
                        VISIT US
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 w-full bg-cream border-b border-[#C9A84C]/30 z-40 flex flex-col items-center py-10 space-y-6 md:hidden shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg text-foreground font-bold uppercase tracking-widest"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-primary-green text-cream border border-[#C9A84C] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest">
                            BOOK NOW
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
