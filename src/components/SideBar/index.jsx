import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Center, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List
      display={"flex"}
      flexDirection={{sm: 'row', lg:'column', xl: 'column'}}
      flexWrap={'wrap'}
      alignItems={"start"}
      justifyContent={"center"}
      color={"white"}
      fontSize={"1.2em"}
      gap={4}
    >
      <ListItem>
        <NavLink to="/dashboard">
          <Flex align={"center"}>
            <ListIcon as={CalendarIcon} color="white" />
            Dashboard
          </Flex>
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink to="/create">
          <Flex align={"center"}>
            <ListIcon as={EditIcon} color="white" />
            New Task
          </Flex>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <Flex align={"center"}>
            <ListIcon as={AtSignIcon} color="white" />
            Profile
          </Flex>
        </NavLink>
      </ListItem>
    </List>
  );
}
