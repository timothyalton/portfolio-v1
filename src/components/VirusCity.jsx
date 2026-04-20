import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProjectCarousel from "./ProjectCarousel";
import viruscity1 from "../images/viruscity1.png";
import viruscity2 from "../images/viruscity2.png";
import viruscity3 from "../images/viruscity3.png";
import viruscity4 from "../images/viruscity4.png";

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

const VirusCity = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" style={{ marginBottom: "100px" }}>
        <ProjectCarousel
          images={[
            { src: "https://i.imgur.com/apjOHQ6.gif", alt: "Virus City Preview GIF" },
            viruscity1,
            viruscity2,
            viruscity3,
            viruscity4,
          ]}
        />
        <Box className={classes.projectInfo}>
          <Typography className={classes.heading} variant="h3">
            Virus City
          </Typography>
          <br />
          <Typography className={classes.subHeading} variant="body1">
            A simulation application to show the rate of infection, with the
            option to put certain quarantine parameters in place.
          </Typography>
          <br />
          <Typography className={classes.subHeading} variant="body1">
            Ruby on Rails | SQLite3 | JavaScript | HTML/CSS
          </Typography>
          <Box>
            <Button
              component="a"
              href="https://www.youtube.com/watch?v=MhRjIXeBixw"
              variant="outlined"
              className={classes.button}
            >
              Demo
            </Button>
            <Button
              component="a"
              href="https://github.com/timothyalton/virusCity/tree/master/frontend"
              variant="outlined"
              className={classes.button}
            >
              Front-End Code
            </Button>
            <Button
              component="a"
              href="https://github.com/timothyalton/virusCity/tree/master/backend"
              variant="outlined"
              className={classes.button}
            >
              Back-End Code
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VirusCity;
