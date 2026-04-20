import React from "react";
import { Typography, Avatar, Grid, Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { makeStyles } from "@mui/styles";
import avatar from "../profile.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#7395AE",
  },
  subtitle: {
    color: "#B1A296",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justifyContent="center">
        <Avatar className={classes.avatar} src={avatar} alt="Profile Picture" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <TypeAnimation
          sequence={["Mitchell Alton"]}
          speed={50}
          cursor={false}
        />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <TypeAnimation
          sequence={[
            "Software Engineer",
            2000,
            "Full Stack Developer",
            2000,
            "Web Development",
            2000,
            "Husband and Father",
            2000,
            "May The Force Be With You!",
            2000,
          ]}
          speed={50}
          deletionSpeed={70}
          repeat={Infinity}
        />
      </Typography>
    </Box>
  );
};

export default Header;
