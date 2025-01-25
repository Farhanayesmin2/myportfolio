export const COLORS = {
    BASE: {
        WHITE: "#e0e0e0",
        GRAY: "#f0f0f0",
    },
    SHADOW: {
        BOX: "#262c31",
    },
    NAVBAR: {
        TEXT: "#000000",
    },
    BORDER: {
        DEFAULT: "#6b7280",
        WHITE: "#f8f8f8"
    },
};

export type ColorKey = keyof typeof COLORS.BASE | keyof typeof COLORS.SHADOW | keyof typeof COLORS.NAVBAR | keyof typeof COLORS.BORDER;
export type Theme = keyof typeof COLORS;