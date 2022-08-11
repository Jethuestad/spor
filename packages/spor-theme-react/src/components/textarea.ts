import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import Input from "./input";

const baseStyle: SystemStyleFunction = (props) => ({
  ...Input.baseStyle(props).field,
  minHeight: "5rem",
  lineHeight: "short",
  py: 18,
  verticalAlign: "top",
  appearance: "none",
});

export default {
  baseStyle,
};
