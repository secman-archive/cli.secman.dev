import { Link, Text, List, ListItem } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import Head from "next/head";
import { Routes } from "./api/routes";
import CodeBlock from "../components/CodeBlock";

const Index = () => (
  <div>
    <Head>
      <title>Secman Deps</title>
    </Head>
    <Container height="100vh">
      <Hero />
      <Main>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <div key="windows" className="my-4">
            <Text className="font-bold my-2">Windows</Text>
            <CodeBlock
              language="bash"
              code={`iwr -useb https://secman-team.github.io/install.ps1 | iex`}
            />
          </div>
          <div key="ml" className="my-4">
            <Text className="font-bold my-2">MacOS/Linux</Text>
            <CodeBlock
              language="bash"
              code={`curl -fsSL https://secman-team.github.io/install.sh | bash`}
            />
          </div>
          <List spacing={3} my={0}>
            <ListItem>
              <i className="fab fa-github-alt" />
              &nbsp;
              <Link isExternal href={Routes.secmanRepo} flexGrow={1} mr={2}>
                Secman Repo <LinkIcon />
              </Link>
            </ListItem>
          </List>
        </div>
        <div></div>
      </Main>

      <DarkModeSwitch />
      <CTA />
    </Container>
  </div>
);

export default Index;
