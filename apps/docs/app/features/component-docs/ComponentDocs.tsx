import { Heading, Stack, Text } from "@vygruppen/spor-react";

type ComponentDocsProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};
export const ComponentDocs = ({
  title,
  description,
  children,
}: ComponentDocsProps) => {
  return (
    <Stack spacing={24}>
      <Stack spacing={12}>
        <Heading as="h1" textStyle="xl-display">
          {title}
        </Heading>
        <Text textStyle="sm">{description}</Text>
      </Stack>
      <Stack spacing={54}>{children}</Stack>
    </Stack>
  );
};
