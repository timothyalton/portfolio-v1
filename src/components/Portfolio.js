import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import FunFinancial from "./FunFinancial";
import LeagueTracker from "./LeagueTracker";
import VirusCity from "./VirusCity";
import FlightGuru from "./FlightGuru";
import TypeWars from "./TypeWars";
import NeblarSabotage from "./NeblarSabotage";

const useStyles = makeStyles({
  mainContainer: {
    background: "#3E3E3E",
    height: "100%",
    backgroundSize: "cover",
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="header" className={classes.mainContainer}>
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
      </Box>
    </>
  );
};

export default Portfolio;
