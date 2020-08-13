import React, { useEffect } from "react";
import M from "materialize-css";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";

import "./carousel.css";

const useStyles = makeStyles({
  project: {
    marginBottom: "100px",
  },
  carousel: {
    height: "600px",
    width: "600px",
  },
  carouselItem: {
    height: "600px",
    width: "600px",
  },
  projectInfo: {
    justifyContent: "center",
    textAlign: "center",
    // border: "solid",
    // borderColor: "#7395AE",
    // borderWidth: "2px",
    // marginLeft: "35%",
    // marginRight: "35%",
    // borderRadius: "5px",
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

  useEffect(() => {
    let elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {});
  });

  // console.log(require("../Videos/funfinancial.gif"));

  return (
    <>
      <Box component="div" className="project">
        <Box component="div" className="carousel">
          <a className="carousel-item">
            <img
              src="https://i.imgur.com/FNahyZJ.gif"
              alt="Flight Guru Preview GIF"
            />
          </a>
          <a className="carousel-item">
            <img src={require("../images/flightguru1.png")} />
          </a>
          <a className="carousel-item">
            <img src={require("../images/flightguru2.png")} />
          </a>
          <a className="carousel-item">
            <img src={require("../images/flightguru3.png")} />
          </a>
          <a className="carousel-item">
            <img src={require("../images/flightguru4.png")} />
          </a>
        </Box>
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
