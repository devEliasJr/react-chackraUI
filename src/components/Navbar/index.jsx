import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logout out",
      description: "Sucessfuly logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex
      as={"nav"}
      p={"10"}
      mb={"40px"}
      alignItems={"center"}
      gap={"10px"}
      flexWrap={"wrap"}
    >
      <Heading as={"h1"}>Elias Dev</Heading>
      <Spacer />

      <HStack spacing={"10px"}>
        <Avatar name="Elias Junior" color="white" bg="purple" size={"md"}>
          <AvatarBadge boxSize="1.25em" bg="teal.400">
            <Text fontSize={"xs"} color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>m@email.com</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
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
