import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import YouTube from "@mui/icons-material/YouTube";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <BottomNavigation
        width="auto"
        style={{ background: "#B1A296" }}
        sx={{
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
        }}
      >
        <BottomNavigationAction
          style={{ padding: 0 }}
          icon={<YouTube />}
          component="a"
          href="https://www.youtube.com/channel/UCXxidZCATHK30zGQa8NP9eA"
        />
        <BottomNavigationAction
          style={{ padding: 0 }}
          icon={<LinkedIn />}
          component="a"
          href="https://www.linkedin.com/in/mitchell-alton"
        />
        <BottomNavigationAction
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
