import { COLORS } from "@/src/theme/colors";
import { borderRadius, typography } from "@/src/theme";

const styles = {
  navbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    width: "1737px",
    height: "52px",
    margin: "36px auto",
    color: COLORS.BRAND.PRIMARY,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "56px", 
  },
  logo: {
    width: "160px",
    height: "32px",
    objectFit: "contain",
  },
  navIconButton: {
    display: "flex",
    alignItems: "center",
    gap: "5px", 
    fontSize: "16px",
    cursor: "pointer",
  },
  searchInput: {
    width: "237px",
    height: "41px",
    padding: "10px 40px 10px 12px",
    borderRadius: borderRadius.md,
    border: "1px solid #ccc",
    outline: "none",
    fontFamily: typography.Small_Text_Short,
    fontSize: "12px",
    color: COLORS.BRAND.PRIMARY,
  },
  searchButton: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    width: "18px",
    height: "18px",
    backgroundColor: "transparent",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: COLORS.BRAND.SECONDARY,
    opacity: 0.8,
  },
  searchButtonHover: {
    color: COLORS.BRAND.PRIMARY,
  },
  navbarLeft: {
    display: "flex",
    alignItems: "center",
    gap: "56px", 
  },
  navbarMiddle: {
    display: "flex",
    gap: "16px",
    fontSize: "16px",
    fontWeight: "500",
  },
  navbarRight: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    font: "14px",
  },
};

export default styles;
