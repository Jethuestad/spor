import React from "react";
import { useStyleConfig, Box, Flex } from "@chakra-ui/react";
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
      <Flex alignItems="center">
        {getIcon({ variant: props.variant })}
        {props.children}
      </Flex>
    </Box>
  );
};

type IconProps = {
  variant: MessageBoxProps["variant"];
};

function getIcon(props: IconProps) {
  const iconNames = {
    suksess: <SuccessOutline18Icon />,
    error: <ErrorOutline18Icon />,
    info: <InformationOutline18Icon />,
  };
  return <Box mr={1.5}>{iconNames[props.variant]}</Box>;
}
