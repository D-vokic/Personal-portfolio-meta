import React, { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <IconButton
        icon={<FaArrowUp />}
        position="fixed"
        bottom="40px"
        right="40px"
        colorScheme="teal"
        size="lg"
        borderRadius="full"
        onClick={scrollToTop}
        zIndex={1000}
        aria-label="Scroll to top"
      />
    )
  );
};

export default GoToTopButton;
