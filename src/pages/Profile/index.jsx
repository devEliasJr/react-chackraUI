import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Profile() {

  const boxStyles = {
    p: "10px",
    bg: "purple.300",
    color: "white",
    m: "10px",
    textAlign: "start",
    filter: 'blur(2px)',
    ':hover': {
      color: 'black',
      bg: 'blue.200'
    }
  }

  const boxHovers = {
    ':hover': {
      bg: 'red.300'
    }
  }
  return (
    <Container as={"section"} maxWidth={"6xl"} py={"20px"}>
      <Heading my={"30"} p={"10px"}>
        Chakra Ui Comp
      </Heading>
      <Text ml={"30px"} color={"blue.300"} fontWeight={"bold"}>
        Lorem, ipsum dolor.
      </Text>

      <Box sx={boxHovers} my={"7"} p={"5"} bg={"orange"}>
        <Text>This is a box</Text>
      </Box>

      <Box sx={boxStyles}>
        Hello
      </Box>
    </Container>
  );
}
