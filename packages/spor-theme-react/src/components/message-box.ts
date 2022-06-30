import { MenuDescendantsProvider } from "@chakra-ui/react";
import type {
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  padding: 2,
  borderRadius: "md",
  textAlign: "left",
  maxWidth: "339px",
  height: 8,
};

const variantSuccess: SystemStyleFunction = (props) => {
  return {
    backgroundColor: "alias.seaMist",
  };
};

const variantError: SystemStyleFunction = (props) => {
  return {
    backgroundColor: "alias.lightRed",
  };
};
const variantInfo: SystemStyleFunction = (props) => {
  return {
    backgroundColor: "alias.lightBlue",
  };
};

const variants = {
  suksess: variantSuccess,
  error: variantError,
  info: variantInfo,
};

const defaultProps = {
  variant: "suksess",
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
