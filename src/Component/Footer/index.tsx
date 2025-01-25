import React, { useState } from "react";
import styles from "./styles";
import Logo from "@/src/assets/images/Hooikuenfooter.png";
import Image from "next/image";
import { FacebookIcon } from "@/src/assets/icons/FacebookIcon";
import { TwitterIcon } from "@/src/assets/icons/TwitterIcon";
import { LinkedInIcon } from "@/src/assets/icons/LinkendIcon";
import { AppleIcon } from "@/src/assets/icons/AppleIcon";
import { GoogleIcon } from "@/src/assets/icons/GooglePlay";
import { COLORS } from "@/src/theme";
import FooterFirst from "../FooterFirst";

const Footer: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
            <FooterFirst></FooterFirst>
            <footer style={styles.footerContainer}>
                <div style={styles.contentWrapper}>
                    <div style={styles.topSections}>

                        <div style={styles.section}>
                            <div style={styles.logoSection}>
                                <div style={styles.logoContainer}>
                                    <Image src={Logo} alt="Logo" />
                                </div>
                                <h1 style={styles.logoDescription}>
                                    Go from dabbler to master in a matter of hours.
                                </h1>
                                <div style={styles.socialIcons}>
                                    <FacebookIcon />
                                    <TwitterIcon />
                                    <LinkedInIcon />
                                </div>
                            </div>
                        </div>
                        {/* Section 2: About Us */}

                        <div style={styles.section}>
                            <h3 style={styles.sectionTitle}>Company</h3>
                            <ul style={styles.list}>
                                {["About Us", "Affiliates", "Careers", "Investor", "News"].map(
                                    (item, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                ...styles.listItem,
                                                color: hoveredIndex === index ? COLORS.BRAND.YELLOW : COLORS.NEUTRAL.WHITE,
                                            }}
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            {item}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        {/* Section 3: Teaching */}
                        <div style={styles.section}>
                            <h3 style={styles.sectionTitle}>Teaching</h3>
                            <ul style={styles.list}>
                                <li style={styles.listItem}>Become a Teacher</li>
                                <li style={styles.listItem}>Teacher Help Center</li>
                                <li style={styles.listItem}>Teacher Rules & Requirements</li>
                            </ul>
                        </div>

                        {/* Section 4: Mobile */}
                        <div style={styles.section}>
                            <h3 style={styles.sectionTitle}>Mobile</h3>
                            <div style={styles.appButtons}>
                                <AppleIcon />
                                <GoogleIcon />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <hr style={styles.hr} />
                    <div style={styles.bottomSection}>
                        <div style={styles.left}>
                            <p>
                                Copyright © 2024{" "}
                                <span style={styles.highlight}>Hooikuen</span>. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div style={styles.right}>
                            <div style={styles.rightSection}>
                                <p style={styles.listItem}>Privacy Policy</p>
                                <p style={styles.listItem}>Terms and Conditions</p>
                                <p style={styles.listItem}>Security</p>
                            </div>
                            <div style={styles.rightSection}>
                                <p style={styles.listItem}>English</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;
