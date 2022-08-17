import { borderRadii } from "@vygruppen/spor-theme-react-native/src/foundations/borderRadii";
import { spacing } from "@vygruppen/spor-theme-react-native/src/foundations/spacing";

export const linkVariants = {
  defaults: {
    borderRadius: "none",
    pb: 2,
    textDecorationLine: "underline",
  },
  primary: {
    color: "pine",
  },
  secondary: {
    color: "darkGrey",
  },
  tertiary: {
    color: "white",
  },
};

export function getLinkVariantActivedState(
  variant: "primary" | "secondary" | "tertiary"
) {
  return {
    ...linkVariantsActive.default,
    ...linkVariantsActive[variant],
  };
}

export const linkVariantsActive = {
  default: {
    padding: spacing.sm,
    borderRadius: borderRadii.sm,
  },
  primary: {
    backgroundColor: "mint",
    color: "pine",
  },
  secondary: {
    color: "darkTeal",
    backgroundColor: "green.100",
  },
  tertiary: {
    color: "white",
    backgroundColor: "whiteAlpha.400",
  },
};

export const linkSizes = {
  sm: {
    fontSize: 16,
  },
  md: {
    fontSize: 18,
  },
  lg: {
    fontSize: 24,
  },
};

export const linkVariantsfocus = {};
