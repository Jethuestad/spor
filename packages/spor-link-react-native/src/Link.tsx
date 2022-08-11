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
import { Linking, Pressable } from "react-native";

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
type LinkProps = BaseProps & ActionProps;

type BaseProps = Exclude<RestyleProps, "variant"> & {
  variant: LinkVariant;
  children: string;
};

type ActionProps = WithURLProps;

type WithURLProps = {
  actionType: "button";
  handlePress?: () => void;
};

export const Link = (props: LinkProps) => {
  const { variant, children, actionType, handlePress, ...rest } = props;
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...rest,
  });

  const url = "https://spor.cloud.vy.no/komponenter/oversikt";

  return (
    <Pressable onPress={() => Linking.openURL(url)}>
      <Text style={style as any } {...rest}>
        {children}
      </Text>
    </Pressable>
  );
};
