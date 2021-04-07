import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <img src="/sm.png" style={{ paddingTop: "15px" }} className="w-20" />
    <Heading fontSize="5.5vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "Welcome to Secman Deps 📦",
};
