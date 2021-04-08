import { Flex, Heading } from "@chakra-ui/react";
import { Routes } from "../pages/api/routes";

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <img src={Routes.gsmURL} style={{ paddingTop: "25px" }} />
    <Heading fontSize="5vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "Welcome to Secman Deps 📦",
};
