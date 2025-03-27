// 'use client';
// import React from 'react';
// import { styles } from './styles';

// const Navbar = () => (
//   <nav style={styles.nav}>
//     <div style={styles.container}>
//       <h1 style={styles.brand}>Simanta</h1>
//       <div style={styles.navButtons}>
//         <button style={styles.primaryButton}>Hire Me</button>
//         <button style={styles.primaryButton}>View Resume</button>
//       </div>
//     </div>
//   </nav>
// );

// const Hero = () => (
//   <div style={styles.heroContainer}>
//     <div style={styles.contentLeft}>
//       <h1 style={styles.helloText}>Hello,<br/>I'm S!</h1>
//       <p style={styles.subtitle}>
//         I'm Simanta, Professional Web Developer.<br/>
//         Need any help?
//       </p>
//       <div style={styles.buttonContainer}>
//         <button style={styles.primaryButton}>Hire Me</button>
//         <button style={styles.primaryButton}>View Resume</button>
//       </div>
//     </div>
//     <div style={styles.imageRight}></div>
//   </div>
// );

// const SocialIcons = () => (
//   <div style={styles.socialContainer}>
//     <div style={styles.socialIcon}></div>
//     <div style={styles.socialIcon}></div>
//     <div style={styles.socialIcon}></div>
//   </div>
// );

// export default function Home() {
//   return (
//     <div style={styles.pageContainer}>
//       <Navbar />
//       <Hero />
//       <SocialIcons />
//     </div>
//   );
// }
'use client';
import React, { useState } from 'react';
import { styles } from './styles';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <h1 style={styles.brand}>Simanta</h1>
        <div style={styles.links}>
          {['Home', 'About', 'Project', 'Contact'].map((link) => (
            <a
              key={link}
              style={{
                ...styles.link,
                ...(hoveredLink === link ? styles.linkHover : {}),
              }}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <div style={styles.heroContainer}>
    <div style={styles.contentLeft}>
      <h1 style={styles.helloText}>Hello,<br/>I'm S!</h1>
      <p style={styles.subtitle}>
        I'm Simanta, Professional Web Developer.<br/>
        Need any help?
      </p>
      <div style={styles.buttonContainer}>
        <button style={styles.primaryButton}>Hire Me</button>
        <button style={styles.secondaryButton}>View Resume</button>
      </div>
    </div>
    
    <div style={styles.imageSection}>
      <div style={styles.imageRight}></div>
      <div style={styles.socialContainer}>
        {/* Replace these divs with actual icons */}
        <div style={styles.socialIcon}>Git</div>
        <div style={styles.socialIcon}>LinkedIn</div>
        <div style={styles.socialIcon}>Facebook</div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <Hero />
    </div>
  );
}