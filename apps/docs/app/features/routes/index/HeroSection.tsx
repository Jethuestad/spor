import { Link } from "@remix-run/react";
import {
  ArrowRightFill30Icon,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
} from "@vygruppen/spor-react";

export function HeroSection() {
  return (
    <Flex backgroundColor="alias.darkTeal" minHeight="31.25rem">
      <Container maxWidth="container.lg" mt={[0, 54]}>
        <Flex flexDirection={["column-reverse", "row"]} alignItems="center">
          <Flex
            flexDirection="column"
            color="alias.white"
            flex={["auto", "55%"]}
          >
            <Heading as="h1" textStyle="2xl">
              Velkommen til Spor
            </Heading>
            <Box marginBottom={[90, 0]}>
              <Button
                variant="secondary"
                display={["flex", "inline-flex"]}
                as={Link}
                size="lg"
                to="/kom-i-gang/bidra"
                rightIcon={<ArrowRightFill30Icon />}
                mt={24}
                width={["100%", "fit-content"]}
              >
                Se hvordan du kan bidra
              </Button>
            </Box>
          </Flex>
          <Flex flex={["auto", "45%"]}>
            <Image
              src="/illustrations/front-page-illustration.svg"
              alt="En person som ser på mobiltelefon for hvordan man kan benytte seg av Grønn Reise"
              width="100%"
              __css={{ aspectRatio: "4 / 3" }}
              maxWidth={["25rem", "none"]}
            />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
