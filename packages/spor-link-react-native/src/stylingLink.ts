
 export type GetStylesArgs = {
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "md" | "lg";
  isPressed: boolean;
};

function getStyles(args: GetStylesArgs) {
  return deepMerge(baseStyle(args), variantStyles(args), sizeStyles(args));
}

function deepMerge(
  ...objectsToMerge: Record<string, Record<string, unknown>>[]
) {
  const result: Record<string, Record<string, unknown>> = {};
  for (let object of objectsToMerge) {
    for (let property in object) {
      result[property] = { ...result[property], ...object[property] };
    }
  }
  return result;
}

const baseStyle = ({ isPressed }: GetStylesArgs) => {
  return {
    container: {
      color: "darkGrey",
      borderRadius: "sm",
      spacing: "sm",
      backgroundColor: isPressed ? "alias.darkTeal" : "transparent",
    },

    text: {
      fontWeight: "normal",
    },
  };
};

const variantStyles = ({ isPressed, variant }: GetStylesArgs) => {
  switch (variant) {
    case "primary":
      return {
        container: {
          backgroundColor: isPressed ? "alias.primaryGreen" : "alias.mint",
          color: "pine",
        },
        text: {
          fontWeight: "normal",
        },
      };
    case "secondary":
      return {
        container: {
          backgroundColor: isPressed ? "alias.coralGreen" : "transparent",
          color: "darkTeal",
        },
        text: {
          fontWeight: "normal",
        },
      };
    case "tertiary":
      return {
        container: {
          backgroundColor: isPressed ? "whiteAlpha.400" : "transparent",
          color: "white",
        },
        text: {
          fontWeight: "normal",
        },
      };
    default:
      throw Error(`Unknown variant "${variant}"`);
  }
};

const sizeStyles = ({ isPressed, size }: GetStylesArgs) => {
  switch (size) {
    case "sm":
      return {
        container: {
          px: 1.5,
          backgroundColor: isPressed ? "alias.alpha" : "transparent",
        },
        text: {
          fontWeight: "normal",
        },
      };
    case "md":
      return {
        container: {
          px: 1.5,
          backgroundColor: isPressed ? "alias.alpha" : "transparent",
        },
        text: {
          fontWeight: "normal",
        },
      };
    case "lg":
      return {
        container: {
          px: 1.5,
          backgroundColor: isPressed ? "alias.alpha" : "transparent",
        },
        text: {
          fontWeight: "normal",
        },
      };
    default:
      throw new Error(`Unknown size "${size}"`);
  }
};
