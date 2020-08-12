import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import YouTube from "@material-ui/icons/YouTube";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "#373737",
      "&:hover": {
        fill: "#7395AE",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <BottomNavigation width="auto" style={{ background: "#B1A296" }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<YouTube />}
          component="a"
          href="https://www.youtube.com/channel/UCXxidZCATHK30zGQa8NP9eA"
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<LinkedIn />}
          component="a"
          href="https://www.linkedin.com/in/mitchell-alton"
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<GitHub />}
          component="a"
          href="https://github.com/timothyalton"
        />
      </BottomNavigation>
    </>
  );
};

export default Footer;
