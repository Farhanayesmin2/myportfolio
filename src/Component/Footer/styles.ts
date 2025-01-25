import { COLORS, typography } from "@/src/theme";
const styles = {
    footerContainer: {
        backgroundColor: "#0A0B1A",
        color: COLORS.NEUTRAL.WHITE,
        padding: "40px 0",
        fontFamily: typography.Normal_Text_Regular,
        width: "100%",
    },
    contentWrapper: {
        width: "1300px",
        margin: "0 auto", 
    },
    topSections: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", 
        columnGap: "40px", 
        alignItems: "start",
    },
    section: {
        display: "flex",
        flexDirection: "column",
        gap: "12px", 
    },
 
    logoSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        maxWidth: "300px",
        marginRight: "60px", 
    },
    logoContainer: {
        width: "187px",
        height: "38px",
        marginBottom: "12px",
    },
    logoDescription: {
        fontSize: "15px",
        fontWeight: "500",
        lineHeight: "24px",
        color: COLORS.NEUTRAL.WHITE,
        marginBottom: "20px",
        textAlign: "left",
        whiteSpace: "nowrap", 
        overflow: "hidden", 
        textOverflow: "ellipsis",
    },
    socialIcons: {
        display: "flex",
        gap: "16px", 
        marginTop: "12px",
    },
    sectionTitle: {
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "12px",
        color: COLORS.NEUTRAL.WHITE,
    },
    list: {
        listStyle: "none",
        padding: "0",
        margin: "0",
    },
    listItem: {
        fontSize: "14px",
        color: "#A6A6A6",
        marginBottom: "8px",
        cursor: "pointer",
        transition: "color 0.3s",
    },
    appButtons: {
        display: "flex",
        flexDirection: "column", 
        gap: "16px",
        marginTop: "12px",
    },
    hr: {
        border: "none",
        borderTop: "1px solid #333",
        margin: "32px 0",
        width: "1300px", 
        marginLeft: "auto",
        marginRight: "auto",
    },
    bottomSection: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        fontSize: "14px",
        color: COLORS.NEUTRAL.WHITE,
        marginTop: "32px",
    },
    left: {
        flex: "1",
        textAlign: "left",
    },
    right: {
        display: "flex",
        gap: "40px",
    },
    rightSection: {
        display: "flex",
        gap: "16px",
    },
    highlight: {
        color: COLORS.BRAND.YELLOW,
    },
};

export default styles;
