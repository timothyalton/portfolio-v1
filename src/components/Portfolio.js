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

const useStyles = makeStyles({
  mainContainer: {
    background: "#3E3E3E",
    height: "100%",
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Box>
          <FunFinancial />
        </Box>
      </Box>
    </>
  );
};

export default Portfolio;
