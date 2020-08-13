import React from "react";
import Navbar from "./Navbar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  TextareaAutosize,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Translate } from "@material-ui/icons";
import MyForm from "./MyForm";
import MaterialuiForm from "./MaterialuiForm";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#3E3E3E",
    height: "100vh",
  },
  form: {
    borderBottom: "0px!important",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "#7395AE",
    borderColor: "#7395AE",
  },
  heading: {
    color: "#7395AE",
    textAlign: "center",
    textTransform: "uppercase",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#7395AE",
    },
    "& label": {
      color: "#B1A296",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#B1A296",
      },
      "&:hover fieldset": {
        borderColor: "#B1A296",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#B1A296",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div>
        {/* <MyForm /> */}
        <MaterialuiForm />
      </div>
      {/* <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography className={classes.heading} variant="h5">
              Hire or Contact me
            </Typography>
            <InputField
              style={{ borderBottom: "0px!important" }}
              multiline={false}
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />

            <InputField
              multiline={false}
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />

            <InputField
              multiline={true}
              rows="3"
              rowsMax="20"
              fullWidth={true}
              label="Message"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            ></InputField>

            <br />
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              contact me
            </Button>
          </Box>
        </Grid>
      </Box> */}
    </>
  );
};

export default Contact;
