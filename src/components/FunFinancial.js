import React, { useEffect } from "react";
import M from "materialize-css";
import { Box, Typography } from "@material-ui/core";
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
  },
  //   swiperContainer: {
  //     width: "100%",
  //     paddingTop: "50px",
  //     paddingBottom: "50px",
  //   },
  //   swiperSlide: {
  //     backgroundPosition: "center",
  //     backgroundSize: "cover",
  //     width: "300px",
  //     height: "300px",
  //   },
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
          <Typography variant="h3">FUN FINANCIAL</Typography>
          <br />
          <Typography variant="body1">
            An application to teach your kids how to manage credit from a young
            age.
          </Typography>
          <Typography variant="body1">
            Ruby on Rails, PostgreSQL, JavaScript, ReactJS, Hooks, Semantic UI
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FunFinancial;
