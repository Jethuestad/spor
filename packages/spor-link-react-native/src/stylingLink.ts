import { Theme } from "@vygruppen/spor-theme-react-native";
import { Variant } from "./types";

type VariantStyling = {
  fontSize: "sm" | "md" | "lg";
  backgroundColor: keyof Theme["colors"];
  color: keyof Theme["colors"];
  borderColor?: keyof Theme["colors"];
};

export const variantStyling: Record<Variant, VariantStyling> = {
  primary: {
    fontSize: "sm",
    backgroundColor: "mint",
    color: "pine",
  },
  secondary: {
    fontSize: "md",
    backgroundColor: "mint",
    color: "darkGrey",
  },
  tertiary: {
    fontSize: "lg",
    backgroundColor: "whiteAlpha.400",
    color: "white",
  },
};
