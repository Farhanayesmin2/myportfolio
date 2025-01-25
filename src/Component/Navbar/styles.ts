
import { CSSProperties } from 'react';
import { COLORS } from "@/theme/colors";

export const styles: { [key: string]: CSSProperties } = {
  nav: {
    width: '100%',
    padding: '16px',
    backgroundColor: COLORS.BASE.GRAY,
    boxShadow: `0 2px 4px ${COLORS.SHADOW.BOX}`,
    borderBottom: `1px solid ${COLORS.BORDER.DEFAULT}`,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  brand: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: COLORS.NAVBAR.TEXT,
  },
  links: {
    display: 'flex',
    gap: '16px',
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
};