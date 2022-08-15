import { Link } from "@remix-run/react";
import {
  Box,
  BoxProps,
  Card,
  ComponentsOutline30Icon,
  Container,
  Flex,
  GuidelinesOutline30Icon,
  Heading,
  HomeOutline30Icon,
  IconsOutline30Icon,
  SimpleGrid,
  Text,
  TokensOutline30Icon,
  TrainOutline30Icon,
} from "@vygruppen/spor-react";

type LinkItem = {
  to: string;
  title: string;
  description: string;
  icon: React.ComponentType<BoxProps>;
  iconColor: string;
};

// These are the links that are rendered in the action links section.
const links: LinkItem[] = [
  {
    to: "/kom-i-gang/introduksjon",
    title: "Kom i gang",
    description: "Sett opp Spor i ditt prosjekt på få minutter",
    icon: HomeOutline30Icon,
    iconColor: "alias.lightBlue",
  },
  {
    to: "/komponenter",
    title: "Komponenter",
    description:
      "Se byggeklossene du har tilgjengelig for å bygge brukergrensesnitt",
    icon: ComponentsOutline30Icon,
    iconColor: "alias.champagne",
  },
  {
    to: "/ressurser/design-tokens",
    title: "Design Tokens",
    description:
      "Se farger, størrelser og de andre atomene Spor er bygget opp av",
    icon: TokensOutline30Icon,
    iconColor: "alias.bisque",
  },
  {
    to: "https://snohq.io/xx/",
    title: "Profil",
    description:
      "Lær mer om den visuelle profilen til Vy, og hva den inneholder",
    icon: GuidelinesOutline30Icon,
    iconColor: "alias.seaMist",
  },
  {
    to: "/ressurser/ikoner",
    title: "Ikoner",
    description: "Utfork Spor sitt ikonbibliotek",
    icon: IconsOutline30Icon,
    iconColor: "alias.primrose",
  },
  {
    to: "/lekegrind",
    title: "Lekegrind",
    description: "Test ut Spor rett i nettleseren",
    icon: TrainOutline30Icon,
    iconColor: "alias.silver",
  },
];

export function ActionLinks() {
  return (
    <Container maxWidth="container.lg">
      <SimpleGrid
        position="relative"
        top={["-3.875rem", -54]}
        columns={[1, 2, 3]}
        spacing={[18, 24]}
      >
        {links.map((link) => (
          <ActionLinkCard key={link.to} to={link.to}>
            <IconCircle backgroundColor={link.iconColor} icon={link.icon} />
            <Box>
              <Heading as="h2" textStyle="md" mb={9} fontWeight="bold">
                {link.title}
              </Heading>
              <Text textStyle="sm">{link.description}</Text>
            </Box>
          </ActionLinkCard>
        ))}
      </SimpleGrid>
    </Container>
  );
}

type ActionLinkCardProps = {
  to: string;
  children: React.ReactNode;
};
function ActionLinkCard({ to, children }: ActionLinkCardProps) {
  const linkProps: any = to.match(/^https?:\/\//)
    ? { as: "a", href: to }
    : { as: Link, to };
  return (
    <Card
      {...linkProps}
      colorScheme="white"
      p={24}
      display="flex"
      flexDirection={["row", "column"]}
      gap={[3, 4]}
    >
      {children}
    </Card>
  );
}

type IconCircleProps = {
  backgroundColor: string;
  icon: React.ComponentType<BoxProps>;
};
function IconCircle({ backgroundColor, icon: Icon }: IconCircleProps) {
  return (
    <Flex
      width={["3.25rem", "5.625rem"]}
      height={["3.25rem", "5.625rem"]}
      flex={["0 0 3.25rem", "0 0 5.625rem"]}
      alignItems="center"
      justifyContent="center"
      borderRadius="round"
      backgroundColor={backgroundColor}
    >
      <Icon width={["1.875rem", "3.75rem"]} height={["1.875rem", "3.75rem"]} />
    </Flex>
  );
}
