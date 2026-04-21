import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

const InputField = styled(TextField)({
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
});

function MaterialuiForm() {
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
    <div
      style={{
        borderBottom: "0px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "#7395AE", textAlign: "center", textTransform: "uppercase" }}
      >
        Get in touch!
      </Typography>

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
          rows={3}
          maxRows={20}
          fullWidth={true}
          label="Message"
          id="message"
          type="text"
          name="message"
          variant="outlined"
          inputProps={{ style: { color: "white" } }}
          margin="dense"
          size="medium"
        />

        <br />
        <Button
          type="submit"
          disabled={serverState.submitting}
          variant="outlined"
          fullWidth={true}
          endIcon={<SendIcon />}
          sx={{
            marginTop: "1rem",
            color: "#7395AE",
            borderColor: "#7395AE",
          }}
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
