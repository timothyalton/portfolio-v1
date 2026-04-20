import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProjectCarousel from "./ProjectCarousel";
import funfinancialGif from "../images/funfinancial.gif";
import funfinancial1 from "../images/funfinancial1.png";
import funfinancial2 from "../images/funfinancial2.png";
import funfinancial3 from "../images/funfinancial3.png";
import funfinancial4 from "../images/funfinancial4.png";

const useStyles = makeStyles({
  projectInfo: {
    justifyContent: "center",
    textAlign: "center",
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

  return (
    <>
      <Box component="div" style={{ marginBottom: "100px" }}>
        <ProjectCarousel
          images={[funfinancialGif, funfinancial1, funfinancial2, funfinancial3, funfinancial4]}
        />
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
