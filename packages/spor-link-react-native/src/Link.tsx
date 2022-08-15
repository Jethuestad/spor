import React, { useState } from "react";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import {
  SpacingProps,
  VariantProps,
  createVariant,
  useRestyle,
  composeRestyleFunctions,
  spacing,
  useTheme,
} from "@shopify/restyle";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { Box } from "@vygruppen/spor-layout-react-native";

const variant = createVariant({
  themeKey: "linkVariants",
  property: "variant",
});

type Variant = VariantProps<Theme, "linkVariants", "variant">;

type RestyleProps = SpacingProps<Theme> & Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  variant,
]);

type LinkVariant = "primary" | "secondary" | "tertiary";

type LinkProps = Exclude<RestyleProps, "variant"> & {
  variant: LinkVariant;
  children: string;
  onPress: () => void;
  defaultLinked?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Link = ({
  variant,
  children,
  onPress,
  defaultLinked = false,
  style,
  ...props
}: LinkProps) => {
  const restyleProps: Record<string, any> = { ...props, variant };
  const { style: restyleStyle } = useRestyle(restyleFunctions, restyleProps);
  const [isPressed, setIsPressed] = useState(false);
  const { linkVariantsActive } = useTheme();
  const activeStyle = isPressed ? linkVariantsActive[variant] : {};

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={isPressed ? activeStyle : { padding: 12 }}
    >
      <Text style={[restyleStyle as any, style]}>{children}</Text>
    </Pressable>
  );
};
