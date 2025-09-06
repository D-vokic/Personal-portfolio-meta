import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import duskoImg from "../images/dusko.jpg";

const greeting = "Hello, I am Dusko!";
const bio1 = "A frontend developer";
const bio2 = "specialised in JavaSript/React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar src={duskoImg} boxSize="150px" />
      <Heading as="h2" size="md">
        {greeting}
      </Heading>
      <Heading as="h1" size="2xl" textAlign="center">
        {bio1}
      </Heading>
      <Heading as="h1" size="2xl" textAlign="center">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);
export default LandingSection;
