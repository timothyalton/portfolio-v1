import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProjectCarousel from "./ProjectCarousel";
import flightguru1 from "../images/flightguru1.png";
import flightguru2 from "../images/flightguru2.png";
import flightguru3 from "../images/flightguru3.png";
import flightguru4 from "../images/flightguru4.png";

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

const FlightGuru = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" style={{ marginBottom: "100px" }}>
        <ProjectCarousel
          images={[
            { src: "https://i.imgur.com/FNahyZJ.gif", alt: "Flight Guru Preview GIF" },
            flightguru1,
            flightguru2,
            flightguru3,
            flightguru4,
          ]}
        />
        <Box className={classes.projectInfo}>
          <Typography className={classes.heading} variant="h3">
            FLIGHT GURU
          </Typography>
          <br />
          <Typography className={classes.subHeading} variant="body1">
            An application to look up your flight info and find restaurants in
            and near your terminal.
          </Typography>
          <br />
          <Typography className={classes.subHeading} variant="body1">
            Ruby | Ruby on Rails | SQLite3 | HTML/CSS | AviationStack API |
            Google Places API
          </Typography>
          <Box>
            <Button
              component="a"
              href="https://www.youtube.com/watch?v=HRak-gZP3Q0&t=173s"
              variant="outlined"
              className={classes.button}
            >
              Demo
            </Button>
            <Button
              component="a"
              href="https://github.com/timothyalton/flight-guru-app"
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

export default FlightGuru;
