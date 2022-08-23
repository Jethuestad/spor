

export type Variant = "primary" | "secondary" | "tertiary";

export type Size = "sm" | "md" | "lg";

function openLink(url: string) {
  Linking.openURL(url);
}

export type LinkProps = {
  variant: Variant;
  size: Size;
  children?: string;
  accessibilityLabel?: string;
  url: string;
};
