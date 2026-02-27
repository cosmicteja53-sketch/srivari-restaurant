"use client";
import React from "react";
import { motion } from "framer-motion";

const ChaiBuster = () => {
    return (
        <>
            {/* DESKTOP CHAI BUSTER - visible on md and up */}
            <section
                className="hidden md:block"
                style={{ backgroundColor: '#F5F0E8', padding: '0' }}
            >
                {/* Top header section */}
                <div style={{
                    backgroundColor: '#F5F0E8',
                    padding: '24px 80px 16px 80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    overflow: 'visible'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <img
                            src="/images/chai-buster.png"
                            alt="Chai Busters"
                            style={{
                                height: '110px',
                                width: 'auto',
                                objectFit: 'contain',
                                display: 'block',
                                mixBlendMode: 'multiply',
                                marginBottom: '-16px'
                            }}
                        />
                        <div style={{
                            width: '1px',
                            height: '48px',
                            backgroundColor: '#C9A84C'
                        }} />
                        <div>
                            <p style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '11px',
                                letterSpacing: '0.3em',
                                color: '#C9A84C',
                                margin: '0 0 4px 0',
                                textTransform: 'uppercase'
                            }}>
                                Special Blend
                            </p>
                            <p style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '28px',
                                fontWeight: '600',
                                color: '#1A1A1A',
                                margin: 0,
                                fontStyle: 'italic'
                            }}>
                                Tea · Coffee · Juices · Cold Drinks
                            </p>
                        </div>
                    </div>
                    <p style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '13px',
                        color: '#888',
                        margin: 0,
                        textAlign: 'right',
                        letterSpacing: '0.05em'
                    }}>
                        Available Inside Sree Vari A/C Restaurant
                    </p>
                </div>

                {/* Full width image container with text overlays */}
                <div style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden' }}>

                    {/* Background Image */}
                    <img
                        src="https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/all-drinks"
                        alt="Chai Buster Drinks"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center center',
                            display: 'block'
                        }}
                    />

                    {/* Full overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)'
                    }} />

                    {/* Left text content */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '80px',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        maxWidth: '480px'
                    }}>

                        <p style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '11px',
                            letterSpacing: '0.3em',
                            color: '#C9A84C',
                            margin: '0 0 16px 0',
                            textTransform: 'uppercase'
                        }}>
                            Special Blend · Inside Sree Vari
                        </p>

                        <h2 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '56px',
                            fontWeight: '700',
                            color: 'white',
                            margin: '0 0 16px 0',
                            lineHeight: 1.0,
                            fontStyle: 'italic'
                        }}>
                            Sip Something
                            <br />
                            <span style={{ color: '#C9A84C' }}>Extraordinary</span>
                        </h2>

                        {/* Gold divider */}
                        <div style={{
                            width: '48px',
                            height: '1px',
                            backgroundColor: '#C9A84C',
                            margin: '0 0 20px 0'
                        }} />

                        <p style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '15px',
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: '1.8',
                            margin: '0 0 32px 0',
                            maxWidth: '380px'
                        }}>
                            From steaming chai to chilled fresh juices — Chai Buster brings you handcrafted beverages with a special blend that keeps you coming back.
                        </p>

                        {/* Pills row */}
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {['Hot Teas', 'Fresh Juices', 'Cold Drinks', 'Special Blends'].map(item => (
                                <span
                                    key={item}
                                    style={{
                                        padding: '8px 16px',
                                        border: '1px solid rgba(201,168,76,0.5)',
                                        borderRadius: '50px',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '11px',
                                        color: '#C9A84C',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>
            </section>

            {/* MOBILE CHAI BUSTER - below 768px only */}
            <section className="block md:hidden" style={{ backgroundColor: '#F5F0E8' }}>

                {/* Top header on cream surface */}
                <div style={{
                    padding: '24px 20px 0px 20px',
                }}>
                    <img
                        src="/images/chai-buster.png"
                        alt="Chai Buster"
                        style={{
                            height: '110px',
                            width: 'auto',
                            objectFit: 'contain',
                            display: 'block',
                            marginBottom: '12px',
                            mixBlendMode: 'multiply'
                        }}
                    />
                    <div style={{
                        width: '32px',
                        height: '1px',
                        backgroundColor: '#C9A84C',
                        margin: '0 0 12px 0'
                    }} />
                    <p style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '22px',
                        fontWeight: '600',
                        fontStyle: 'italic',
                        color: '#1A1A1A',
                        margin: '0 0 6px 0',
                        lineHeight: 1.2
                    }}>
                        Tea · Coffee · Juices
                    </p>
                    <p style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '11px',
                        letterSpacing: '0.15em',
                        color: '#C9A84C',
                        margin: 0,
                        textTransform: 'uppercase'
                    }}>
                        Special Blend · Inside Sree Vari
                    </p>
                </div>

                {/* Full width vertical image */}
                <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'hidden' }}>
                    <img
                        src="https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/all-drinks-vertical"
                        alt="Chai Buster Drinks"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center center',
                            display: 'block'
                        }}
                    />

                    {/* Bottom gradient overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)'
                    }} />

                    {/* Bottom text on image */}
                    <div style={{
                        position: 'absolute',
                        bottom: '24px',
                        left: '20px',
                        right: '20px',
                        zIndex: 10
                    }}>
                        <p style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '13px',
                            color: 'rgba(255,255,255,0.7)',
                            margin: '0 0 14px 0',
                            lineHeight: '1.6'
                        }}>
                            From steaming chai to chilled fresh juices — handcrafted with a special blend.
                        </p>
                        {/* Pills */}
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {['Hot Teas', 'Fresh Juices', 'Cold Drinks', 'Special Blends'].map(item => (
                                <span
                                    key={item}
                                    style={{
                                        padding: '6px 12px',
                                        border: '1px solid rgba(201,168,76,0.6)',
                                        borderRadius: '50px',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '10px',
                                        color: '#C9A84C',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default ChaiBuster;
