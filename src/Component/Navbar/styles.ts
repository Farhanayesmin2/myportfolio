// import { CSSProperties } from 'react';
// import { COLORS } from "@/theme/colors";

// export const styles: { [key: string]: CSSProperties } = {
//   pageContainer: {
//     height: '700px',
//     backgroundColor: COLORS.BASE.GRAY,
//     padding: '80px 40px',
//     margin: '80px 40px',
//     position: 'relative',
//   },
//   nav: {
//     width: '100%',
//     padding: '16px',
//     backgroundColor: COLORS.BASE.GRAY,
//     boxShadow: `0 2px 4px ${COLORS.SHADOW.BOX}`,
//     borderBottom: `1px solid ${COLORS.BORDER.DEFAULT}`,
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     zIndex: 1000,
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     maxWidth: '1300px',
//     width: '100%',
//     margin: '0 auto',
//   },
//   // Navbar Styles
//   brand: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: COLORS.NAVBAR.TEXT,
//     margin: 0,
//   },
//   navButtons: {
//     display: 'flex',
//     gap: '16px',
//   },
//   // Hero Section
//   heroContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: '100%',
//     maxWidth: '1300px',
//     margin: '0 auto',
//   },
//   contentLeft: {
//     flex: 1,
//     maxWidth: '600px',
//   },
//   imageRight: {
//     width: '400px',
//     height: '400px',
//     borderRadius: '50%',
//     backgroundColor: COLORS.BORDER.DEFAULT, // Replace with image
//   },
//   // Text Styles
//   helloText: {
//     fontSize: '64px',
//     fontWeight: 'bold',
//     marginBottom: '24px',
//     lineHeight: 1.2,
//     color: COLORS.NAVBAR.TEXT,
//   },
//   subtitle: {
//     fontSize: '24px',
//     color: COLORS.NAVBAR.TEXT,
//     marginBottom: '32px',
//     lineHeight: 1.5,
//   },
//   // Buttons
//   buttonContainer: {
//     display: 'flex',
//     gap: '16px',
//   },
//   primaryButton: {
//     padding: '16px 32px',
//     backgroundColor: COLORS.BASE.WHITE,
//     color: COLORS.NAVBAR.TEXT,
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '16px',
//   },
//   // Social Icons
//   socialContainer: {
//     position: 'absolute',
//     bottom: '40px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     display: 'flex',
//     gap: '24px',
//   },
//   socialIcon: {
//     width: '32px',
//     height: '32px',
//     borderRadius: '50%',
//     backgroundColor: COLORS.BORDER.DEFAULT, // Replace with icons
//     cursor: 'pointer',
//   },
// } as const;
import { CSSProperties } from 'react';
import { COLORS } from "@/theme/colors";

export const styles: { [key: string]: CSSProperties } = {
  pageContainer: {
    height: '700px',
    backgroundColor: COLORS.BASE.GRAY,
    padding: '80px 40px',
    margin: '80px 40px',
    position: 'relative',
  },
  nav: {
    width: '100%',
    padding: '16px',
    backgroundColor: COLORS.BASE.GRAY,
    boxShadow: `0 2px 4px ${COLORS.SHADOW.BOX}`,
    borderBottom: `1px solid ${COLORS.BORDER.DEFAULT}`,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1300px',
    width: '100%',
    margin: '0 auto',
  },
  brand: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: COLORS.NAVBAR.TEXT,
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: '40px',
  },
  link: {
    color: COLORS.NAVBAR.TEXT,
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: COLORS.BORDER.DEFAULT,
  },
  heroContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  contentLeft: {
    flex: 1,
    maxWidth: '600px',
  },
  imageSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  },
  imageRight: {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    backgroundColor: COLORS.BORDER.DEFAULT,
  },
  helloText: {
    fontSize: '64px',
    fontWeight: 'bold',
    marginBottom: '24px',
    lineHeight: 1.2,
    color: COLORS.NAVBAR.TEXT,
  },
  subtitle: {
    fontSize: '24px',
    color: COLORS.NAVBAR.TEXT,
    marginBottom: '32px',
    lineHeight: 1.5,
  },
  buttonContainer: {
    display: 'flex',
    gap: '16px',
  },
  primaryButton: {
    padding: '16px 32px',
    backgroundColor: COLORS.BASE.WHITE,
    color: COLORS.NAVBAR.TEXT,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  secondaryButton: {
    padding: '16px 32px',
    backgroundColor: 'transparent',
    color: COLORS.NAVBAR.TEXT,
    border: `2px solid ${COLORS.BORDER.DEFAULT}`,
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  socialContainer: {
    display: 'flex',
    gap: '24px',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: COLORS.BORDER.DEFAULT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
} as const;