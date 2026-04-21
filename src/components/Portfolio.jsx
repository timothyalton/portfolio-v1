import React from "react";
import Navbar from "./Navbar";
import { Box, Button, Typography } from "@mui/material";
import FunFinancial from "./FunFinancial";
import LeagueTracker from "./LeagueTracker";
import VirusCity from "./VirusCity";
import FlightGuru from "./FlightGuru";
import TypeWars from "./TypeWars";
import NeblarSabotage from "./NeblarSabotage";

const Portfolio = () => {
  return (
    <>
      <Box
        component="header"
        sx={{
          background: "#3E3E3E",
          height: "100%",
          marginBottom: "0",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Navbar />
        <Box>
          <FunFinancial />
        </Box>
        <Box>
          <LeagueTracker />
        </Box>
        <Box>
          <VirusCity />
        </Box>
        <Box>
          <FlightGuru />
        </Box>
        <Box>
          <TypeWars />
        </Box>
        <Box>
          <NeblarSabotage />
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "#B1A296", textTransform: "uppercase" }}
        >
          Want to see the code to my portfolio site?
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#B1A296", textTransform: "uppercase" }}
        >
          React.js | Hooks | JavaScript | Material-UI | AWS
        </Typography>
        <Button
          component="a"
          href="https://github.com/timothyalton/portfolio-v1"
          variant="outlined"
          sx={{
            marginTop: "1rem",
            color: "#7395AE",
            borderColor: "#7395AE",
            "&:hover": {
              backgroundColor: "#7395AE",
              color: "#373737",
            },
            marginRight: "10px",
            marginBottom: "10px",
          }}
        >
          Code
        </Button>
      </Box>
    </>
  );
};

export default Portfolio;
