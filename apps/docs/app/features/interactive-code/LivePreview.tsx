import { Box, BoxProps } from "@vygruppen/spor-react";
import { LivePreview as ReactLivePreview } from "react-live";

export const LivePreview = (props: BoxProps) => {
  return (
    <Box
      borderRadius="sm"
      border="sm"
      borderColor="alias.osloGrey"
      p={24}
      {...props}
    >
      {/** @ts-ignore Bad typing in React Live */}
      <ReactLivePreview Component={Box} width="100%" />
    </Box>
  );
};
