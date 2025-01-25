// src/components/Navbar.tsx
import React from 'react';
import { COLORS } from "@/theme/colors";

const Navbar = () => {
    return (
        <nav
            className="w-full p-4 shadow-md"
            style={{
                backgroundColor: COLORS.BASE.GRAY,
                boxShadow: `0 2px 4px ${COLORS.SHADOW.BOX}`,
                borderBottom: `1px solid ${COLORS.BORDER.DEFAULT}`,
            }}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or Brand Name */}
                <div className="text-2xl font-bold" style={{ color: COLORS.NAVBAR.TEXT }}>
                    Simanta
                </div>

                {/* Navigation Links */}
                <div className="space-x-4">
                    <a
                        href="#home"
                        className="hover:underline"
                        style={{ color: COLORS.NAVBAR.TEXT }}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="hover:underline"
                        style={{ color: COLORS.NAVBAR.TEXT }}
                    >
                        About
                    </a>
                    <a
                        href="#portfolio"
                        className="hover:underline"
                        style={{ color: COLORS.NAVBAR.TEXT }}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#contact"
                        className="hover:underline"
                        style={{ color: COLORS.NAVBAR.TEXT }}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;