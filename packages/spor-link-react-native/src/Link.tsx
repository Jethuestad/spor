import React, { useState } from "react";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
import {
  SpacingProps,
  VariantProps,
  createVariant,
  useRestyle,
  composeRestyleFunctions,
  spacing,
  useTheme,
} from "@shopify/restyle";
import { Linking, Pressable, StyleProp, ViewStyle } from "react-native";

const variant = createVariant({
  themeKey: "linkVariants",
  property: "variant",
});

type Variant = VariantProps<Theme, "linkVariants", "variant"> &
  VariantProps<Theme, "linkSizes", "size">;

const sizes = createVariant({ themeKey: "linkSizes", property: "size" });

type RestyleProps = SpacingProps<Theme> & Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  variant,
  sizes,
]);

type LinkVariant = "primary" | "secondary" | "tertiary";

type LinkProps = Exclude<RestyleProps, "variant"> & {
  variant: LinkVariant;
  children: string;
  accessibilityLabel?: string;
  url: string;
  style?: StyleProp<ViewStyle>;
};

function openLink(url: string) {
  Linking.openURL(url);
}

export const Link = ({
  variant,
  children,
  accessibilityLabel,
  style,
  url,
  ...props
}: LinkProps) => {
  const theme = useTheme<Theme>();
  const restyleProps: Record<string, any> = { ...props, variant };
  const { style: restyleStyle } = useRestyle(restyleFunctions, restyleProps);
  const [isPressed, setIsPressed] = useState(false);
  const activeStyle = theme.getLinkVariantActivedState(variant);

  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={accessibilityLabel}
      onPress={() => openLink(url)}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={isPressed ? activeStyle : activeStyle}
    >
      <Text style={[restyleStyle as any, style]}>{children}</Text>
    </Pressable>
  );
};
