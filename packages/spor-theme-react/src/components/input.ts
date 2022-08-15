import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import type { PartsStyleFunction } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  field: {
    appearance: "none",
    width: "100%",
    outline: "none",
    border: 0,
    backgroundColor: "alias.white",
    borderRadius: "sm",
    transitionProperty: "common",
    transitionDuration: "fast",
    position: "relative",
    px: 18,
    height: 8,
    fontSize: "18px",

    boxShadow: `inset 0 0 0 1px ${colors.outline.darkGrey}`,
    _hover: {
      boxShadow: `inset 0 0 0 2px ${colors.outline.darkGrey}`,
    },
    _focus: {
      boxShadow: `inset 0 0 0 2px ${colors.outline.greenHaze}`,
    },
    _disabled: {
      boxShadow: `inset 0 0 0 1px ${colors.alias.platinum}`,
      _hover: { boxShadow: `inset 0 0 0 1px ${colors.alias.platinum}` },
      _focus: { boxShadow: `inset 0 0 0 1px ${colors.alias.platinum}` },
    },
    _invalid: {
      boxShadow: `inset 0 0 0 2px ${colors.error.brightRed}`,
      _hover: {
        boxShadow: `inset 0 0 0 2px ${colors.outline.darkGrey}`,
      },
      _focus: {
        boxShadow: `inset 0 0 0 2px ${colors.outline.greenHaze}`,
      },
    },
    " + label": {
      fontSize: ["mobile.sm", "desktop.sm"],
      top: "2px",
      left: props.paddingLeft || props.pl || 3,
      zIndex: 2,
      position: "absolute",
      my: 12,
      transition: ".1s ease-out",
      transformOrigin: "top left",
    },
    "&:not(:placeholder-shown)": {
      pt: "1rem",
      "& + label": {
        transform: "scale(0.825) translateY(-10px)",
      },
    },
  },
  element: {
    height: "100%",
  },
});

export default {
  parts: parts.keys,
  baseStyle,
};
