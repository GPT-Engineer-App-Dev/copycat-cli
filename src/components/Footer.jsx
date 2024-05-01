import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" p={4} bg="gray.200" textAlign="center">
      <Text>&copy; {new Date().getFullYear()} My Company</Text>
    </Box>
  );
};

export default Footer;
