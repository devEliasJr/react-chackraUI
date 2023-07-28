import {
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import { FaSearch, FaChevronDown } from "react-icons/fa";

export function Header() {
  return (
    <Flex p={5} align={"center"} justifyContent={"center"} gap={3}>
      <Flex>
        <Image src={logo} color={"gray.500"} />
        <Heading>EliasDev</Heading>
      </Flex>

      <Flex flex={1}>
        <InputGroup gap={1}>
          <Input type="text" placeholder="phone number" />
          <IconButton
            type="submit"
            aria-label="Search database"
            icon={<FaSearch />}
          />
        </InputGroup>
      </Flex>

      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown size={12}/>}>
          Elias
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem onClick={() => {alert('clicou')}}>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

     
    </Flex>
  );
}
