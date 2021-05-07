import { Flex, Heading } from "@chakra-ui/react";
import { URLS } from "../pages/api/routes";

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <img src={URLS.icon} style={{ paddingTop: "25px" }} />
    <Heading fontSize="5vw">{title}</Heading>
  </Flex>
);

export const DockerHero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "Welcome to Secman Deps 📦",
};

DockerHero.defaultProps = {
  title: "Secman With 🐳",
};
