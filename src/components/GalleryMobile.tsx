"use client";

import React from "react";

const GalleryMobile = () => {
    return (
        <section className="ambience-section bg-black pt-12 overflow-hidden">
            {/* Header Row */}
            <div className="ambience-header section-header px-5 mb-6">
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
                    fontSize: '34px',
                    fontWeight: '400',
                    color: 'white',
                    margin: 0,
                    lineHeight: 1.1
                }}>
                    The Ambience
                </h2>
            </div>

            {/* Restaurant Photo Container */}
            <div className="ambience-photo w-full relative overflow-hidden h-auto">
                <img
                    src="https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/updated-shop"
                    alt="Sree Vari Restaurant"
                    className="w-[92%] mx-auto h-auto object-contain object-center rounded-xl"
                />

                {/* Stats row integrated at image bottom */}
                <div
                    className="flex items-center justify-between px-5 py-3 mx-auto translate-y-[-100%]"
                    style={{
                        width: '92%',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(8px)',
                        borderBottomLeftRadius: '12px',
                        borderBottomRightRadius: '12px',
                        zIndex: 20
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '11px', fontWeight: '700', color: '#C9A84C', margin: 0 }}>A/C</p>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '8px', color: 'rgba(255,255,255,0.6)', margin: 0, letterSpacing: '0.05em' }}>DINING</p>
                    </div>
                    <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '11px', fontWeight: '700', color: '#C9A84C', margin: 0 }}>₹200</p>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '8px', color: 'rgba(255,255,255,0.6)', margin: 0, letterSpacing: '0.05em' }}>MAX/PERSON</p>
                    </div>
                    <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '11px', fontWeight: '700', color: '#C9A84C', margin: 0 }}>4.4★</p>
                        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '8px', color: 'rgba(255,255,255,0.6)', margin: 0, letterSpacing: '0.05em' }}>RATING</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GalleryMobile;
