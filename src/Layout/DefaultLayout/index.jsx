import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";

export const DefaultLayout = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg={"gray.50"}>
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg={"purple.400"}
        minHeight={{lg: '100vh'}}
        p={{ base: "20px", lg: "30px" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p={"40px"}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};
