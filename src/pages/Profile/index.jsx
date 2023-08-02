import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} color="teal.400" />
              email: eliasjr@email.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} color="teal.400" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              corporis accusamus explicabo.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} color="teal.400" />
              email: eliasjr@email.com
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              dolores perspiciatis animi.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="red.400" />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              dolores perspiciatis animi.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
