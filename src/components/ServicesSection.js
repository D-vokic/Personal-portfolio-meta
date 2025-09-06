import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaAnchor, FaUserTie, FaLifeRing, FaServer } from "react-icons/fa";

const services = [
  {
    icon: FaAnchor,
    title: "Web Design",
    description: "Creating websites is my passion",
    color: "pink.500",
  },
  {
    icon: FaUserTie,
    title: "SEO Optimization",
    description: "I optimize your site to win Google's heart",
    color: "cyan.500",
  },
  {
    icon: FaLifeRing,
    title: "Website Support & Maintenance",
    description: "Only a healthy website is a good website",
    color: "green.500",
  },
  {
    icon: FaServer,
    title: "System Administration",
    description: "In /etc/init.d we trust—may the system lights never go out",
    color: "gray.500",
  },
];

const ServicesSection = () => {
  return (
    <Box
      id="services-section"
      minHeight="100vh"
      p={8}
      backgroundColor="#1e293b"
    >
      <Heading as="h2" size="xl" mb={8} color="white" textAlign="center">
        My Services
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {services.map((service, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="transform .2s ease, box-shadow .2s ease"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: "lg",
              cursor: "pointer",
            }}
          >
            <VStack align="start" spacing={3} p={6}>
              <Icon as={service.icon} boxSize={12} color={service.color} />
              <Heading size="md" color="black">
                {service.title}
              </Heading>
              <Text color="gray.600">{service.description}</Text>
              <Link
                href="https://duskovokic.com"
                isExternal
                fontSize="sm"
                color="gray.500"
                pt={2}
              >
                See more
              </Link>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServicesSection;
