import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-gold-accent/10 pt-20 pb-10">
            <div className="container mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 footer-grid">
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-serif text-gold-accent luxury-text-spacing font-bold uppercase tracking-[0.2em]">
                                Sree Vari
                            </span>
                            <span className="block text-xs text-cream/60 tracking-[0.4em] uppercase">
                                Restaurant
                            </span>
                        </Link>
                        <p className="text-cream/50 text-sm leading-relaxed mb-6">
                            A tribute to the timeless traditions of South Indian vegetarian cuisine.
                        </p>
                        <div className="flex space-x-4">
                            <Instagram size={20} className="text-gold-accent/60 hover:text-gold-accent cursor-pointer transition-colors" />
                            <Facebook size={20} className="text-gold-accent/60 hover:text-gold-accent cursor-pointer transition-colors" />
                            <Twitter size={20} className="text-gold-accent/60 hover:text-gold-accent cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-cream font-serif text-lg mb-6 tracking-widest uppercase">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-cream/50">
                            <li><Link href="#about" className="hover:text-gold-accent transition-colors">About Us</Link></li>
                            <li><Link href="#menu" className="hover:text-gold-accent transition-colors">Our Menu</Link></li>
                            <li><Link href="#gallery" className="hover:text-gold-accent transition-colors">Gallery</Link></li>
                            <li><Link href="/" className="hover:text-gold-accent transition-colors">Reservations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-cream font-serif text-lg mb-6 tracking-widest uppercase">Contact</h4>
                        <ul className="space-y-4 text-sm text-cream/50">
                            <li>Kanipakam Cross, Irala Mandal</li>
                            <li>Andhra Pradesh</li>
                            <li>Phone: +91 97042 06118</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-cream font-serif text-lg mb-6 tracking-widest uppercase">Hours</h4>
                        <ul className="space-y-4 text-sm text-cream/50">
                            <li className="flex justify-between"><span>Breakfast</span> <span>7:00 AM - 11:00 AM</span></li>
                            <li className="flex justify-between"><span>Lunch</span> <span>12:00 PM - 3:30 PM</span></li>
                            <li className="flex justify-between"><span>Dinner</span> <span>7:00 PM - 10:30 PM</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gold-accent/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-cream/30 uppercase tracking-[0.2em]">
                        © 2024 Sree Vari Restaurant. All Rights Reserved.
                    </p>
                    <div className="flex space-x-8 text-[10px] text-cream/30 uppercase tracking-[0.2em]">
                        <span className="hover:text-gold-accent cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-gold-accent cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
