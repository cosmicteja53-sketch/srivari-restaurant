"use client";

import React from "react";

const Menu = () => {
    const menuItems = [
        {
            id: 1,
            name: 'Heritage Meals',
            tag: 'SIGNATURE',
            description: 'A complete South Indian thali experience with rice, sambar, rasam, fresh curries, crispy papad and homemade chutneys. Every element prepared fresh daily with traditional recipes.',
            image: 'https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/thali2',
            imageRight: true
        },
        {
            id: 2,
            name: 'Crispy Vada',
            tag: 'BREAKFAST',
            description: 'Golden crispy medu vada served hot with coconut chutney and piping sambar. Made from freshly ground urad dal batter every morning for that perfect crunch.',
            image: 'https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/vada',
            imageRight: false
        },
        {
            id: 3,
            name: 'Fluffy Idly',
            tag: 'MORNING SPECIAL',
            description: 'Soft pillowy idlies steamed to perfection, served with our signature coconut chutney and rich sambar. Light on the stomach, heavy on tradition.',
            image: 'https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/idly',
            imageRight: true
        },
        {
            id: 4,
            name: 'Crispy Dosa',
            tag: 'ALL DAY',
            description: 'Paper thin golden dosa with a satisfying crunch, served sizzling hot alongside fresh coconut chutney and sambar. Our most loved dish since day one.',
            image: 'https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/dosa',
            imageRight: false
        },
        {
            id: 5,
            name: 'Puri Bhaji',
            tag: 'BREAKFAST',
            description: 'Perfectly puffed golden puris paired with a mildly spiced potato bhaji. A timeless South Indian breakfast that brings comfort in every bite.',
            image: 'https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/puri',
            imageRight: true
        },
        {
            id: 6,
            name: 'Pongal',
            tag: 'TEMPLE SPECIAL',
            description: 'Creamy ghee pongal made with freshly harvested rice and moong dal, tempered with cashews, pepper and cumin. A divine start to any morning.',
            image: 'https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/pongal',
            imageRight: false
        },
        {
            id: 7,
            name: 'Ice Cream',
            tag: 'DESSERT',
            description: 'Refresh yourself with our chilled selection of ice creams to sweeten the end of your meal. The perfect finale to a traditional South Indian feast.',
            image: 'https://res.cloudinary.com/dzuua38cd/image/upload/srivari-restaurant/icecream',
            imageRight: true
        }
    ];

    return (
        <section id="menu" style={{ backgroundColor: '#F5F0E8', padding: '100px 0 0 0' }}>

            {/* Section Header */}
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '80px', padding: '0 40px' }}>
                <p style={{
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    color: '#C9A84C',
                    fontFamily: 'Poppins, sans-serif',
                    marginBottom: '16px'
                }}>
                    GASTRONOMIC JOURNEY
                </p>
                <h2 className="menu-section-title" style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '56px',
                    fontWeight: '700',
                    color: '#1A1A1A',
                    lineHeight: 1.1,
                    margin: 0
                }}>
                    Our Signature Dishes
                </h2>
            </div>

            {/* Menu Items */}
            {menuItems.map((item, index) => (
                <div
                    key={item.id}
                    className="menu-item-grid signature-grid-item"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        alignItems: 'center',
                        marginBottom: '0',
                        borderTop: '1px solid #E0D9CC',
                        minHeight: '480px'
                    }}
                >

                    {/* Text Column - conditionally ordered */}
                    <div
                        className="menu-item-text"
                        style={{
                            padding: '60px 80px',
                            order: item.imageRight ? 1 : 2,
                            backgroundColor: index % 2 === 0 ? '#F5F0E8' : '#EFEAD9'
                        }}
                    >
                        <p style={{
                            fontSize: '10px',
                            letterSpacing: '0.3em',
                            color: '#C9A84C',
                            fontFamily: 'Poppins, sans-serif',
                            marginBottom: '16px',
                            margin: '0 0 12px 0'
                        }}>
                            {item.tag}
                        </p>
                        <h3 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#1A1A1A',
                            lineHeight: 1.1,
                            margin: '0 0 20px 0'
                        }}>
                            {item.name}
                        </h3>
                        <div style={{
                            width: '40px',
                            height: '1px',
                            backgroundColor: '#C9A84C',
                            margin: '0 0 24px 0'
                        }} />
                        <p style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '15px',
                            lineHeight: '1.8',
                            color: '#555',
                            margin: '0 0 32px 0',
                            maxWidth: '420px'
                        }}>
                            {item.description}
                        </p>
                    </div>

                    {/* Image Column - conditionally ordered */}
                    <div
                        className="menu-item-image"
                        style={{
                            order: item.imageRight ? 2 : 1,
                            height: '480px',
                            overflow: 'hidden'
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                transition: 'transform 0.6s ease',
                                display: 'block'
                            }}
                            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                    </div>

                </div>
            ))}

            {/* Bottom border */}
            <div style={{ borderTop: '1px solid #E0D9CC' }} />

            {/* Cold Beverages - Static Item */}
            <div
                className="signature-grid-item"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    alignItems: 'center',
                    backgroundColor: '#F5F0E8',
                    minHeight: '480px'
                }}
            >
                {/* Image Column - left */}
                <div style={{ height: '480px', overflow: 'hidden', order: 1 }}>
                    <img
                        src="/images/coco-cola.png"
                        alt="Cold Beverages"
                        className="fridge-image"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block',
                            transition: 'transform 0.6s ease'
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                </div>

                {/* Text Column - right */}
                <div
                    style={{
                        padding: '60px 80px',
                        order: 2,
                        backgroundColor: '#F5F0E8'
                    }}
                >
                    <p style={{
                        fontSize: '10px',
                        letterSpacing: '0.3em',
                        color: '#C9A84C',
                        fontFamily: 'Poppins, sans-serif',
                        margin: '0 0 12px 0'
                    }}>
                        BEVERAGES
                    </p>
                    <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '42px',
                        fontWeight: '700',
                        color: '#1A1A1A',
                        lineHeight: 1.1,
                        margin: '0 0 20px 0'
                    }}>
                        Cold Beverages
                    </h3>
                    <div style={{
                        width: '40px',
                        height: '1px',
                        backgroundColor: '#C9A84C',
                        margin: '0 0 24px 0'
                    }} />
                    <p style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '15px',
                        lineHeight: '1.8',
                        color: '#555',
                        margin: 0,
                        maxWidth: '420px'
                    }}>
                        Refresh yourself with our chilled selection of soft drinks, juices and water. The perfect companion to every South Indian meal.
                    </p>
                </div>
            </div>

            {/* Final Bottom border */}
            <div style={{ borderTop: '1px solid #E0D9CC' }} />

        </section>
    );
};

export default Menu;
