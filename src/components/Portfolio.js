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
    marginBottom: "0",
    justifyContent: "center",
    textAlign: "center",
  },
  button: {
    marginTop: "1rem",
    color: "#7395AE",
    borderColor: "#7395AE",
    "&:hover": {
      backgroundColor: "#7395AE",
      color: "#373737",
    },
    marginRight: "10px",
    marginBottom: "10px",
  },
  subHeading: {
    color: "#B1A296",
    textTransform: "uppercase",
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
        <Typography className={classes.subHeading} variant="body1">
          Want to see the code to my portfolio site?
        </Typography>
        <Button
          component="a"
          href="https://github.com/timothyalton/portfolio-v1"
          variant="outlined"
          className={classes.button}
        >
          Code
        </Button>
      </Box>
    </>
  );
};

export default Portfolio;
