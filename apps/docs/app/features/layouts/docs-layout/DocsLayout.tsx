import { Box, Flex } from "@vygruppen/spor-react";
import React from "react";
import TableOfContent from "~/features/table-of-contents/TableOfContents";
import { useHeadings } from "~/features/table-of-contents/useHeadings";
import { LeftSidebar } from "./left-sidebar/LeftSidebar";

type DocsLayoutProps = { children: React.ReactNode };
export const DocsLayout = ({ children }: DocsLayoutProps) => {
  const { headings, contentRef } = useHeadings();
  return (
    <Flex flex="1">
      <LeftSidebar />
      <Box
        as="main"
        flex="1"
        mt={36}
        mx={[18, 36, 90]}
        mb={["3.75rem", "7.5rem", "11.25rem"]}
        maxWidth="57.75rem"
        ref={contentRef}
      >
        {children}
      </Box>
      <TableOfContent headings={headings} />
    </Flex>
  );
};
