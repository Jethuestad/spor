import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyleContainer: SystemStyleObject = {
  border: "none",
  borderRadius: "sm",
};

const baseStyleButton: SystemStyleFunction = ({ theme }) => ({
  transitionProperty:
    "background-color, color, border-radius, box-shadow, opacity",
  transitionDuration: "normal",
  border: "none",
  borderRadius: "sm",
  display: "flex",
  justifyContent: "space-between",
  color: "darkGrey",
  textAlign: "left",
  _focus: {
    boxShadow: `inset 0 0 0 2px ${theme.colors.greenHaze}`,
  },
  ":focus:not(:focus-within)": {
    boxShadow: `inset 0 0 0 1px ${theme.colors.osloGrey}`,
  },
  _focusWithin: {
    boxShadow: `inset 0 0 0 2px ${theme.colors.greenHaze}`,
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
});

const baseStylePanel: SystemStyleObject = {
  pt: 2,
  pb: 5,
  borderBottomRadius: "sm",
};

const baseStyleIcon: SystemStyleObject = {
  fontSize: "1.25em",
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  container: baseStyleContainer,
  button: baseStyleButton(props),
  panel: baseStylePanel,
  icon: baseStyleIcon,
});

const variantList: PartsStyleFunction<typeof parts> = ({ theme }) => ({
  button: {
    boxShadow: "none",
    _hover: {
      backgroundColor: "seaMist",
    },
    _active: {
      backgroundColor: "mint",
      boxShadow: `inset 0 0 0 1px ${theme.colors.darkGrey}`,
    },
  },
});
const variantOutline: PartsStyleFunction<typeof parts> = ({ theme }) => ({
  container: {
    boxShadow: `inset 0 0 0 1px ${theme.colors.osloGrey}`,
  },
  button: {
    _expanded: {
      borderBottomRadius: "none",
    },
    _hover: {
      boxShadow: `inset 0 0 0 2px ${theme.colors.darkGrey}`,
    },
    _active: {
      backgroundColor: "mint",
      boxShadow: `inset 0 0 0 1px ${theme.colors.darkGrey}`,
    },
  },
});
const variantCard: PartsStyleObject<typeof parts> = {
  container: {
    boxShadow: "md",
  },
  button: {
    _expanded: {
      borderBottomRadius: "none",
    },
    _hover: {
      backgroundColor: "seaMist",
    },
    _active: {
      backgroundColor: "mint",
    },
  },
};

const variants = {
  list: variantList,
  outline: variantOutline,
  card: variantCard,
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    button: {
      fontSize: "desktop.xs",
      px: 2,
      py: 1,
    },
    panel: {
      px: 2,
    },
  },
  md: {
    button: {
      fontSize: "desktop.sm",
      px: 3,
      py: 1,
    },
    panel: {
      px: 3,
    },
  },
  lg: {
    button: {
      fontSize: "desktop.sm",
      px: 3,
      py: 2,
    },
    panel: {
      px: 3,
    },
  },
};

const defaultProps = {
  variant: "list",
  size: "md",
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
