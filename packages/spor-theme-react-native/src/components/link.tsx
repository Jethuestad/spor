import { theme } from "@vygruppen/spor-theme-react-native";

export const linkVariants = {
  defaults: {
    borderRadius: "none",
    pb: 2,
    textDecorationLine: "underline",
  },
  primary: {
    color: theme.colors.pine,
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
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadii.xs,
  },
  primary: {
    backgroundColor: "mint",
    color: theme.colors.pine,
  },
  secondary: {
    color: "darkTeal",
    backgroundColor: "mint",
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
