import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ProjectCarousel from "./ProjectCarousel";
import typewarsGif from "../images/typewars.gif";
import typewars1 from "../images/typewars1.png";
import typewars2 from "../images/typewars2.png";
import typewars3 from "../images/typewars3.png";
import typewars4 from "../images/typewars4.png";

const buttonSx = {
  marginTop: "1rem",
  color: "#7395AE",
  borderColor: "#7395AE",
  "&:hover": { backgroundColor: "#7395AE", color: "#373737" },
  marginRight: "10px",
  marginBottom: "10px",
};

const TypeWars = () => {
  return (
    <>
      <Box component="div" style={{ marginBottom: "100px" }}>
        <ProjectCarousel
          images={[typewarsGif, typewars1, typewars2, typewars3, typewars4]}
        />
        <Box sx={{ justifyContent: "center", textAlign: "center" }}>
          <Typography variant="h3" sx={{ color: "#7395AE" }}>
            TYPE WARS!
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "#B1A296", textTransform: "uppercase" }}>
            A CLI Application to test your typing speed and keep track of high
            scores, with different themes.
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "#B1A296", textTransform: "uppercase" }}>
            Ruby | AFPlay
          </Typography>
          <Box>
            <Button component="a" href="https://www.youtube.com/watch?v=QRCCYkc8oMU&t=29s" variant="outlined" sx={buttonSx}>
              Demo
            </Button>
            <Button component="a" href="https://github.com/timothyalton/Type-Wars-" variant="outlined" sx={buttonSx}>
              Code
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TypeWars;
