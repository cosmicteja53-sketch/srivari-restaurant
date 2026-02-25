"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuCategories = [
    {
        id: 'breakfast',
        label: '🥞 Breakfast & Tiffins',
        shortLabel: 'Breakfast',
        items: [
            { name: 'Idly', image: '/images/idly.png' },
            { name: 'Vada', image: '/images/vada.png' },
            { name: 'Sambar Vada', image: '/images/sambar-vada.png' },
            { name: 'Pongal', image: '/images/pongal.png' },
            { name: 'Plain Dosa', image: '/images/dosa.png' },
            { name: 'Masala Dosa', image: '/images/crispy-dosa.png' },
            { name: 'Karam Dosa', image: '/images/karam-dosa.png' },
            { name: 'Onion Dosa', image: '/images/onion-dosa.png' },
            { name: 'Butter Dosa', image: '/images/butter-dosa.png' },
            { name: 'Rava Dosa', image: '/images/rava-dosa.png' },
            { name: 'Onion Uthappam', image: '/images/uthappam.png' },
            { name: 'Tomato Uthappam', image: '/images/uthappam.png' },
            { name: 'Karam Podi Dosa', image: '/images/karam-dosa.png' },
            { name: 'Poori', image: '/images/puri.png' },
            { name: 'Kadapa Karam Masala', image: '/images/kadapa-masala.png' },
        ]
    },
    {
        id: 'lunch',
        label: '🍛 Lunch',
        shortLabel: 'Lunch',
        items: [
            { name: 'Ordinary Meals', image: '/images/south-indian-thali.png' },
            { name: 'Special Meals', image: '/images/premium-thali.png' },
            { name: 'Curd Rice', image: '/images/curd-rice.png' },
            { name: 'Sambar Rice', image: '/images/sambar-rice.png' },
            { name: 'Tomato Rice', image: '/images/tomato-rice.png' },
            { name: 'Lemon Rice', image: '/images/lemon-rice.png' },
        ]
    },
    {
        id: 'roti',
        label: '🫓 Roti Items',
        shortLabel: 'Roti',
        items: [
            { name: 'Veg Biryani', image: '/images/veg-biryani.png' },
            { name: 'Pulihora', image: '/images/pulihora.png' },
            { name: 'Veg Fried Rice', image: '/images/veg-fried-rice.png' },
            { name: 'Bisi Bele Bath', image: '/images/bisi-bele-bath.png' },
            { name: 'Chapathi', image: '/images/chapathi.png' },
            { name: 'Parota', image: '/images/parota.png' },
            { name: 'Butter Naan', image: '/images/ButterNaan.png' },
            { name: 'Rumali Roti', image: '/images/rumaliroti.png' },
        ]
    },
    {
        id: 'gravies',
        label: '🍲 Indian Gravies',
        shortLabel: 'Gravies',
        items: [
            { name: 'Veg Masala', image: '/images/veg-masala.png' },
            { name: 'Paneer Masala', image: '/images/kadai-paneer-shot.png' },
            { name: 'Paneer Butter Masala', image: '/images/paneerbuttermasala.png' },
            { name: 'Ginger Masala', image: '/images/gingermasala.png' },
        ]
    },
    {
        id: 'starters',
        label: '🥗 Starters',
        shortLabel: 'Starters',
        items: [
            { name: 'Kadai Paneer', image: '/images/kadaipaneer.png' },
            { name: 'Shahi Paneer', image: '/images/shahipaneer.png' },
            { name: 'Kadai Mushroom', image: '/images/kadaimushroom.png' },
            { name: 'Mushroom Masala', image: '/images/mushroom-masala.png' },
            { name: 'Mushroom Butter Masala', image: '/images/mushroombutter-masala.png' },
            { name: 'Mushroom Kaju Masala', image: '/images/muashroomkaju-masala.png' },
            { name: 'Gobi 65', image: '/images/gobi-65.png' },
            { name: 'Gobi Pepper Fry', image: '/images/gobipepper.png' },
            { name: 'Veg Manchurian', image: '/images/vegmunchurian.png' },
            { name: 'Paneer Manchurian', image: '/images/paneermunchurian.png' },
            { name: 'Mushroom Manchurian', image: '/images/mushroommunchurian.png' },
            { name: 'Baby Corn Manchurian', image: '/images/babycornmunchurian.png' },
        ]
    },
    {
        id: 'noodles',
        label: '🍜 Noodles & Fried Rice',
        shortLabel: 'Noodles',
        items: [
            { name: 'Veg Noodles', image: '/images/veg-noodles.png' },
            { name: 'Gobi Noodles', image: '/images/gobi-noodles.png' },
            { name: 'Mushroom Noodles', image: '/images/mushroom-noodles.png' },
            { name: 'Paneer Noodles', image: '/images/paneer-noodles.png' },
            { name: 'Schezwan Veg Noodles', image: '/images/schezwannoodle.png' },
            { name: 'Schezwan Mushroom Noodles', image: '/images/schezwannoodle.png' },
            { name: 'Veg Fried Rice', image: '/images/veg-fried-rice.png' },
            { name: 'Gobi Fried Rice', image: '/images/gobi-fried-rice.png' },
            { name: 'Mushroom Fried Rice', image: '/images/mushroom-fried-rice.png' },
            { name: 'Paneer Fried Rice', image: '/images/paneer-fried-rice.png' },
            { name: 'Mixed Veg Fried Rice', image: '/images/veg-fried-rice.png' },
            { name: 'Schezwan Veg Fried Rice', image: '/images/schezwan-fried-rice.png' },
            { name: 'Schezwan Mushroom Fried Rice', image: '/images/schezwanmushroomrice.png' },
        ]
    },
    {
        id: 'soups',
        label: '🥣 Soups',
        shortLabel: 'Soups',
        items: [
            { name: 'Veg Hot & Sour Soup', image: '/images/hot-sour-soup.png' },
            { name: 'Tomato Soup', image: '/images/tomato-soup.png' },
            { name: 'Sweet Corn Soup', image: '/images/sweet-corn-soup.png' },
        ]
    }
];

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState('breakfast');
    const scrollRef = useRef<HTMLDivElement>(null);

    const activeItems = menuCategories.find(c => c.id === activeCategory)?.items || [];

    return (
        <section id="menu-grid-section" style={{ backgroundColor: '#F5F0E8', padding: '100px 0' }}>

            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 24px' }}>
                <p style={{
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    color: '#C9A84C',
                    fontFamily: 'Poppins, sans-serif',
                    margin: '0 0 12px 0',
                    textTransform: 'uppercase'
                }}>
                    OUR MENU
                </p>
                <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(32px, 5vw, 56px)',
                    fontWeight: '700',
                    color: '#1A1A1A',
                    margin: 0,
                    lineHeight: 1.1
                }}>
                    Curated For Every Craving
                </h2>
            </div>

            {/* Category Tab Bar - horizontally scrollable on mobile */}
            <div
                ref={scrollRef}
                style={{
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    padding: '0 24px',
                    marginBottom: '48px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <div style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'nowrap',
                    minWidth: 'max-content',
                    padding: '4px 0'
                }}>
                    {menuCategories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '50px',
                                border: 'none',
                                cursor: 'pointer',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '12px',
                                fontWeight: '600',
                                letterSpacing: '0.05em',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.3s ease',
                                backgroundColor: activeCategory === cat.id ? '#1B3A2D' : 'white',
                                color: activeCategory === cat.id ? 'white' : '#1A1A1A',
                                boxShadow: activeCategory === cat.id
                                    ? '0 4px 20px rgba(27,58,45,0.3)'
                                    : '0 2px 8px rgba(0,0,0,0.06)'
                            }}
                        >
                            {cat.shortLabel}
                        </button>
                    ))}
                </div>
            </div>

            {/* Menu Grid */}
            <div style={{ padding: '0 24px', maxWidth: '1400px', margin: '0 auto' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="menu-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                            gap: '20px'
                        }}
                    >
                        {activeItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                style={{
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    backgroundColor: '#1B3A2D',
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                            >
                                {/* Image */}
                                <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                            display: 'block',
                                            transition: 'transform 0.4s ease'
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                                    />
                                </div>

                                {/* Label */}
                                <div style={{
                                    padding: '14px 16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <p style={{
                                        margin: 0,
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        color: 'white',
                                        lineHeight: 1.3
                                    }}>
                                        {item.name}
                                    </p>
                                    <div style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <span style={{ color: '#C9A84C', fontSize: '12px' }}>✦</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

        </section>
    );
}
