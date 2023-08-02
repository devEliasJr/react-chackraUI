import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  Form,
  useNavigation,
  useActionData,
  useNavigate,
} from "react-router-dom";

export default function Create() {
  const toast = useToast();
  const data = useActionData();

  const navigation = useNavigation();
  const busy = navigation.state === "submitting";

  const navigate = useNavigate();

  const showToast = () => {
    toast({
      title: "Form submitted",
      description: "Successfully submitted the form",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (data && data.status === "sucess") {
      showToast();
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <Box maxw="480px">
      <Form method="POST">
        <fieldset disabled={busy}>
          <FormControl isRequired mb="40px">
            <FormLabel>Task Name:</FormLabel>
            <Input type="text" name="title" />
            <FormHelperText>Enter a descriptive task name</FormHelperText>
          </FormControl>

          <FormControl isRequired mb="40px">
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              placeholder="Enter a detailed descriptive for the task..."
            />
          </FormControl>

          <FormControl mb="40px" display="flex" alignItems="center">
            <Checkbox name="isPriority" size="lg" colorScheme="purple" />
            <FormLabel mb="0" ml="10px">
              Make this a priority task
            </FormLabel>
          </FormControl>
        </fieldset>

        <Button
          type="submit"
          isLoading={busy}
          loadingText="Loading"
          colorScheme="teal"
          variant="outline"
          spinnerPlacement="start"
        >
          Submit
        </Button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  //Pega as informações do Formulário
  const data = await request.formData();

  //Monta o objeto
  const post = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };
  //Tratamento das Condições do Formulário
  if (post.title.length < 10) {
    return {
      error: "menor que 10",
    };
  }
  // Executa a Requisição de Fetch
  const res = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  //Verifica o resultado da requisição
  if (res.ok) {
    return {
      status: "sucess",
    };
  } else {
    throw new Response("Fetch Api Error", { status: 503 });
  }
};
