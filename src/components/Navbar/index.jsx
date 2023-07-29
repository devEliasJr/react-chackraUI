import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as={"nav"} p={"10"} mb={'40px'} alignItems={"center"} gap={"10px"}>
      <Heading as={"h1"}>Elias Dev</Heading>
      <Spacer />

      <HStack spacing={'20px'}>
        <Box bg={"gray.200"} p={"10px"}>
          M
        </Box>
        <Text>m@email.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
    // <Flex bg={"gray.200"} justifyContent={"space-between"} wrap={'wrap'} gap={2}>
    //   <Box w={"150px"} h={"150px"} bg={"red"}></Box>
    //   <Box w={"150px"} h={"150px"} bg={"blue"}></Box>
    //   <Box w={"150px"} h={"150px"} bg={"green"} flexGrow={'1'}></Box>
    //   <Box w={"150px"} h={"150px"} bg={"yellow"} flexGrow={'2'}></Box>
    // </Flex>
  );
}