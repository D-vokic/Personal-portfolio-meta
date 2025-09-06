import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Where Am I?",
    description:
      "A pure JavaScript application that leverages the Geolocation API, asynchronous fetch calls to RESTful endpoints, and dynamic DOM rendering to display country data from latitude and longitude coordinates.",
    getImageSrc: () => require("../images/photoo1.png"),
    url: "https://d-vokic.github.io/WhereAmI-geolocation-app/",
  },
  {
    title: "One Page Bank Website",
    description:
      "This project is a modern, responsive demo of a banking website featuring many contemporary functionalities such as a modal window, smooth scrolling, dark mode, hamburger menu, and much more.",
    getImageSrc: () => require("../images/photoo2.png"),
    url: "https://d-vokic.github.io/Bank-Website-Demo/",
  },
  {
    title: "Interactive Banking UI",
    description:
      "Interactive Banking User Interface is an educational web application that simulates the basic functions of online banking. Built with plain HTML, CSS, and JavaScript, the app is designed as a practical project for frontend development and user interface design.",
    getImageSrc: () => require("../images/photoo3.png"),
    url: "https://d-vokic.github.io/interactive-banking-ui/",
  },
  {
    title: "Custom Countdown Timer",
    description:
      "This project is a customizable countdown timer built using HTML, CSS, and JavaScript. It allows users to set a specific countdown duration and customize the display with various styling options.",
    getImageSrc: () => require("../images/photoo4.png"),
    url: "https://d-vokic.github.io/Custom-Countdown-Timer/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
    >
      <VStack spacing={8} align="flex-start" w="100%">
        <Heading as="h1" id="projects-section" color="white">
          Featured Projects
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridGap={8}
          w="100%"
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
              url={project.url}
            />
          ))}
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
