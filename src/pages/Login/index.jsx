import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { FaPhone } from "react-icons/fa";

export default function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Container marginTop={"20"}>
      <Stack spacing={5}>
        <InputGroup size="md">
          <Input placeholder="Digite seu Email" type="email" />
        </InputGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="blue">Button</Button>
      </Stack>
    </Container>
  );
}
