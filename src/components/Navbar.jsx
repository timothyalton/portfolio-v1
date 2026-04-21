import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@mui/material";
import {
  Menu,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Book,
} from "@mui/icons-material";
import avatar from "../profile.png";
import MobileRightMenuSlider from "@mui/material/Drawer";

const blog = {
  listIcon: <Book />,
  listText: "Blog",
};

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "See My Work",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact Me",
    listPath: "/contactme",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider) => (
    <Box
      sx={{
        width: 250,
        background: "#373737",
        height: "100%",
      }}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar
        sx={(theme) => ({
          display: "block",
          margin: "0.5rem auto",
          width: theme.spacing(13),
          height: theme.spacing(13),
        })}
        src={avatar}
        alt="Profile Picture"
      />
      <Divider style={{ background: "#B1A296" }} />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem
            sx={{
              "&:hover": {
                backgroundColor: "#7395AE",
                color: "#373737",
              },
            }}
            button
            key={key}
            component={Link}
            to={lsItem.listPath}
          >
            <ListItemIcon
              sx={{ color: "#B1A296", "&:hover": { color: "#373737" } }}
            >
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              sx={{ color: "#B1A296", "&:hover": { color: "#373737" } }}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
        <ListItem
          sx={{
            "&:hover": {
              backgroundColor: "#7395AE",
              color: "#373737",
            },
          }}
          button
          component="a"
          href="https://simplemitch.com"
        >
          <ListItemIcon
            sx={{ color: "#B1A296", "&:hover": { color: "#373737" } }}
          >
            {blog.listIcon}
          </ListItemIcon>
          <ListItemText
            sx={{ color: "#B1A296", "&:hover": { color: "#373737" } }}
            primary={blog.listText}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="fixed" style={{ background: "#373737" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Menu style={{ color: "#557A95" }} />
            </IconButton>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", color: "#B1A296" }}
            >
              Welcome to my Portfolio
            </Typography>
            <MobileRightMenuSlider
              anchor="left"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
