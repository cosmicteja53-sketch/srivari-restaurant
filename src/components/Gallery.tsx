"use client";

import React from "react";

const Gallery = () => {
    return (
        <section className="ambience-section" style={{ backgroundColor: '#0D0D0D', padding: '100px 0 0 0', overflow: 'hidden' }}>

            {/* Header Row */}
            <div className="ambience-header section-header" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '0 80px',
                marginBottom: '48px'
            }}>
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
                <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    maxWidth: '280px',
                    textAlign: 'right',
                    lineHeight: '1.8',
                    margin: 0,
                    paddingTop: '8px'
                }}>
                    A warm and welcoming space where every meal feels like home. Pure vegetarian. Pure devotion.
                </p>
            </div>

            {/* Full Width Restaurant Photo with overlays */}
            <div className="ambience-photo w-full" style={{ position: 'relative', overflow: 'hidden', height: '580px' }}>

                {/* Restaurant Image */}
                <img
                    src="https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/shop"
                    alt="Sree Vari Restaurant"
                    className="shop-image-mobile"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                    }}
                />

                {/* Dark gradient overlay bottom */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.2) 50%, transparent 100%)'
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
                <div className="ambience-bottom-right" style={{
                    position: 'absolute',
                    bottom: '48px',
                    right: '80px',
                    zIndex: 10,
                    display: 'flex',
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

                <div
                    className="flex md:hidden items-center justify-between px-5 py-3"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 20
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: '700', color: '#C9A84C', margin: 0 }}>A/C</p>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '9px', color: 'rgba(255,255,255,0.6)', margin: 0, letterSpacing: '0.1em' }}>DINING</p>
                    </div>
                    <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: '700', color: '#C9A84C', margin: 0 }}>₹200</p>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '9px', color: 'rgba(255,255,255,0.6)', margin: 0, letterSpacing: '0.1em' }}>MAX/PERSON</p>
                    </div>
                    <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: '700', color: '#C9A84C', margin: 0 }}>4.4★</p>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '9px', color: 'rgba(255,255,255,0.6)', margin: 0, letterSpacing: '0.1em' }}>RATING</p>
                    </div>
                    <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: '700', color: '#C9A84C', margin: 0 }}>10:30</p>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '9px', color: 'rgba(255,255,255,0.6)', margin: 0, letterSpacing: '0.1em' }}>CLOSES PM</p>
                    </div>
                </div>

                {/* Top right subtle label */}
                <div className="ambience-top-right" style={{
                    position: 'absolute',
                    top: '32px',
                    right: '80px',
                    zIndex: 10
                }}>
                    <p style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '10px',
                        letterSpacing: '0.3em',
                        color: 'rgba(255,255,255,0.35)',
                        margin: 0,
                        textTransform: 'uppercase'
                    }}>
                        Established · kanipakam
                    </p>
                </div>

            </div>

        </section>
    );
};

export default Gallery;
