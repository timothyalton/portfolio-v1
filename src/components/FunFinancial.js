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

const FunFinancial = () => {
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
            <img src={require("../images/funfinancial.gif")} />
          </a>
          <a className="carousel-item">
            <img src={require("../images/funfinancial1.png")} />
          </a>
          <a className="carousel-item">
            <img src={require("../images/funfinancial2.png")} />
          </a>
          <a className="carousel-item">
            <img src={require("../images/funfinancial3.png")} />
          </a>
          <a className="carousel-item">
            <img src={require("../images/funfinancial4.png")} />
          </a>
        </Box>
        <Box className={classes.projectInfo}>
          <Typography className={classes.heading} variant="h3">
            FUN FINANCIAL
          </Typography>
          <br />
          <Typography className={classes.subHeading} variant="body1">
            An application to teach your kids how to manage credit from a young
            age.
          </Typography>
          <br />
          <Typography className={classes.subHeading} variant="body1">
            Ruby | Ruby on Rails | PostgreSQL | JavaScript | ReactJS | Hooks |
            Semantic UI
          </Typography>
          <Box>
            <Button
              component="a"
              href="https://www.youtube.com/watch?v=-E7yAPN--tk"
              variant="outlined"
              className={classes.button}
            >
              Demo
            </Button>
            <Button
              component="a"
              href="https://github.com/timothyalton/Fun-Financial-v2/tree/master/frontend"
              variant="outlined"
              className={classes.button}
            >
              Front-End Code
            </Button>
            <Button
              component="a"
              href="https://github.com/timothyalton/Fun-Financial-v2/tree/master/backend"
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

export default FunFinancial;
