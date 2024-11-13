import React, { useMemo } from "react";
import { TouchableOpacity, View as V } from "react-native";

interface StackProps {
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  alignSelf?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  style?: any;
  children: React.ReactNode;
  onPress?: () => void | null | undefined;
  onLongPress?: () => void | null | undefined;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
  backgroundColor?: string;
  flex?: number;
}

export default function Stack({
  justifyContent = "flex-start",
  alignItems = "stretch",
  alignSelf = "stretch",
  flexDirection = "column",
  gap = 0,
  rowGap = 0,
  columnGap = 0,
  style = {},
  onPress = undefined,
  onLongPress = undefined,
  disabled = false,
  children,
  width,
  height,
  backgroundColor,
  flex,
  ...props
}: StackProps): JSX.Element {
  const styleCustom = useMemo(
    () => ({
      display: "flex",
      flexDirection: flexDirection ?? "column",
      justifyContent: justifyContent ?? "flex-start",
      alignItems: alignItems ?? "stretch",
      alignSelf: alignSelf ?? "stretch",
      gap: gap ?? 0,
      rowGap: rowGap ?? 0,
      columnGap: columnGap ?? 0,
      width: width ?? "auto",
      height: height ?? "auto",
      backgroundColor: backgroundColor ?? "transparent",
      flex: flex ?? 0,
      ...style,
    }),
    [
      flexDirection,
      justifyContent,
      alignItems,
      alignSelf,
      gap,
      rowGap,
      columnGap,
      width,
      height,
      backgroundColor,
      flex,
      style,
    ]
  );

  const TouchableWrapper = onPress || onLongPress ? TouchableOpacity : V;
  const touchableProps =
    onPress || onLongPress ? { onPress, onLongPress, disabled } : {};

  return (
    <TouchableWrapper style={styleCustom} {...touchableProps} {...props}>
      {children}
    </TouchableWrapper>
  );
}

export const View = React.memo(Stack);
