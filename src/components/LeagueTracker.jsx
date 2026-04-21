import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ProjectCarousel from "./ProjectCarousel";
import leaguetrackerGif from "../images/leaguetracker.gif";
import leaguetracker1 from "../images/leaguetracker1.png";
import leaguetracker2 from "../images/leaguetracker2.png";
import leaguetracker3 from "../images/leaguetracker3.png";
import leaguetracker4 from "../images/leaguetracker4.png";

const buttonSx = {
  marginTop: "1rem",
  color: "#7395AE",
  borderColor: "#7395AE",
  "&:hover": { backgroundColor: "#7395AE", color: "#373737" },
  marginRight: "10px",
  marginBottom: "10px",
};

const LeagueTracker = () => {
  return (
    <>
      <Box component="div" style={{ marginBottom: "100px" }}>
        <ProjectCarousel
          images={[leaguetrackerGif, leaguetracker1, leaguetracker2, leaguetracker3, leaguetracker4]}
        />
        <Box sx={{ justifyContent: "center", textAlign: "center" }}>
          <Typography variant="h3" sx={{ color: "#7395AE" }}>
            LEAGUE TRACKER
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "#B1A296", textTransform: "uppercase" }}>
            An application to track your League of Legends ranked games and look
            up other profiles.
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "#B1A296", textTransform: "uppercase" }}>
            Ruby | Ruby on Rails | PostgreSQL | JavaScript | ReactJS | CSS |
            Riot API | YouTube API
          </Typography>
          <Box>
            <Button component="a" href="https://www.youtube.com/watch?v=1pCmolcUHWQ" variant="outlined" sx={buttonSx}>
              Demo
            </Button>
            <Button component="a" href="https://github.com/timothyalton/league_tracker/tree/master/frontend" variant="outlined" sx={buttonSx}>
              Front-End Code
            </Button>
            <Button component="a" href="https://github.com/timothyalton/league_tracker/tree/master/backend" variant="outlined" sx={buttonSx}>
              Back-End Code
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LeagueTracker;
