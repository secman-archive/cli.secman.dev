import { Link, Text } from "@chakra-ui/react";
import { DockerHero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import Head from "next/head";
import CodeBlock from "../components/CodeBlock";
import { URLS } from "./api/routes";

const DockerPage = () => (
  <div>
    <Head>
      <title>Secman With Docker</title>
    </Head>
    <Container height="100vh">
      <DockerHero />
      <Main>
        <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20">
          <div key="ghcr" className="my-4">
            <Link isExternal href={URLS.docker.hub}>
              <Text className="inter font-bold my-2">
                From Docker Hub
              </Text>
            </Link>
            <CodeBlock
              language="bash"
              code={`docker pull smrc/secman`}
            />
          </div>
          <div key="ghcr" className="my-4">
            <Link isExternal href={URLS.docker.ghcr}>
              <Text className="inter font-bold my-2">
                From Github Packages
              </Text>
            </Link>
            <CodeBlock
              language="bash"
              code={`docker pull ghcr.io/secman-team/secman`}
            />
          </div>
        </div>
        <div></div>
      </Main>

      <DarkModeSwitch />
      <CTA />
    </Container>
  </div>
);

export default DockerPage;
