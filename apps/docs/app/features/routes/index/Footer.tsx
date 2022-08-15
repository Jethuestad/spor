import { BoxProps } from "@chakra-ui/react";
import {
  Box,
  Container,
  Flex,
  InformationOutline24Icon,
  RuterOutline24Icon,
  VyLogo,
} from "@vygruppen/spor-react";

export function Footer() {
  return (
    <Container as="footer" maxWidth="92.5rem" height={["auto", "7.75rem"]}>
      <Flex
        justifyContent="space-between"
        borderTop="1px solid"
        borderColor="alias.steel"
        py={24}
      >
        <Box as="a" href="https://vy.no" title="Gå til Vy.no">
          <VyLogo colorScheme="light" width="5rem" />
        </Box>
        <Flex as="nav" aria-label="Footer" flexDirection={["column", "row"]}>
          <FooterLink
            href="https://www.vy.no/vygruppen/om-oss"
            icon={InformationOutline24Icon}
            mr={54}
          >
            Om Vy
          </FooterLink>
          <FooterLink
            href="slack://channel?team=nsb-utvikling&id=CM9H2N39U"
            icon={RuterOutline24Icon}
          >
            Prat med oss på Slack
          </FooterLink>
        </Flex>
      </Flex>
    </Container>
  );
}

type FooterLinkProps = BoxProps & {
  href: string;
  icon: React.ComponentType<BoxProps>;
  children: React.ReactNode;
};
function FooterLink({ href, icon: Icon, children, ...props }: FooterLinkProps) {
  return (
    <Flex
      as="a"
      href={href}
      alignItems="center"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      <Icon mr={18} />
      {children}
    </Flex>
  );
}
