import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#024fc9",
    800: "#146af5",
    700: "#2977f2",
    600: "#337df2",
    500: "#4287f5",
  },
  fonts: {
    heading: "Arial",
    body: "Tahoma",
  },
};

export const lightTheme = extendTheme({ colors });
