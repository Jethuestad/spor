import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import {
  PortableText,
  PortableTextReactComponents,
  PortableTextComponentsProvider as SanityPortableTextComponentsProvider,
} from "@portabletext/react";
import { Link } from "@remix-run/react";
import { FavouriteOutline30Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  Button,
  Code,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  TextLink,
} from "@vygruppen/spor-react";
import React from "react";
import { urlBuilder } from "~/utils/sanity/utils";
import { ComponentDocs } from "../../routes/_base.$category.$slug/component-docs/ComponentDocs";
import { ImageWithCaption } from "./ImageWithCaption";
import { LinkableHeading } from "./LinkableHeading";
import { CodeBlock } from "./code-block/CodeBlock";
import { InteractiveCode } from "./interactive-code/InteractiveCode";

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
      <LinkableHeading
        as="h2"
        variant="lg"
        fontWeight="bold"
        marginTop={6}
        marginBottom={2}
      >
        {children}
      </LinkableHeading>
    ),
    h3: ({ children }) => (
      <LinkableHeading
        as="h3"
        variant="md"
        fontWeight="bold"
        marginTop={6}
        marginBottom={1}
      >
        {children}
      </LinkableHeading>
    ),
    h4: ({ children }) => (
      <Heading as="h4" variant="sm" fontWeight="bold" marginTop={4}>
        {children}
      </Heading>
    ),
    h5: ({ children }) => (
      <Heading as="h5" variant="xs" fontWeight="bold" marginTop={4}>
        {children}
      </Heading>
    ),
    h6: ({ children }) => (
      <Heading as="h6" variant="xs" marginTop={2}>
        {children}
      </Heading>
    ),
    normal: ({ children }) => {
      const arrayChildren = React.Children.toArray(children);
      if (!arrayChildren.length || arrayChildren.join("") === "") {
        return null;
      }
      return (
        <Text
          variant="sm"
          sx={{
            "& + &": {
              marginTop: 3,
            },
            "figure + &": {
              marginTop: 6,
            },
          }}
        >
          {children}
        </Text>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <UnorderedList
        paddingLeft={3}
        marginTop={0}
        marginBottom={3}
        variant="sm"
      >
        {children}
      </UnorderedList>
    ),
    number: ({ children }) => (
      <OrderedList paddingLeft={3} marginTop={0} marginBottom={3} variant="sm">
        {children}
      </OrderedList>
    ),
  },
  listItem: ({ children }) => (
    <ListItem marginTop={0.5} textStyle="sm">
      {children}
    </ListItem>
  ),
  types: {
    buttonLink: ({ value }) => {
      const isInternal = value.url.startsWith("/");
      const linkProps: any = isInternal
        ? { as: Link, to: value.url }
        : { as: "a", href: value.url };
      return (
        <Box marginTop={3}>
          <Button variant={value.variant} size={value.size} {...linkProps}>
            {value.text}
          </Button>
        </Box>
      );
    },
    divider: () => <Divider height="1px" my={8} />,
    grid: ({ value }) => (
      <SimpleGrid
        columns={[1, 2, value.maxNumberOfColumns]}
        gap={6}
        marginTop={6}
      >
        {value.content?.map((item: any) => (
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
          <Box sx={{ "& > :first-child": { marginTop: 0 } }}>
            <PortableText value={value.content} />
          </Box>
        </Flex>
      );
    },
    imageWithCaption: ({ value }) => {
      const [, , dimensions] = value.image.asset?._ref.split("-");
      const aspectRatio = dimensions.split("x").join(" / ");

      return (
        <ImageWithCaption
          src={urlBuilder
            .image(value.image)
            .width(924)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt}
          alignment={value.alignment}
          caption={value.caption}
          aspectRatio={aspectRatio}
        />
      );
    },
    image: ({ value }) => {
      const [, , dimensions] = value.image.asset?._ref.split("-");
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
          mt={6}
          __css={{ aspectRatio }}
        />
      );
    },
    staticCodeBlock: ({ value }) => {
      return (
        <Box marginBottom={3}>
          <CodeBlock
            mt={6}
            language={value.code.language}
            code={value.code.code}
          />
          {value.caption && (
            <Text variant="xs" textAlign="center" color="dimGrey" mt={1}>
              {value.caption}
            </Text>
          )}
        </Box>
      );
    },
    codeExample: ({ value }) => {
      const code = value.reactCode.code;

      if (value.layout === "code-only") {
        return <CodeBlock marginY={3} language="tsx" code={code} />;
      }

      return (
        <Box paddingBottom={3}>
          <InteractiveCode
            layout={value.layout}
            maxWidth={`calc(100vw - var(--spor-space-6))`}
            code={code}
          />
        </Box>
      );
    },
    component: ({ value }) => {
      return (
        <Box mt={6}>
          <ComponentDocs component={value} />
        </Box>
      );
    },
    imports: ({ value }) => {
      if (!value.reactImport) {
        return null;
      }
      return <CodeBlock code={value.reactImport} mt={3} />;
    },
    tipsPanel: ({ value }) => (
      <Box as="article" backgroundColor="mint" mt={3} p={4} borderRadius="md">
        <Flex gap={1} alignItems="end">
          <FavouriteOutline30Icon />
          <Heading as="h3" variant="sm" fontWeight="bold">
            {value.title}
          </Heading>
        </Flex>
        <Box __css={{ " > p:first-of-type": { mt: 1 } }}>
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
