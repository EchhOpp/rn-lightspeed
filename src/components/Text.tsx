import React from "react";
import { Text as T, TextStyle } from "react-native";
import { FontSizeConstants } from "../contants/fontSizeContants";

interface TextProps {
  children?: React.ReactNode;
  style?: TextStyle | TextStyle[];
  size?:
    | "xxxs"
    | "xs"
    | "sm"
    | "nm"
    | "md"
    | "lg"
    | "xlg"
    | "xl"
    | "xxl"
    | "xxxl"
    | number;
  bold?: boolean;
  italic?: boolean;
  textAlign?: "center" | "left" | "right";
  color?: string;
  underline?: boolean;
  value?: string;
}

/**
 * @author Kennex666
 * @version 1.0.0
 * @description
 * Text component with custom font size, bold, italic, textAlign, color, underline, and value props.
 * @param children - Text content.
 * @param style - Custom style overrides.
 * @param size - Font size or predefined size string.
 * @param bold - Bold text.
 * @param italic - Italic text.
 * @param textAlign - Text alignment.
 * @param color - Text color.
 * @param underline - Underline text.
 * @param value - Text value.
 * @returns Text component.
 * @example
 * ```tsx
 * <Text size="lg" bold color="red">Hello, World!</Text>
 * ```
 */
const Text = React.memo(
  React.forwardRef<T, TextProps>(
    (
      {
        children,
        style = {},
        size = "nm",
        bold = false,
        italic = false,
        textAlign = "left",
        color = undefined,
        underline = false,
        value = "",
        ...props
      }: TextProps,
      ref
    ) => {
      return (
        <T
          ref={ref}
          style={[
            {
              fontSize:
                typeof size === "number"
                  ? size
                  : FontSizeConstants[size] ?? FontSizeConstants.nm,
              fontWeight: bold ? "bold" : undefined,
              fontStyle: italic ? "italic" : undefined,
              textAlign,
              color,
              textDecorationLine: underline ? "underline" : undefined,
              // fontFamily: "AvenirNextLTPro", // Uncomment if needed
            },
            style,
          ]}
          {...props}
        >
          {children ?? value ?? ""}
        </T>
      );
    }
  )
);

export default Text;
