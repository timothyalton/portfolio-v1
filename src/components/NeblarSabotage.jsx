import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ProjectCarousel from "./ProjectCarousel";
import neblarsabotageGif from "../images/neblarsabotage.gif";
import neblarsabotage1 from "../images/neblarsabotage1.png";
import neblarsabotage2 from "../images/neblarsabotage2.png";
import neblarsabotage3 from "../images/neblarsabotage3.png";
import neblarsabotage4 from "../images/neblarsabotage4.png";

const buttonSx = {
  marginTop: "1rem",
  color: "#7395AE",
  borderColor: "#7395AE",
  "&:hover": { backgroundColor: "#7395AE", color: "#373737" },
  marginRight: "10px",
  marginBottom: "10px",
};

const NeblarSabotage = () => {
  return (
    <>
      <Box component="div" style={{ marginBottom: "100px" }}>
        <ProjectCarousel
          images={[neblarsabotageGif, neblarsabotage1, neblarsabotage2, neblarsabotage3, neblarsabotage4]}
        />
        <Box sx={{ justifyContent: "center", textAlign: "center" }}>
          <Typography variant="h3" sx={{ color: "#7395AE" }}>
            NEBLAR SABOTAGE
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "#B1A296", textTransform: "uppercase" }}>
            A CLI application that is a math puzzle game where you need to save
            your ship and crew.
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "#B1A296", textTransform: "uppercase" }}>
            C++
          </Typography>
          <Box>
            <Button component="a" href="https://www.youtube.com/watch?v=r4NU2K3ID0M&t=168s" variant="outlined" sx={buttonSx}>
              Demo
            </Button>
            <Button component="a" href="https://github.com/timothyalton/NeblarSabotage" variant="outlined" sx={buttonSx}>
              Code
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NeblarSabotage;
