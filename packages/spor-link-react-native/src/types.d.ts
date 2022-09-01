

/* function openLink(url: string) {
  Linking.openURL(url);
} */

export type LinkProps = {
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "md" | "lg";
  children?: string;
  accessibilityLabel?: string;
  isPressed: boolean
};
