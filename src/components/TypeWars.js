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

const TypeWars = () => {
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
            <img src={require("../images/typewars.gif")} />
          </a>
          <a className="carousel-item">
            <img src={require("../images/typewars1.png")} />
          </a>
          <a className="carousel-item">
            <img src={require("../images/typewars2.png")} />
          </a>
          <a className="carousel-item">
            <img src={require("../images/typewars3.png")} />
          </a>
          <a className="carousel-item">
            <img src={require("../images/typewars4.png")} />
          </a>
        </Box>
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
            <Button variant="outlined" className={classes.button}>
              Demo
            </Button>
            <Button variant="outlined" className={classes.button}>
              Front-End Code
            </Button>
            <Button variant="outlined" className={classes.button}>
              Back-End Code
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TypeWars;
