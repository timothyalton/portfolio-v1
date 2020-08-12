import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

// CSS STYLES ############################

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#3E3E3E",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #5D5C61",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #5D5C61",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#557A95 #7395AE transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#5D5C61",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #557A95 #7395AE",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#7395AE",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#7395AE",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#7395AE",
    padding: "0",
    textTransform: "uppercase",
  },
  companyName: {
    color: "white",
  },
  jobDescription: {
    color: "#B1A296",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          My Background
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Job Title
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.companyName}
            >
              Company
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.jobDescription}
            >
              Job Description
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Job Title
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.companyName}
            >
              Company
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.jobDescription}
            >
              Job Description
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Job Title
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.companyName}
            >
              Company
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.jobDescription}
            >
              Job Description
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Job Title
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.companyName}
            >
              Company
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.jobDescription}
            >
              Job Description
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2016
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Job Title
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.companyName}
            >
              Company
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.jobDescription}
            >
              Job Description
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Job Title
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.companyName}
            >
              Company
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.jobDescription}
            >
              Job Description
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
