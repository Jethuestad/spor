import {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const choiceChipAnatomy = {
  __type: "ChoiceChip",
  keys: ["container", "label", "icon"],
};

const containerStyle: SystemStyleFunction = (props) => ({
  backgroundColor: "alias.white",
  boxShadow: `0 0 0 1px ${colors.alias.celadon}`,
  color: "alias.darkTeal",
  display: "inline-flex",
  alignItems: "center",
  fontSize: "1rem",
  px: 6,
  _checked: {
    background: "alias.seaMist",
    boxShadow: `0 0 0 1px ${colors.alias.celadon}`,
  },
  "input:focus-visible + &": {
    boxShadow: `0 0 0 2px ${colors.alias.greenHaze}`,
  },
  "@media (hover:hover)": {
    _hover: {
      boxShadow: `0 0 0 2px ${colors.alias.greenHaze}`,
      background: "alias.mint",
      cursor: "pointer",
    },
  },
});

const iconStyle: SystemStyleFunction = (props) => ({
  mr: props.hasLabel ? 6 : 0,
});

const labelStyle: SystemStyleObject = {};

const baseStyle: PartsStyleFunction<typeof choiceChipAnatomy> = (props) => ({
  container: containerStyle(props),
  icon: iconStyle(props),
  label: labelStyle,
});

const sizes: Record<string, PartsStyleObject<typeof choiceChipAnatomy>> = {
  sm: {
    container: {
      borderRadius: "15px",
      height: "30px",
      px: 9,
    },
  },
  md: {
    container: {
      borderRadius: "18px",
      height: 36,
      px: 12,
    },
  },
  lg: {
    container: {
      borderRadius: "21px",
      height: 42,
      px: 12,
    },
  },
  xl: {
    container: {
      borderRadius: "27px",
      height: 54,
      px: 18,
    },
  },
};

const defaultProps = {
  size: "md",
};

export default {
  parts: choiceChipAnatomy.keys,
  baseStyle,
  sizes,
  defaultProps,
};
