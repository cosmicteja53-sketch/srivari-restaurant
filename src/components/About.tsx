"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const About = () => {
    const images = [
        'https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/ingredients',
        'https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/diya',
        'https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/chef'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section id="about" className="py-24 md:py-32 bg-dark-bg">
            <div className="container mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <span className="text-gold-accent uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-cream mb-8 leading-tight">
                            A Legacy of Pure <br /> Vegetarian Excellence
                        </h2>
                        <p className="text-cream/70 text-lg leading-relaxed mb-6">
                            Sree Vari Restaurant brings the authentic flavors of South India to your table.
                            Our culinary journey is rooted in tradition, where every spice is carefully
                            selected and every dish is prepared with devotion.
                        </p>
                        <p className="text-cream/70 text-lg leading-relaxed mb-10">
                            We believe in the purity of ingredients and the art of traditional cooking
                            techniques passed down through generations.
                        </p>
                        <div className="h-[1px] w-24 bg-gold-accent mb-10" />
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <span className="block text-2xl font-serif text-gold-accent mb-1">100%</span>
                                <span className="text-xs text-cream/50 uppercase tracking-widest">Pure Vegetarian</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-serif text-gold-accent mb-1">Authentic</span>
                                <span className="text-xs text-cream/50 uppercase tracking-widest">Heritage Recipes</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full h-[300px] md:h-[600px] overflow-hidden rounded-[4px]"
                    >
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            borderRadius: '4px'
                        }}>

                            {images.map((src, index) => (
                                <div
                                    key={src}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        opacity: index === currentIndex ? 1 : 0,
                                        transition: 'opacity 1s ease-in-out',
                                        zIndex: index === currentIndex ? 1 : 0
                                    }}
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}
                                    />
                                </div>
                            ))}

                            {/* Dot indicators */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: '8px',
                                zIndex: 10
                            }}>
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        style={{
                                            width: index === currentIndex ? '24px' : '8px',
                                            height: '8px',
                                            borderRadius: '4px',
                                            backgroundColor: index === currentIndex ? '#C9A84C' : 'rgba(255,255,255,0.5)',
                                            border: 'none',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            padding: 0
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Vertical text label */}
                            <div style={{
                                position: 'absolute',
                                right: '-30px',
                                top: '50%',
                                transform: 'translateY(-50%) rotate(90deg)',
                                fontSize: '10px',
                                letterSpacing: '0.3em',
                                color: '#C9A84C',
                                fontFamily: 'Poppins, sans-serif',
                                zIndex: 10,
                                whiteSpace: 'nowrap'
                            }}>
                                HERITAGE VISUALS
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
