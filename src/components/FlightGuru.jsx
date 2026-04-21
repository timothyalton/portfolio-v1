import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ProjectCarousel from "./ProjectCarousel";
import flightguru1 from "../images/flightguru1.png";
import flightguru2 from "../images/flightguru2.png";
import flightguru3 from "../images/flightguru3.png";
import flightguru4 from "../images/flightguru4.png";

const buttonSx = {
  marginTop: "1rem",
  color: "#7395AE",
  borderColor: "#7395AE",
  "&:hover": { backgroundColor: "#7395AE", color: "#373737" },
  marginRight: "10px",
  marginBottom: "10px",
};

const FlightGuru = () => {
  return (
    <>
      <Box component="div" style={{ marginBottom: "100px" }}>
        <ProjectCarousel
          images={[
            { src: "https://i.imgur.com/FNahyZJ.gif", alt: "Flight Guru Preview GIF" },
            flightguru1,
            flightguru2,
            flightguru3,
            flightguru4,
          ]}
        />
        <Box sx={{ justifyContent: "center", textAlign: "center" }}>
          <Typography variant="h3" sx={{ color: "#7395AE" }}>
            FLIGHT GURU
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "#B1A296", textTransform: "uppercase" }}>
            An application to look up your flight info and find restaurants in
            and near your terminal.
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "#B1A296", textTransform: "uppercase" }}>
            Ruby | Ruby on Rails | SQLite3 | HTML/CSS | AviationStack API |
            Google Places API
          </Typography>
          <Box>
            <Button component="a" href="https://www.youtube.com/watch?v=HRak-gZP3Q0&t=173s" variant="outlined" sx={buttonSx}>
              Demo
            </Button>
            <Button component="a" href="https://github.com/timothyalton/flight-guru-app" variant="outlined" sx={buttonSx}>
              Code
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FlightGuru;
