import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ProjectCarousel from "./ProjectCarousel";
import viruscity1 from "../images/viruscity1.png";
import viruscity2 from "../images/viruscity2.png";
import viruscity3 from "../images/viruscity3.png";
import viruscity4 from "../images/viruscity4.png";

const buttonSx = {
  marginTop: "1rem",
  color: "#7395AE",
  borderColor: "#7395AE",
  "&:hover": { backgroundColor: "#7395AE", color: "#373737" },
  marginRight: "10px",
  marginBottom: "10px",
};

const VirusCity = () => {
  return (
    <>
      <Box component="div" style={{ marginBottom: "100px" }}>
        <ProjectCarousel
          images={[
            { src: "https://i.imgur.com/apjOHQ6.gif", alt: "Virus City Preview GIF" },
            viruscity1,
            viruscity2,
            viruscity3,
            viruscity4,
          ]}
        />
        <Box sx={{ justifyContent: "center", textAlign: "center" }}>
          <Typography variant="h3" sx={{ color: "#7395AE" }}>
            Virus City
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "#B1A296", textTransform: "uppercase" }}>
            A simulation application to show the rate of infection, with the
            option to put certain quarantine parameters in place.
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "#B1A296", textTransform: "uppercase" }}>
            Ruby on Rails | SQLite3 | JavaScript | HTML/CSS
          </Typography>
          <Box>
            <Button component="a" href="https://www.youtube.com/watch?v=MhRjIXeBixw" variant="outlined" sx={buttonSx}>
              Demo
            </Button>
            <Button component="a" href="https://github.com/timothyalton/virusCity/tree/master/frontend" variant="outlined" sx={buttonSx}>
              Front-End Code
            </Button>
            <Button component="a" href="https://github.com/timothyalton/virusCity/tree/master/backend" variant="outlined" sx={buttonSx}>
              Back-End Code
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VirusCity;
