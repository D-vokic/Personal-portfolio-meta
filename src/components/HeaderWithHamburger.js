import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  HStack,
  IconButton,
  VStack,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { icon: faGithub, url: "https://github.com" },
  { icon: faLinkedin, url: "https://www.linkedin.com" },
  { icon: faFacebook, url: "https://facebook.com" },
  { icon: faTwitter, url: "https://twitter.com" },
];

const HeaderWithHamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headerRef = useRef(null);
  const prevScrollPos = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (headerRef.current) {
        if (prevScrollPos.current > currentScrollPos) {
          headerRef.current.style.transform = "translateY(0)";
        } else {
          headerRef.current.style.transform = "translateY(-200px)";
        }
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onClose();
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      zIndex={9999}
      transition="transform 0.3s ease-in-out"
    >
      <Box color="white" maxW="1280px" mx="auto" px={6} py={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </HStack>

          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <Link onClick={handleClick("projects")}>Projects</Link>
            <Link onClick={handleClick("services")}>Services</Link>
            <Link onClick={handleClick("contactme")}>Contact Me</Link>
          </HStack>
          <IconButton
            icon={<FontAwesomeIcon icon={faBars} />}
            variant="ghost"
            aria-label="Toggle Menu"
            display={{ base: "flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            color="white"
          />
        </HStack>
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="rgba(24, 24, 27, 0.95)" color="white">
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={6} mt={8} align="start" paddingTop="2rem">
              <Link onClick={handleClick("projects")}>Projects</Link>
              <Link onClick={handleClick("services")}>Services</Link>
              <Link onClick={handleClick("contactme")}>Contact Me</Link>
              <HStack spacing={4}>
                {socials.map((social, index) =>
                  social.url.startsWith("mailto:") ? (
                    <a key={index} href={social.url}>
                      <FontAwesomeIcon icon={social.icon} size="2x" />
                    </a>
                  ) : (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={social.icon} size="2x" />
                    </a>
                  )
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default HeaderWithHamburger;
