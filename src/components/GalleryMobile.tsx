"use client";

import React from "react";

const GalleryMobile = () => {
    return (
        <section className="ambience-section bg-black pt-12">
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
            <div className="w-full px-4 mt-6">
                <img
                    src="https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/updated-shop"
                    alt="Sree Vari Restaurant"
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default GalleryMobile;
