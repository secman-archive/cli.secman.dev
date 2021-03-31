import { Link as ChakraLink, Button } from "@chakra-ui/react";
import { Routes } from "../pages/api/routes";

import { Container } from "./Container";

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink isExternal href={Routes.secman} flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" variantcolor="green">
        Secman Website
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://github.com/secman-team/secman"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" variantcolor="green">
        View Repo
      </Button>
    </ChakraLink>
  </Container>
);
