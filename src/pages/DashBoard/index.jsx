import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchApi = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <SimpleGrid p={3} spacing={10} minChildWidth={"300px"}>
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id} borderTop={'8px'} borderColor={'purple.400'} bg={'white'}>
            <CardHeader>
              <Flex gap={5} alignItems={'center'}>
                <Box w={"50px"} h={"50"}>
                  <Text>AV</Text>
                </Box>

                <Box>
                  <Heading as={"h3"}>{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color={"gray.500"}>{task.description}</CardBody>

            <Divider borderColor={'gray.200'}/>
            <CardFooter>
              <HStack>
                <Button variant={'ghost'} leftIcon={<ViewIcon/>}>Watch</Button>
                <Button  variant={'ghost'} leftIcon={<EditIcon/>}>Comment</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
