import { Flex, Heading } from "@chakra-ui/react";
import { URLS } from "../pages/api/routes";

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <img src={URLS.icon} style={{ width: "100px", paddingTop: "20px" }} />
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
);

export const DockerHero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "Secman CLI",
};

DockerHero.defaultProps = {
  title: "Secman With 🐳",
};
