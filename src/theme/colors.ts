export const COLORS = {
    BRAND: {
        PRIMARY: "#213431",
        SECONDARY: "#005B4C", 
        ACCENT: "#FFC119",
        YELLOW:   "#FEB609",
    },
    NEUTRAL: {
        GRAY: "#EBEBEB",
        WHITE: "#FFFFFF",
        LIGHT_GRAY: "#EAEEF9",
        WHITE_GRAY: "#F8F8F8",
        LIGHT_GREEN: "#667085",
    },
    FONT:{
        DARK_GRAY: "#39364F",
        
    },
    ICON:{
        BLACK: "#212121"
    }
};

export type ColorKey = keyof typeof COLORS.BRAND | keyof typeof COLORS.NEUTRAL;

export type Theme = keyof typeof COLORS;