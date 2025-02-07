import { Box, BoxProps, useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";

export type BaseAlertProps = BoxProps & {
  /** The color scheme and icon of the alert */
  variant: "info" | "success" | "warning" | "alt-transport" | "error";
  /** The body content of the alert */
  children: React.ReactNode;
};

/**
 * A base alert box component. Should only be composed by other alert components.
 */
export const BaseAlert = ({ variant, children, ...boxProps }: BaseAlertProps) => {
  const styles = useMultiStyleConfig("Alert", { variant });
  return (
    <Box sx={styles.container} {...boxProps}>
      {children}
    </Box>
  );
};
