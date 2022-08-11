/* import React from 'react';
import { Text } from 'react-native';

type LinkProps = {};
export const Link = (props: LinkProps) => {
  return <Text>Hi there</Text>;
}; */

import React, { useState } from "react";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import {
  SpacingProps,
  SpacingShorthandProps,
  VariantProps,
  createVariant,
  useRestyle,
  composeRestyleFunctions,
  spacing,
  spacingShorthand,
  useTheme,
} from "@shopify/restyle";
import { TouchableOpacity, View } from "react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Button } from "@vygruppen/spor-react";

type Variant = VariantProps<Theme, "linkVariants", "variant">;
const variant = createVariant({
  themeKey: "linkVariants",
});

type RestyleProps = SpacingProps<Theme> & Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  variant,
]);

type LinkVariant = "primary" | "secondary" | "tertiary";
type LinkProps = BaseProps;

type BaseProps = Exclude<RestyleProps, "variant"> & {
  variant: LinkVariant;
  children: string;
};

export const Link = (props: LinkProps) => {
  const { variant, children, ...rest } = props;
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...rest,
  });

  return (
    <Text style={style as any} {...rest} onPress={props.handlePress}>
{children}
    </Text>
  );
};
