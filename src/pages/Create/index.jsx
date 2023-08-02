import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";

export default function Create() {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
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
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);

  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return redirect("/");
};
