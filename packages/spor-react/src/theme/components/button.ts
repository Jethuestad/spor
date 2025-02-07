import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const config = defineStyleConfig({
  baseStyle: {
    border: 0,
    borderRadius: "xl",
    fontWeight: "bold",
    transitionProperty: "common",
    transitionDuration: "normal",
    px: 3,
    _focus: {
      boxShadow: 0,
      outline: 0,
    },
    _disabled: {
      cursor: "not-allowed",
      boxShadow: "none",
      backgroundColor: "silver",
      color: "dimGrey",
    },
    _hover: {
      _disabled: {
        background: "silver",
      },
    },
  },
  variants: {
    control: {
      backgroundColor: "darkTeal",
      color: "white",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${colors.darkTeal}, inset 0 0 0 6px currentColor`,
        },
        notFocus: { boxShadow: "none" },
      }),
      _hover: {
        backgroundColor: "night",
      },
      _active: {
        backgroundColor: "pine",
      },
    },
    primary: {
      backgroundColor: "primaryGreen",
      color: "white",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${colors.primaryGreen}, inset 0 0 0 4px ${colors.primaryGreen}, inset 0 0 0 6px currentColor`,
        },
        notFocus: { boxShadow: "none" },
      }),
      _hover: {
        backgroundColor: "pine",
      },
      _active: {
        backgroundColor: "azure",
      },
    },
    secondary: {
      backgroundColor: "coralGreen",
      color: "darkTeal",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${colors.coralGreen}, inset 0 0 0 4px ${colors.coralGreen}, inset 0 0 0 6px currentColor`,
        },
        notFocus: {
          boxShadow: "none",
        },
      }),
      _hover: {
        backgroundColor: "blueGreen",
      },
      _active: {
        backgroundColor: "mint",
      },
    },
    tertiary: {
      backgroundColor: "mint",
      color: "darkGrey",
      fontWeight: "normal",
      ...focusVisible({
        focus: {
          boxShadow: `inset 0 0 0 4px ${colors.mint}, inset 0 0 0 4px ${colors.mint}, inset 0 0 0 6px currentColor`,
        },
        notFocus: { boxShadow: "none" },
      }),
      _hover: {
        backgroundColor: "seaMist",
      },
      _active: {
        backgroundColor: "lightGrey",
      },
    },
    additional: (props) => ({
      backgroundColor: "transparent",
      color: mode("darkGrey", "white")(props),
      fontWeight: "normal",
      boxShadow: `inset 0 0 0 1px ${mode(
        colors.blackAlpha[400],
        colors.whiteAlpha[400]
      )(props)}`,
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderWidth: 3,
            borderColor: "greenHaze",
          }),
        },
        notFocus: {
          boxShadow: `inset 0 0 0 1px ${mode(
            colors.blackAlpha[400],
            colors.whiteAlpha[400]
          )(props)}`,
        },
      }),
      _hover: {
        boxShadow: `inset 0 0 0 2px currentColor`,
      },
      _active: {
        boxShadow: `inset 0 0 0 1px ${mode(
          colors.blackAlpha[400],
          colors.whiteAlpha[300]
        )(props)}`,
        backgroundColor: mode("mint", "whiteAlpha.300")(props),
      },
    }),
    ghost: (props) => ({
      backgroundColor: "transparent",
      color: mode("darkGrey", "white")(props),
      fontWeight: "normal",
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: mode("greenHaze", "azure")(props),
            borderWidth: 2,
          }),
        },
        notFocus: {
          outline: "none",
        },
      }),
      _hover: {
        backgroundColor: mode("seaMist", "pine")(props),
        _disabled: {
          color: "blackAlpha.300",
        },
      },
      _active: {
        backgroundColor: mode("mint", "whiteAlpha.300")(props),
      },
    }),
    floating: {
      backgroundColor: "white",
      boxShadow: "sm",
      _active: {
        backgroundColor: "mint",
      },
      _hover: {
        boxShadow: "md",
      },
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
            borderWidth: 2,
            baseShadow: "sm",
          }),
          _hover: {
            boxShadow: getBoxShadowString({
              borderColor: "greenHaze",
              borderWidth: 2,
              baseShadow: "md",
            }),
          },
        },
        notFocus: {
          outline: "none",
          boxShadow: "sm",
        },
      }),
    },
  },
  sizes: {
    lg: {
      minHeight: 8,
      minWidth: 8,
      fontSize: "18px",
    },
    md: {
      minHeight: 7,
      minWidth: 7,
      fontSize: "18px",
    },
    sm: {
      minHeight: 6,
      minWidth: 6,
      fontSize: "16px",
    },
    xs: {
      minHeight: 5,
      minWidth: 5,
      fontSize: "16px",
      px: 2,
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});

export default config;
