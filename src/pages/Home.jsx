import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid container>
      <Grid lg={12}>
        <Header />
      </Grid>
      <Grid container>
        <Grid lg={2} style={{ minHeight: "90vh" }}>
          <Sidebar />
        </Grid>
        <Grid lg={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
