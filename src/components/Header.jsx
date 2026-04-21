import React from "react";
import { Typography, Avatar, Grid, Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import avatar from "../profile.png";

const Header = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
      }}
    >
      <Grid container justifyContent="center">
        <Avatar
          sx={(theme) => ({
            width: theme.spacing(15),
            height: theme.spacing(15),
            margin: theme.spacing(1),
          })}
          src={avatar}
          alt="Profile Picture"
        />
      </Grid>
      <Typography variant="h4" sx={{ color: "#7395AE" }}>
        <TypeAnimation
          sequence={["Mitchell Alton"]}
          speed={50}
          cursor={false}
        />
      </Typography>
      <br />
      <Typography variant="h5" sx={{ color: "#B1A296", marginBottom: "3rem" }}>
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
