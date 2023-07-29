import {
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  InputRightElement,
  FormControl,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("handle OK");
    console.log("Q:" + query);
  };
  return (
    <Flex p={5} align={"center"} gap={3}>
      <Link to="/">
        <Flex>
          <Image src={logo} color={"gray.500"} />
          <Heading>EliasDev</Heading>
        </Flex>
      </Link>

      <FormControl style={{ flex: 1 }} as={'form'}>
        <InputGroup size="md">
          <Input
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
          />

          <InputRightElement>
            <Button
              type="submit"
              size="sm"
              onClick={handleSubmit}
              background={"transparent"}
            >
              <FaSearch />
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown size={12} />}>
          Elias
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">Criar Novo Anuncio</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact"> Entre em Contato</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login"> Realize login</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
