import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProjectCarousel from "./ProjectCarousel";
import typewarsGif from "../images/typewars.gif";
import typewars1 from "../images/typewars1.png";
import typewars2 from "../images/typewars2.png";
import typewars3 from "../images/typewars3.png";
import typewars4 from "../images/typewars4.png";

const useStyles = makeStyles({
  projectInfo: {
    justifyContent: "center",
    textAlign: "center",
  },
  heading: {
    color: "#7395AE",
    transform: "uppercase",
  },
  subHeading: {
    color: "#B1A296",
    textTransform: "uppercase",
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
});

const TypeWars = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" style={{ marginBottom: "100px" }}>
        <ProjectCarousel
          images={[typewarsGif, typewars1, typewars2, typewars3, typewars4]}
        />
        <Box className={classes.projectInfo}>
          <Typography className={classes.heading} variant="h3">
            TYPE WARS!
          </Typography>
          <br />
          <Typography className={classes.subHeading} variant="body1">
            A CLI Application to test your typing speed and keep track of high
            scores, with different themes.
          </Typography>
          <br />
          <Typography className={classes.subHeading} variant="body1">
            Ruby | AFPlay
          </Typography>
          <Box>
            <Button
              component="a"
              href="https://www.youtube.com/watch?v=QRCCYkc8oMU&t=29s"
              variant="outlined"
              className={classes.button}
            >
              Demo
            </Button>
            <Button
              component="a"
              href="https://github.com/timothyalton/Type-Wars-"
              variant="outlined"
              className={classes.button}
            >
              Code
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TypeWars;
