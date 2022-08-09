import { IconData } from "./generate";

export const typeDefinitionTemplate = (iconsData: IconData[]) => {
  return `
// This file was auto-generated.
// Please do not change this file directly.
import type { BoxProps } from "@vygruppen/spor-layout-react-native";
import type { ForwardRefExoticComponent } from "react";

declare module "@vygruppen/spor-icon-react-native" {
  type IconProps = BoxProps & { color?: string };
  export type IconComponent = ForwardRefExoticComponent<IconProps>;

  ${iconsData
    .map(({ componentName }) => `export const ${componentName}: IconComponent;`)
    .join("\n  ")}
}
`;
};
