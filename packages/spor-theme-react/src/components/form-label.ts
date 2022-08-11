import type { SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  fontSize: "mobile.sm",
  marginEnd: 18,
  mb: 12,
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4,
  },
};

export default {
  baseStyle,
};
