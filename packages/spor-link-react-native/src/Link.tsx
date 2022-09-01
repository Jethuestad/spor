import React, { useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Pressable } from "react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import { getStyles } from "./stylingLink";
import type {LinkProps} from "./types"


export const Link = ({ variant, size,children,...rest }: LinkProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const styles = getStyles({variant, size, isPressed});
  
  return (
    <Box style={styles.container} {...rest}>
      <Pressable
      accessibilityRole="link"
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      {...rest}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </Box>
  );
};

