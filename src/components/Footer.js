import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  IconButton,
  Link,
  Divider,
  Image,
} from "@chakra-ui/react";
import {
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { Link as ChakraLink } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#000" color="white" py={10} px={6}>
      <VStack spacing={8} maxW="1024px" mx="auto" textAlign="center">
        <Flex justifyContent="space-between" alignItems="center" w="100%">
          <VStack spacing={2} align="flex-start">
            <Text fontWeight="bold" fontSize="lg">
              CONTACT ME!
            </Text>
            <Text color="gray.300">Or just call me.</Text>
            <HStack spacing={2}>
              <FaPhone />
              <Text>(+36) 70 434 7540</Text>
            </HStack>
          </VStack>

          <ChakraLink href="https://duskovokic.com/" isExternal>
            <Image
              src="/logo.webp"
              alt="SoHo iLone Logo"
              boxSize="120px"
              objectFit="contain"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
            />
          </ChakraLink>
        </Flex>

        <Divider borderColor="gray.600" />

        <HStack spacing={6}>
          {/* <Link href="mailto:vokic.dusko@gmail.com" isExternal></Link> */}
          <Link href="https://github.com/d-vokic" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              color="white"
              fontSize="xl"
              transition="all 0.5s ease-in-out"
              _hover={{
                bg: "gray.100",
                color: "black",
                borderRadius: "md",
              }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/duskovokic" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color="white"
              fontSize="xl"
              transition="all 0.5s ease-in-out"
              _hover={{
                bg: "gray.100",
                color: "black",
                borderRadius: "md",
              }}
            />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              color="white"
              fontSize="xl"
              transition="all 0.5s ease-in-out"
              _hover={{
                bg: "gray.100",
                color: "black",
                borderRadius: "md",
              }}
            />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaTwitter />}
              variant="ghost"
              color="white"
              fontSize="xl"
              transition="all 0.5s ease-in-out"
              _hover={{
                bg: "gray.100",
                color: "black",
                borderRadius: "md",
              }}
            />
          </Link>
        </HStack>

        <Text fontSize="sm" color="gray.400" textAlign="center" pt={4}>
          © 2025 Dusko Vokic |{" "}
          <ChakraLink
            href="https://duskovokic.com/"
            isExternal
            color="cyan.300"
            fontWeight="bold"
            _hover={{ textDecoration: "underline", color: "green.200" }}
          >
            SoHo iLone
          </ChakraLink>
          <br />
          Designed and built by Dusko Vokic as a final project for{" "}
          <ChakraLink
            href="https://www.coursera.org/learn/advanced-react/"
            isExternal
            color="teal.300"
            fontWeight="bold"
            _hover={{ textDecoration: "underline", color: "teal.200" }}
          >
            Meta Advanced React Course
          </ChakraLink>
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
