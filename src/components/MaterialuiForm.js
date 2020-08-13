import React, { useState } from "react";
import axios from "axios";
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

function MaterialuiForm() {
  const classes = useStyles();

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xrgydyag",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <div className={classes.form}>
      <Typography className={classes.heading} variant="h5">
        Hire or Contact me
      </Typography>
      {/* <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form> */}

      <form onSubmit={handleOnSubmit}>
        <InputField
          style={{ borderBottom: "0px!important" }}
          multiline={false}
          fullWidth={true}
          label="Name"
          id="name"
          type="text"
          name="name"
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
          id="email"
          type="email"
          name="email"
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
          id="message"
          type="text"
          name="message"
          variant="outlined"
          inputProps={{ style: { color: "white" } }}
          margin="dense"
          size="medium"
        ></InputField>

        <br />
        <Button
          type="submit"
          disabled={serverState.submitting}
          className={classes.button}
          variant="outlined"
          fullWidth={true}
          endIcon={<SendIcon />}
        >
          contact me
        </Button>
        {serverState.status && (
          <p
            style={{ color: "#7395AE" }}
            className={!serverState.status.ok ? "errorMsg" : ""}
          >
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
}

export default MaterialuiForm;
