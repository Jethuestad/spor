export const buttonVariants = {
  defaults: {
    borderWidth: 0,
    borderRadius: "xl",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    paddingHorizontal: 18,
  },
  control: {
    backgroundColor: "darkTeal",
    color: "white",
  },
  primary: {
    backgroundColor: "primaryGreen",
    color: "white",
  },
  secondary: {
    backgroundColor: "coralGreen",
    color: "darkTeal",
  },
  tertiary: {
    backgroundColor: "mint",
    color: "darkGrey",
    fontWeight: "normal",
  },
  additional: {
    backgroundColor: "transparent",
    color: "darkGrey",
    fontWeight: "normal",
    borderWidth: 1,
    borderColor: "blackAlpha.400",
    borderStyle: "solid",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "darkGrey",
    fontWeight: "normal",
    paddingHorizontal: 0,
  },
};

export const buttonVariantsActive = {
  control: {
    backgroundColor: "#00685e",
  },
  primary: {
    backgroundColor: "#38b49e",
  },
  secondary: {
    backgroundColor: "#e5f4f1",
  },
  tertiary: {
    backgroundColor: "#F5F5F5",
  },
  additional: {
    backgroundColor: "#e5f4f1",
    borderColor: "#2b2b2c",
  },
  ghost: {
    backgroundColor: "#e5f4f1",
  },
};

export const buttonVariantsDisabled = {
  color: "#606568",
  backgroundColor: "#D7D8D9",
  borderWidth: 0,
};

export const buttonSizes = {
  defaults: {},
  lg: {
    height: 54,
    minWidth: 42,
    fontSize: 18,
  },
  md: {
    height: 42,
    minWidth: 42,
    fontSize: 18,
  },
  sm: {
    height: 36,
    minWidth: 36,
    fontSize: 16,
  },
  xs: {
    height: 30,
    minWidth: 30,
    fontSize: 16,
    paddingHorizontal: 12,
  },
};
