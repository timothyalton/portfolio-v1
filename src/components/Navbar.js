import React, { useState, useEffect } from "react";
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
} from "@material-ui/core";
import {
  Menu,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Book,
} from "@material-ui/icons";
import avatar from "../profile.png";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#373737",
    height: "100%",
  },
  btnHover: {
    "&:hover": {
      backgroundColor: "#7395AE",
      color: "#373737",
    },
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#B1A296",
    "&:hover": {
      color: "#373737",
    },
  },
  navtitle: {
    textAlign: "center",
    color: "#B1A296",
  },
  scrolled: {
    position: "fixed",
    top: "0",
    left: "0",
  },
}));

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

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Profile Picture" />
      <Divider style={{ background: "#B1A296" }} />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem
            className={classes.btnHover}
            button
            key={key}
            component={Link}
            to={lsItem.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
        <ListItem
          className={classes.btnHover}
          button
          component="a"
          href="https://simplemitch.com"
        >
          <ListItemIcon className={classes.listItem}>
            {blog.listIcon}
          </ListItemIcon>
          <ListItemText className={classes.listItem} primary={blog.listText} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="sticky" style={{ background: "#373737" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Menu style={{ color: "#557A95" }} />
            </IconButton>
            <Typography variant="h5" className={classes.navtitle}>
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
