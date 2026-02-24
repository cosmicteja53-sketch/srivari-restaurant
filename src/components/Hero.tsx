"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    return (
        <>
            {/* ===== MOBILE HERO - only below 768px ===== */}
            <div className="block md:hidden w-full" style={{ height: '100svh', position: 'relative', overflow: 'hidden' }}>

                <img
                    src="https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/mobilethali"
                    alt="Sree Vari Restaurant"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center bottom',
                        display: 'block'
                    }}
                />

                {/* Gradient overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)'
                }} />

                {/* Centered text content */}
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: '24px',
                    right: '24px',
                    zIndex: 10
                }}>
                    <p style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '10px',
                        letterSpacing: '0.3em',
                        color: '#C9A84C',
                        margin: '0 0 12px 0',
                        textTransform: 'uppercase'
                    }}>
                        Pure Veg · Andhra Pradesh
                    </p>
                    <h1 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '38px',
                        fontWeight: '700',
                        fontStyle: 'italic',
                        color: 'white',
                        lineHeight: 0.9,
                        margin: '0 0 16px 0',
                        textTransform: 'uppercase'
                    }}>
                        SREE<br />VARI<br />RESTAURANT
                    </h1>

                    <p style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.65)',
                        margin: '0 0 28px 0',
                        lineHeight: '1.6'
                    }}>
                        Tradition served with modern elegance.
                    </p>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <a href="#menu" style={{
                            backgroundColor: '#1B3A2D',
                            color: 'white',
                            padding: '14px 28px',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.12em',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            borderRadius: '2px'
                        }}>
                            VIEW MENU
                        </a>
                        <a href="#contact" style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            padding: '14px 28px',
                            border: '1px solid rgba(255,255,255,0.4)',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.12em',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            borderRadius: '2px'
                        }}>
                            VISIT US
                        </a>
                    </div>

                    {/* Bottom stats */}
                    <div style={{
                        display: 'flex',
                        gap: '24px',
                        marginTop: '28px',
                        paddingTop: '20px',
                        borderTop: '1px solid rgba(255,255,255,0.15)'
                    }}>
                        <div>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '700', color: '#C9A84C', margin: 0 }}>4.4★</p>
                            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.5)', margin: 0, letterSpacing: '0.1em' }}>RATING</p>
                        </div>
                        <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.15)' }} />
                        <div>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '700', color: '#C9A84C', margin: 0 }}>1k+</p>
                            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.5)', margin: 0, letterSpacing: '0.1em' }}>CUSTOMERS</p>
                        </div>
                        <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.15)' }} />
                        <div>
                            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '700', color: '#C9A84C', margin: 0 }}>₹200</p>
                            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.5)', margin: 0, letterSpacing: '0.1em' }}>MAX/PERSON</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ===== DESKTOP HERO - only above 768px ===== */}
            <div className="hidden md:block">
                <section
                    style={{ backgroundColor: '#F5F0E8' }}
                    className="w-full min-h-screen pt-[80px] overflow-hidden"
                >
                    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-80px)]">

                            {/* ===== LEFT COLUMN ===== */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col justify-center py-12 md:py-0"
                            >
                                {/* Big Title */}
                                <motion.h1
                                    variants={itemVariants}
                                    className="font-serif font-bold italic uppercase leading-[0.88] mb-6"
                                    style={{ color: '#1A1A1A' }}
                                >
                                    <span className="block text-[72px] md:text-[100px] lg:text-[120px] tracking-tighter">
                                        FAMOUS
                                    </span>
                                    <span className="block text-[48px] md:text-[72px] lg:text-[88px] tracking-tight">
                                        SOUTH INDIAN
                                    </span>
                                    <span className="block text-[72px] md:text-[100px] lg:text-[120px] tracking-tighter">
                                        DISHES
                                    </span>
                                </motion.h1>

                                {/* Subtitle */}
                                <motion.p
                                    variants={itemVariants}
                                    className="text-xs md:text-sm uppercase tracking-widest font-semibold mb-8"
                                    style={{ color: '#1B3A2D' }}
                                >
                                    Pure Veg · Andhra Pradesh · Tradition Served With Elegance
                                </motion.p>

                                {/* Buttons */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-row gap-4 mb-10"
                                >
                                    <button
                                        className="text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300"
                                        style={{ backgroundColor: '#1B3A2D', color: '#F5F0E8' }}
                                    >
                                        VIEW MENU
                                    </button>
                                    <button
                                        className="text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300"
                                        style={{ border: '2px solid #1B3A2D', color: '#1B3A2D', backgroundColor: 'transparent' }}
                                    >
                                        VISIT US
                                    </button>
                                </motion.div>

                                {/* Stats Row */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-row items-center gap-6 pt-6"
                                    style={{ borderTop: '1px solid #E0D9CC' }}
                                >
                                    {/* Avatars */}
                                    <div className="flex items-center">
                                        <img
                                            src="https://i.pravatar.cc/40?img=1"
                                            alt="c1"
                                            className="w-9 h-9 rounded-full object-cover"
                                            style={{ border: '2px solid white', zIndex: 2, marginRight: '-8px' }}
                                        />
                                        <img
                                            src="https://i.pravatar.cc/40?img=2"
                                            alt="c2"
                                            className="w-9 h-9 rounded-full object-cover"
                                            style={{ border: '2px solid white', zIndex: 1 }}
                                        />
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center text-white ml-1"
                                            style={{ backgroundColor: '#1B3A2D', fontSize: '10px', fontWeight: 700 }}
                                        >
                                            1k+
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold m-0" style={{ color: '#1A1A1A' }}>Satisfied</p>
                                        <p className="text-xs m-0" style={{ color: '#888' }}>Customers Reviews</p>
                                    </div>

                                    <div className="w-px h-10" style={{ backgroundColor: '#E0D9CC' }} />

                                    {/* Rating */}
                                    <div className="flex flex-col items-center">
                                        <span
                                            className="font-bold leading-none"
                                            style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}
                                        >
                                            4.4
                                        </span>
                                        <div className="flex gap-0.5 mt-1">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <span key={i} style={{ color: '#C9A84C', fontSize: '12px' }}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* ===== RIGHT COLUMN ===== */}
                            <motion.div
                                initial={{ x: 80, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                className="relative flex items-center justify-center py-12 md:py-0"
                            >

                                {/* Descriptive text - top right */}
                                <div
                                    className="absolute hidden md:block"
                                    style={{
                                        top: '-8%',
                                        right: '0px',
                                        width: '140px',
                                        zIndex: 20
                                    }}
                                >
                                    <p style={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '12px',
                                        lineHeight: '1.8',
                                        color: '#1A1A1A',
                                        margin: 0
                                    }}>
                                        From handpicked ingredients to tradition-inspired dishes, an unforgettable Andhra culinary journey.
                                    </p>
                                </div>

                                {/* Thali Image */}
                                <div className="relative" style={{ width: '85%', maxWidth: '480px' }}>
                                    <img
                                        src="https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/vegthali"
                                        alt="South Indian Thali"
                                        className="w-full h-auto"
                                        style={{ background: 'transparent', objectFit: 'contain', position: 'relative', zIndex: 1 }}
                                    />

                                    {/* CARD 1 - Pure Veg - top left */}
                                    <div
                                        className="hero-float-card absolute flex items-center gap-2"
                                        style={{
                                            top: '5%',
                                            left: '-20%',
                                            backgroundColor: 'white',
                                            borderRadius: '50px',
                                            padding: '8px 14px',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                                            zIndex: 10,
                                            whiteSpace: 'nowrap',
                                            animation: 'floatCard 3s ease-in-out infinite alternate'
                                        }}
                                    >
                                        <div
                                            className="flex items-center justify-center rounded-full flex-shrink-0"
                                            style={{ width: '30px', height: '30px', backgroundColor: '#1B3A2D', fontSize: '14px' }}
                                        >
                                            🌿
                                        </div>
                                        <div>
                                            <p className="m-0 font-bold" style={{ fontSize: '11px', color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>100% Pure Veg</p>
                                            <p className="m-0" style={{ fontSize: '10px', color: '#888', fontFamily: 'Poppins, sans-serif' }}>Certified Restaurant</p>
                                        </div>
                                    </div>

                                    {/* CARD 2 - Outdoor Catering - left middle */}
                                    <div
                                        className="hero-float-card absolute flex items-center gap-2"
                                        style={{
                                            top: '42%',
                                            left: '-28%',
                                            transform: 'translateY(-50%)',
                                            backgroundColor: '#1B3A2D',
                                            borderRadius: '50px',
                                            padding: '8px 14px',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                            zIndex: 10,
                                            whiteSpace: 'nowrap',
                                            animation: 'floatCard 4s ease-in-out infinite alternate'
                                        }}
                                    >
                                        <div
                                            className="flex items-center justify-center rounded-full flex-shrink-0"
                                            style={{ width: '26px', height: '26px', backgroundColor: 'rgba(255,255,255,0.15)', fontSize: '13px' }}
                                        >
                                            🍽️
                                        </div>
                                        <p className="m-0 font-semibold" style={{ fontSize: '11px', color: 'white', fontFamily: 'Poppins, sans-serif' }}>
                                            Outdoor Catering
                                        </p>
                                    </div>

                                    {/* CARD 3 - Fresh Ingredients - bottom right */}
                                    <div
                                        className="hero-float-card absolute flex items-center gap-3"
                                        style={{
                                            bottom: '5%',
                                            right: '-22%',
                                            backgroundColor: 'white',
                                            borderRadius: '14px',
                                            padding: '10px 14px',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                                            zIndex: 10,
                                            maxWidth: '175px',
                                            animation: 'floatCard 3.5s ease-in-out infinite alternate'
                                        }}
                                    >
                                        <div
                                            className="flex items-center justify-center rounded-xl flex-shrink-0"
                                            style={{ width: '40px', height: '40px', backgroundColor: '#F0EAD6', fontSize: '20px' }}
                                        >
                                            🌿
                                        </div>
                                        <div>
                                            <p className="m-0 font-bold" style={{ fontSize: '11px', color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>Fresh Ingredients</p>
                                            <p className="m-0" style={{ fontSize: '10px', color: '#888', fontFamily: 'Poppins, sans-serif' }}>Prepared Daily</p>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Keyframe animation in style tag */}
                    <style jsx>{`
        @keyframes floatCard {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        @media (max-width: 768px) {
          .hero-float-card {
            display: none !important;
          }
        }
      `}</style>

                </section>
            </div>
        </>
    );
};

export default Hero;
