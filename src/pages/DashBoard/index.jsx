import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
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
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(error);
  console.log(tasks);

  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/posts");
      setTasks(response.data);
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <SimpleGrid p={3} spacing={10} minChildWidth={"300px"}>
      {loading && (
        <Box
          padding="6"
          boxShadow="lg"
          bg="white"
          maxW={"400px"}
          minH={"300px"}
        >
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      )}
      {error && <p> Ocorreu um erro, por favor tente mais tarde!</p>}
      {!error &&
        tasks &&
        tasks.length > 0 &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop={"8px"}
            borderColor={"purple.400"}
            bg={"white"}
          >
            <CardHeader>
              <Flex gap={5} alignItems={"center"}>
                <Avatar />

                <Box>
                  <Heading as={'h3'} size={"md"}>{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>

              </Flex>
            </CardHeader>

            <CardBody color={"gray.500"}>{task.description}</CardBody>

            <Divider borderColor={"gray.200"} />
            <CardFooter>
              <HStack>
                <Button variant={"ghost"} leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant={"ghost"} leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
