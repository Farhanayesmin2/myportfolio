import React from "react";
import styles from "./styles";
import { SearchIcon } from "@/src/assets/icons/SearchIcon";
import { ButtonOutlineBlack, PrimaryButton } from "@/src/assets";
import Logo from "@/src/assets/images/HooikuenLogo.png";
import Image from "next/image";
import { CaretDownIcon } from "@/src/assets/icons/CaretDown";
import { COLORS } from "@/src/theme";

const Navbar: React.FC = () => {
  return (
    <div style={styles.navbarContainer}>
      {/* Navbar Left */}
      <div style={styles.navbarLeft}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <Image
            src={Logo}
            alt="Hooikuen Logo"
            style={styles.logo}
          />
          <div style={{ position: "relative" }}>
            {/* Search Input */}
            <input
              style={styles.searchInput}
              placeholder="What do you want to learn?"
            />
            <button style={styles.searchButton} aria-label="Search">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>

     {/* Navbar Middle */}
     <div style={styles.navbarMiddle}>
        <button style={styles.navIconButton}>
          Courses <CaretDownIcon />
        </button>
        <button style={styles.navIconButton}>
          Blog <CaretDownIcon />
        </button>
        <button style={styles.navIconButton}>
          About Us <CaretDownIcon />
        </button>
        <button style={styles.navIconButton}>
          Contact <CaretDownIcon />
        </button>
      </div>

      {/* Navbar Right */}
      <div style={styles.navbarRight}>
        <button>Career</button>
        <PrimaryButton bgColor={COLORS.NEUTRAL.GRAY}>Login</PrimaryButton>
        <ButtonOutlineBlack>Sign Up</ButtonOutlineBlack>
      </div>
    </div>
  );
};

export default Navbar;
