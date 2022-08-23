import React, { useState } from "react";
import { variantStyling } from "./stylingLink";
import { LinkProps } from "./types";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Linking, Pressable } from "react-native";
import { Text } from "@vygruppen/spor-typography-react-native";

export const Link = ({
  variant,
  size,
  children,
  accessibilityLabel,
  url,
}: LinkProps) => {
  const styles = variantStyling[variant];
  return (
    <Box
      backgroundColor={styles.backgroundColor}
      flexDirection="row"
      justifyContent="center"
      style={{ borderRadius: containerRadii[size] }}
      padding={2}
    >
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={accessibilityLabel}
        style={{ borderRadius: containerRadii[size] }}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        {children && <Text color="darkGrey">{children}</Text>}
      </Pressable>
    </Box>
  );
};

const containerRadii = { sm: 0.5, md: 1, lg: 1 } as const;
const [isPressed, setIsPressed] = useState(false);
