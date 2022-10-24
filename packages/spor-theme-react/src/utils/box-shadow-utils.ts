import { colors } from "../foundations/colors";
import { shadows } from "../foundations/shadows";

type GetBoxShadowStringArgs = {
  baseShadow?: keyof typeof shadows;
  borderColor?: keyof typeof colors | string;
  borderWidth?: number;
  isInset?: boolean;
};
/**
 * A utility for creating box shadow strings
 */
export const getBoxShadowString = ({
  baseShadow,
  borderColor,
  borderWidth = 1,
  isInset = true,
}: GetBoxShadowStringArgs) => {
  const allShadows: string[] = [];

  if (borderColor) {
    let color = borderColor;
    if (borderColor in colors) {
      color = colors[borderColor as keyof typeof colors] as string;
    }
    allShadows.push(
      `${isInset ? "inset " : ""}0 0 0 ${borderWidth}px ${color}`
    );
  }
  if (baseShadow) {
    allShadows.push(shadows[baseShadow]);
  }
  return allShadows.join(", ");
};
