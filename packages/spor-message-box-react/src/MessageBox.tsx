import React from "react";
import { useStyleConfig, Box } from "@chakra-ui/react";
import {
  InformationOutline18Icon,
  SuccessOutline18Icon,
  ErrorOutline18Icon,
} from "@vygruppen/spor-icon-react";

type MessageBoxProps = {
  children: string;
  variant: "suksess" | "error" | "info";
  onClick?: () => void;
};

export const MessageBox = (props: MessageBoxProps) => {
  const styles = useStyleConfig("MessageBox", { variant: props.variant });
  return (
    <Box __css={styles}>
      {getIcon({ variant: props.variant })}
      {props.children}
    </Box>
  );
};

type iconProps = {
  variant: "suksess" | "error" | "info";
};

function getIcon(props: iconProps) {
  const iconNames = {
    suksess: <SuccessOutline18Icon />,
    error: <ErrorOutline18Icon />,
    info: <InformationOutline18Icon />,
  };
  return <div>{iconNames[props.variant]}</div>;
}
