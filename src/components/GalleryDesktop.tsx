"use client";

import React from "react";

const GalleryDesktop = () => {
    return (
        <section className="ambience-section bg-black pt-24 overflow-hidden">
            {/* Header Row */}
            <div className="ambience-header section-header flex justify-between items-start px-20 mb-4">
                <div>
                    <p style={{
                        fontSize: '11px',
                        letterSpacing: '0.3em',
                        color: '#C9A84C',
                        fontFamily: 'Poppins, sans-serif',
                        margin: '0 0 12px 0'
                    }}>
                        VISUAL EXPERIENCE
                    </p>
                    <h2 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '56px',
                        fontWeight: '400',
                        color: 'white',
                        margin: 0,
                        lineHeight: 1.1
                    }}>
                        The Ambience
                    </h2>
                </div>
                <div>
                    <p style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.5)',
                        maxWidth: '280px',
                        textAlign: 'right',
                        lineHeight: '1.8',
                        margin: '0 0 8px 0',
                        paddingTop: '8px'
                    }}>
                        A warm and welcoming space where every meal feels like home. Pure vegetarian. Pure devotion.
                    </p>
                    <p style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '10px',
                        letterSpacing: '0.3em',
                        color: 'rgba(255,255,255,0.4)',
                        margin: 0,
                        textAlign: 'right',
                        textTransform: 'uppercase'
                    }}>
                        Established · Kanipakam
                    </p>
                </div>
            </div>

            {/* Full Width Restaurant Photo with overlays */}
            <div className="relative w-full aspect-[16/7] overflow-hidden">
                {/* Restaurant Image */}
                <img
                    src="https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/updated-shop"
                    alt="Sree Vari Restaurant"
                    className="w-full h-full object-cover object-center"
                />

                {/* Premium Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 70%)'
                }} />

                {/* Left overlay text */}
                <div className="ambience-bottom-left" style={{
                    position: 'absolute',
                    bottom: '48px',
                    left: '80px',
                    zIndex: 10
                }}>
                    <p style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '32px',
                        fontWeight: '600',
                        color: 'white',
                        margin: '0 0 8px 0',
                        lineHeight: 1.2
                    }}>
                        Sree Vari A/C Restaurant
                    </p>
                    <p style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.6)',
                        margin: 0,
                        letterSpacing: '0.05em'
                    }}>
                        kanipakam, Andhra Pradesh · Open till 10:30 PM
                    </p>
                </div>

                {/* Right overlay info cards */}
                <div className="ambience-bottom-right flex" style={{
                    position: 'absolute',
                    bottom: '48px',
                    right: '80px',
                    zIndex: 10,
                    gap: '16px'
                }}>
                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '12px',
                        padding: '16px 20px',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '24px',
                            fontWeight: '700',
                            color: '#C9A84C',
                            margin: '0 0 4px 0'
                        }}>
                            A/C
                        </p>
                        <p style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '10px',
                            color: 'rgba(255,255,255,0.6)',
                            margin: 0,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}>
                            Dining Hall
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '12px',
                        padding: '16px 20px',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '24px',
                            fontWeight: '700',
                            color: '#C9A84C',
                            margin: '0 0 4px 0'
                        }}>
                            ₹200
                        </p>
                        <p style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '10px',
                            color: 'rgba(255,255,255,0.6)',
                            margin: 0,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}>
                            Max Per Person
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '12px',
                        padding: '16px 20px',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '24px',
                            fontWeight: '700',
                            color: '#C9A84C',
                            margin: '0 0 4px 0'
                        }}>
                            4.4★
                        </p>
                        <p style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '10px',
                            color: 'rgba(255,255,255,0.6)',
                            margin: 0,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}>
                            Google Rating
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryDesktop;
