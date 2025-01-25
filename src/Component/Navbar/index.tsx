
'use client'; 

import React, { useState } from 'react';
import { styles } from './styles';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo or Brand Name */}
        <h1 style={styles.brand}>Farhana Yesmin</h1>

        {/* Navigation Links */}
        <div style={styles.links}>
          {['Home', 'About', 'Portfolio', 'Contact'].map((link) => (
            <div
              key={link}
              style={{
                ...styles.link,
                ...(hoveredLink === link ? styles.linkHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter(link)}
              onMouseLeave={handleMouseLeave}
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;