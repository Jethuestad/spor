import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import {
  PortableText,
  PortableTextComponentsProvider as SanityPortableTextComponentsProvider,
  PortableTextReactComponents,
} from "@portabletext/react";
import { Link } from "@remix-run/react";
import {
  Box,
  Button,
  Code,
  Divider,
  FavouriteOutline30Icon,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  SuccessFill24Icon,
  Table,
  Tbody,
  Td,
  Text,
  TextLink,
  Th,
  Thead,
  Tr,
} from "@vygruppen/spor-react";
import React from "react";
import { urlBuilder } from "~/utils/sanity/utils";
import { CodeBlock } from "../code-block/CodeBlock";
import { InteractiveCode } from "../interactive-code/InteractiveCode";
import { LinkableHeading } from "../linkable-heading/LinkableHeading";

const components: Partial<PortableTextReactComponents> = {
  marks: {
    code: ({ children }) => <Code>{children}</Code>,
    link: ({ value, children }) => {
      const isInternal = value.href.startsWith("/");
      if (isInternal) {
        return (
          <TextLink variant="primary" as={Link} to={value.href}>
            {children}
          </TextLink>
        );
      }
      return (
        <TextLink variant="primary" href={value.href}>
          {children}
        </TextLink>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <LinkableHeading as="h2" textStyle="lg" fontWeight="bold" mt={54} mb={-6}>
        {children}
      </LinkableHeading>
    ),
    h3: ({ children }) => (
      <LinkableHeading
        as="h3"
        textStyle="md"
        fontWeight="bold"
        mt={54}
        mb={-12}
      >
        {children}
      </LinkableHeading>
    ),
    h4: ({ children }) => (
      <LinkableHeading as="h4" textStyle="sm" fontWeight="bold" mt={12}>
        {children}
      </LinkableHeading>
    ),
    h5: ({ children }) => (
      <LinkableHeading as="h5" textStyle="xs" fontWeight="bold" mt={12}>
        {children}
      </LinkableHeading>
    ),
    h6: ({ children }) => (
      <LinkableHeading as="h6" textStyle="xs" mt={12}>
        {children}
      </LinkableHeading>
    ),
    normal: ({ children }) => {
      const arrayChildren = React.Children.toArray(children);
      if (!arrayChildren.length || arrayChildren.join("") === "") {
        return null;
      }
      return (
        <Text textStyle="sm" mt={18}>
          {children}
        </Text>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <UnorderedList pl={18} mt={0} textStyle="sm">
        {children}
      </UnorderedList>
    ),
    number: ({ children }) => (
      <OrderedList pl={18} mt={0} textStyle="sm">
        {children}
      </OrderedList>
    ),
  },
  listItem: ({ children }) => <ListItem mt={6}>{children}</ListItem>,
  types: {
    buttonLink: ({ value }) => {
      const isInternal = value.url.startsWith("/");
      const linkProps: any = isInternal
        ? { as: Link, to: value.url }
        : { as: "a", href: value.url };
      return (
        <Box mt={18}>
          <Button variant={value.variant} size={value.size} {...linkProps}>
            {value.text}
          </Button>
        </Box>
      );
    },
    divider: () => <Divider height="1px" my={54} />,
    introduction: ({ value }) => {
      return (
        <Stack spacing={18}>
          <PortableText
            value={value.content}
            components={{
              block: {
                normal: ({ children }) => (
                  <Text textStyle="md">{children}</Text>
                ),
              },
            }}
          />
        </Stack>
      );
    },
    grid: ({ value }) => (
      <SimpleGrid columns={[1, 2, value.maxNumberOfColumns]} gap={36} mt={54}>
        {value.content.map((item: any) => (
          <PortableText value={item} key={item._key} />
        ))}
      </SimpleGrid>
    ),
    gridCell: ({ value }) => {
      const alignmentMap = {
        top: "flex-start",
        center: "center",
        bottom: "flex-end",
      };
      const alignItems =
        alignmentMap[value.verticalAlignment as keyof typeof alignmentMap] ??
        "flex-start";
      return (
        <Flex justifyContent="center" alignItems={alignItems}>
          <Box>
            <PortableText value={value.content} />
          </Box>
        </Flex>
      );
    },
    imageWithCaption: ({ value }) => {
      const [, , dimensions] = value.image.asset._ref.split("-");
      const aspectRatio = dimensions.split("x").join(" / ");
      return (
        <Box>
          {value.image && (
            <Box>
              <Image
                src={urlBuilder
                  .image(value.image)
                  .width(924)
                  .fit("max")
                  .auto("format")
                  .url()}
                alt={value.alt || ""}
                mx="auto"
                mt={12}
                __css={{ aspectRatio }}
              />
            </Box>
          )}
          {value.caption && (
            <Stack textStyle="xs" color="alias.dimGrey" mt={-6}>
              <PortableText value={value.caption} />
            </Stack>
          )}
        </Box>
      );
    },
    image: ({ value }) => {
      const [, , dimensions] = value.image.asset._ref.split("-");
      const aspectRatio = dimensions.split("x").join(" / ");
      return (
        <Image
          src={urlBuilder
            .image(value.image)
            .width(924)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt}
          mx="auto"
          mt={12}
          __css={{ aspectRatio }}
        />
      );
    },
    codeExample: ({ value }) =>
      value.layout === "code-only" ? (
        <CodeBlock mt={36} language="jsx" code={value.reactCode.code} />
      ) : (
        <InteractiveCode
          layout={value.layout}
          mt={18}
          maxWidth={`calc(100vw - var(--spor-space-36))`}
          code={value.reactCode.code}
        />
      ),
    component: ({ value }) => (
      <Box key={value.name} mt={36} as="article">
        <LinkableHeading as="h3" textStyle="md" fontWeight="bold" mb={-12}>
          {`<${value.name} />`}
        </LinkableHeading>
        <Box mt={6}>
          <PortableText value={value.content} />
        </Box>
        {value.props && (
          <>
            <Heading as="h4" textStyle="md" mt={18}>
              Props
            </Heading>
            <Table
              variant="outline"
              mt={18}
              maxWidth={`calc(100vw - var(--spor-space-36))`}
            >
              <Thead>
                <Tr>
                  <Th>Navn</Th>
                  <Th>Type</Th>
                  <Th>Påkrevd?</Th>
                  <Th>Beskrivelse</Th>
                </Tr>
              </Thead>
              <Tbody>
                {value.props.map((prop: any) => (
                  <Tr key={prop.name}>
                    <Td>
                      <Code>{prop.name}</Code>
                    </Td>
                    <Td>
                      <Code>
                        {prop.type === "other" ? prop.typeOther : prop.type}
                      </Code>
                    </Td>
                    <Td>
                      {prop.isRequired && (
                        <SuccessFill24Icon aria-label="Påkrevd" mx="auto" />
                      )}
                    </Td>
                    <Td>{prop.description}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        )}
      </Box>
    ),
    imports: ({ value }) => <CodeBlock code={value.reactImport} mt={18} />,
    tipsPanel: ({ value }) => (
      <Box
        as="article"
        backgroundColor="alias.mint"
        mt={18}
        p={24}
        borderRadius="md"
      >
        <Flex gap={6} alignItems="end">
          <FavouriteOutline30Icon />
          <Heading as="h3" textStyle="sm" fontWeight="bold">
            {value.title}
          </Heading>
        </Flex>
        <Box __css={{ " > p:first-of-type": { mt: 6 } }}>
          <PortableText value={value.content} />
        </Box>
      </Box>
    ),
  },
};

type PortableTextProps = { children: React.ReactNode };
export const PortableTextProvider = ({ children }: PortableTextProps) => {
  return (
    <SanityPortableTextComponentsProvider components={components}>
      {children}
    </SanityPortableTextComponentsProvider>
  );
};
