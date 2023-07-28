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
import { Link, NavLink, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
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
        <MenuButton as={Button} rightIcon={<FaChevronDown size={12} />}>
          Elias
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/">Meu Painel</Link>
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
