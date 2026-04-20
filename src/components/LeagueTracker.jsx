import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProjectCarousel from "./ProjectCarousel";
import leaguetrackerGif from "../images/leaguetracker.gif";
import leaguetracker1 from "../images/leaguetracker1.png";
import leaguetracker2 from "../images/leaguetracker2.png";
import leaguetracker3 from "../images/leaguetracker3.png";
import leaguetracker4 from "../images/leaguetracker4.png";

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

const LeagueTracker = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" style={{ marginBottom: "100px" }}>
        <ProjectCarousel
          images={[leaguetrackerGif, leaguetracker1, leaguetracker2, leaguetracker3, leaguetracker4]}
        />
        <Box className={classes.projectInfo}>
          <Typography className={classes.heading} variant="h3">
            LEAGUE TRACKER
          </Typography>
          <br />
          <Typography className={classes.subHeading} variant="body1">
            An application to track your League of Legends ranked games and look
            up other profiles.
          </Typography>
          <br />
          <Typography className={classes.subHeading} variant="body1">
            Ruby | Ruby on Rails | PostgreSQL | JavaScript | ReactJS | CSS |
            Riot API | YouTube API
          </Typography>
          <Box>
            <Button
              component="a"
              href="https://www.youtube.com/watch?v=1pCmolcUHWQ"
              variant="outlined"
              className={classes.button}
            >
              Demo
            </Button>
            <Button
              component="a"
              href="https://github.com/timothyalton/league_tracker/tree/master/frontend"
              variant="outlined"
              className={classes.button}
            >
              Front-End Code
            </Button>
            <Button
              component="a"
              href="https://github.com/timothyalton/league_tracker/tree/master/backend"
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

export default LeagueTracker;
