import { Box } from "@vygruppen/spor-react";
import { SearchableContentMenu } from "~/features/content-menu/SearchableContentMenu";

export const LeftSidebar = () => {
  return (
    <Box
      display={["none", "none", "block"]}
      as="nav"
      aria-label="content"
      flex="1"
      maxWidth="340px"
      px={9}
      py={12}
      borderRight="0.5625rem solid"
      borderRightColor="alias.lightGrey"
    >
      <SearchableContentMenu />
    </Box>
  );
};
