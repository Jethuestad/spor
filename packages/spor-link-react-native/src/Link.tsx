import React, { useState } from "react";
import { LinkProps } from "./types";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Pressable } from "react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import {getStyles} from "../src/stylingLink"

export const Link = ((props: LinkProps) => {
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

});



