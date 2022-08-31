import React, { useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Pressable } from "react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import { getStyles } from "./stylingLink";
import { Variant } from "framer-motion";

type LinkProps = {
  variant: Variant;
};

export const Link = ({ variant, ...rest }: LinkProps) => {
  const styles = getStyles[variant];
  return (
    <Box style={styles.container} {...rest}>
      <Pressable>
        <Text style={styles.text}></Text>
      </Pressable>
    </Box>
  );
};
/* export const Link = ((props: LinkProps) => {
const {
  variant = "primary",
  size = "md",
  accessibilityLabel,
  children,
  isPressed
} = props;

const styles = getStyles("Link", {
  size,
  variant, 
  accessibilityLabel,
  children,
  isPressed,
});

return (
  <Box style={styles.container}>
    <Pressable>
        <Text style={styles.text} accessibilityLabel={accessibilityLabel}>{children}</Text>
      </Pressable>
  </Box>
)

}); */
