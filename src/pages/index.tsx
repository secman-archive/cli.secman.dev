import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import Head from "next/head";
import { Routes } from "./api/routes";

const Index = () => (
  <div>
    <Head>
      <title>Secman</title>
      <link rel="icon" href="/secman.svg" type="image/svg+xml" />
    </Head>
    <Container height="100vh">
      <Hero />
      <Main>
        <Code>
          # Windows
          <br />
          iwr -useb https://secman-team.github.io/install.ps1 | iex
          <br />
          <br />
          # macOS/Linux
          <br />
          curl -fsSL https://secman-team.github.io/install.sh | bash
        </Code>

        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href={Routes.secman} flexGrow={1} mr={2}>
              Secman <LinkIcon />
            </ChakraLink>
          </ListItem>
        </List>
      </Main>

      <DarkModeSwitch />
      <CTA />
      <Footer>
        <Text>
          ⌨ By{" "}
          <a className="blue" href={Routes.secman}>
            secman
          </a>{" "}
          🤝{" "}
          <a className="blue" href="https://chakra-ui.com">
            chakra-ui
          </a>
        </Text>
      </Footer>
    </Container>
  </div>
);

export default Index;
