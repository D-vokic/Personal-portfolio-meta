import React from "react";
import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, url }) => {
  const link = url || "https://github.com/D-vokic";

  return (
    <Box
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
      <Image src={imageSrc} alt={title} w="100%" h="200px" objectFit="cover" />

      <VStack align="start" spacing={3} p={4}>
        <Heading size="md" color="black">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
        <HStack spacing={1} pt={2}>
          <Link href={link} isExternal fontSize="sm" color="gray.500">
            See more
          </Link>
          <FontAwesomeIcon icon={faArrowRight} size="sm" color="#6B7280" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
