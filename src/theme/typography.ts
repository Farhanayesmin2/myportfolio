import { css } from "styled-components";
import { COLORS } from "./colors"; 

export const FontFamily = {
  PlusJakartaSans_Regular: "'Plus Jakarta Sans', sans-serif",
  PlusJakartaSans_Bold: "'Plus Jakarta Sans', sans-serif",
  MonaSans_Regular: "'Mona Sans', sans-serif",
  MonaSans_Bold: "'Mona Sans', sans-serif",
};

export const typography = {
  Heading1: css`
    font-size: 72px;
    line-height: 80px;
    font-family: ${FontFamily.PlusJakartaSans_Bold};
    
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Heading2: css`
    font-size: 44px;
    line-height: 58.5px;
    font-family: ${FontFamily.PlusJakartaSans_Bold};
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Heading3: css`
    font-size: 36px;
    line-height: 41.4px;
    font-family: ${FontFamily.PlusJakartaSans_Bold};
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Heading4: css`
    font-size: 28px;
    line-height: 34px;
    font-family: ${FontFamily.PlusJakartaSans_Bold};
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Heading5: css`
    font-size: 22.5px;
    line-height: 30px;
    font-family: ${FontFamily.PlusJakartaSans_Bold};
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Heading6: css`
    font-size: 21.6px;
    line-height: 28px;
    font-family: ${FontFamily.PlusJakartaSans_Regular};
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Subtitle: css`
    font-size: 16px;
    line-height: 24px;
    font-family: ${FontFamily.PlusJakartaSans_Regular};
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Medium_Text_Bold: css`
    font-size: 18px;
    font-family: ${FontFamily.MonaSans_Bold};
    font-weight: 700;
    line-height: 25.2px;
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Medium_Text_Regular: css`
    font-size: 16px;
    font-family: ${FontFamily.MonaSans_Regular};
    font-weight: 400;
    line-height: 22.4px;
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Normal_Text_Bold: css`
    font-size: 16px;
    font-family: ${FontFamily.MonaSans_Bold};
    font-weight: 700;
    line-height: 22.4px;
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Normal_Text_Regular: css`
    font-size: 16px;
    font-family: ${FontFamily.MonaSans_Regular};
    font-weight: 400;
    line-height: 22.4px;
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Body: css`
    font-size: 14px;
    font-family: ${FontFamily.MonaSans_Regular};
    font-weight: 400;
    line-height: 19.6px;
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Small_Text_Bold: css`
    font-size: 14px;
    font-family: ${FontFamily.MonaSans_Bold};
    font-weight: 700;
    line-height: 19.6px;
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Small_Text_Regular: css`
    font-size: 14px;
    font-family: ${FontFamily.MonaSans_Regular};
    font-weight: 400;
    line-height: 19.6px;
    color: ${COLORS.FONT.DARK_GRAY};
  `,
  Small_Text_Short: css`
  font-size: 12px;
  font-family: ${FontFamily.MonaSans_Regular};
  font-weight: 400;
  line-height: 14.52px;
  color: ${COLORS.FONT.DARK_GRAY};
`,
};
