import { scaledFontSize, verticalScale } from "../utils/scaleResponsive";

// Define FontSizeConstants with adjusted values
export const FontSizeConstants: { [key: string]: number } = {
  xxxs: scaledFontSize(4), // Extra extra extra small (smaller than usual)
  xs: scaledFontSize(6),   // Extra small
  sm: scaledFontSize(10),  // Small
  nm: scaledFontSize(14),  // Normal (medium)
  md: scaledFontSize(16),  // Medium
  lg: scaledFontSize(18),  // Large
  xlg: scaledFontSize(20), // Extra large
  xl: scaledFontSize(22),  // Extra extra large
  xxl: scaledFontSize(24), // Extra extra extra large
  xxxl: scaledFontSize(28), // Extra extra extra extra large
};

export const ButtonImageSizeContants = {
  sm: verticalScale(8), // Small
  nm: verticalScale(18), // Normal (medium)
  md: verticalScale(20), // Medium
  lg: verticalScale(25), // Large
  xlg: verticalScale(27), // Extra large
  xl: verticalScale(32), // Extra extra large
  xxl: verticalScale(35), // Extra extra extra large
};
