import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseContainer: SystemStyleObject = {
  _hover: {
    "input:enabled:not([aria-invalid]) + .chakra-checkbox__control": {
      backgroundColor: "white",
      borderColor: "greenHaze",
    },
    "input:enabled[aria-invalid] + .chakra-checkbox__control": {
      backgroundColor: "white",
      borderColor: "lightRed",
    },
    "input:enabled:checked:not([aria-invalid]) + .chakra-checkbox__control": {
      backgroundColor: "darkTeal",
      borderColor: "darkTeal",
    },
    "input:enabled:checked[aria-invalid] + .chakra-checkbox__control": {
      backgroundColor: "lightRed",
      borderColor: "lightRed",
    },
  },
};

const baseStyleControl: SystemStyleFunction = () => {
  return {
    width: 4,
    height: 4,
    transitionProperty: "background, border-color",
    transitionDuration: "normal",
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "darkGrey",
    borderRadius: "xs",
    color: "white",

    _checked: {
      backgroundColor: "primaryGreen",
      borderColor: "primaryGreen",
      color: "white",

      _focus: {
        backgroundColor: "greenHaze",
        borderColor: "blueGreen",
      },

      _disabled: {
        backgroundColor: "white",
        borderColor: "steel",
        color: "steel",
      },

      _invalid: {
        backgroundColor: "brightRed",
        borderColor: "brightRed",
      },
    },

    _disabled: {
      backgroundColor: "white",
      borderColor: "steel",
    },

    _focus: {
      backgroundColor: "white",
      borderColor: "greenHaze",
    },

    _invalid: {
      backgroundColor: "white",
      borderColor: "brightRed",
    },
  };
};

const baseStyleLabel: SystemStyleObject = {
  userSelect: "none",
  _disabled: { opacity: 0.4 },
};

const baseStyleIcon: SystemStyleObject = {
  fontSize: "1em",
  transitionProperty: "transform",
  transitionDuration: "normal",
  strokeWidth: "1.5px !important", // Required to make the default icon look correct
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  container: baseContainer,
  icon: baseStyleIcon,
  control: baseStyleControl(props),
  label: baseStyleLabel,
});

export default {
  parts: parts.keys,
  baseStyle,
};
