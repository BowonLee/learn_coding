import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Layout = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const updateScrollState = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', updateScrollState);
        return () => window.removeEventListener('scroll', updateScrollState);
    }, []);

    // Sliver Header Styles
    const headerHeight = isScrolled ? 'h-16' : 'h-32';
    const logoSize = isScrolled ? 'text-xl' : 'text-3xl';
    const navGap = isScrolled ? 'gap-6' : 'gap-10';

    const navLinks = [
        { name: 'Introduction', path: '/' },
        { name: 'Lecture Content', path: '/learn' },
        { name: 'Goal & Benefits', path: '/effect' },
        { name: 'Making Process', path: '/process' },
        { name: 'Guide', path: '/guide' },
        { name: 'Setup', path: '/environment' },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Sliver App Bar */}
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 flex items-center justify-between px-4 md:px-8 ${headerHeight}`}
            >
                <div className="flex items-center">
                    {/* Logo area */}
                    <Link to="/" className={`font-bold text-hopeful-yellow transition-all duration-300 ${logoSize}`} onClick={() => setIsMobileMenuOpen(false)}>
                        Vibe Coding
                    </Link>
                    {/* Sub-text shows only when not scrolled and on desktop */}
                    <div className={`hidden md:block ml-4 text-gray-500 overflow-hidden transition-all duration-300 ${isScrolled ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
                        <span className="text-sm">For Everyone</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className={`hidden md:flex ${navGap} transition-all duration-300`}>
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-colors duration-200 ${isActive ? 'text-growth-green' : 'text-deep-charcoal hover:text-growth-green'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-deep-charcoal p-2 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile Navigation Dropdown */}
                <div className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <nav className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`font-medium text-lg text-center py-2 ${isActive ? 'text-growth-green bg-growth-green/5 rounded-lg' : 'text-deep-charcoal'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </motion.header>

            {/* Main Content Spacer for fixed header */}
            <div className={`transition-all duration-300 ${isScrolled ? 'pt-20' : 'pt-36'} flex-grow`}>
                <Outlet />
            </div>

            {/* Footer */}
            <footer className="bg-white py-8 border-t border-gray-100 mt-20">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>&copy; 2025 Vibe Coding. All rights reserved.</p>
                    <p className="text-sm mt-2">AI와 함께하는 새로운 코딩의 시작</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
