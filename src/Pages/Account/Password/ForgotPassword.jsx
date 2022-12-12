import React from "react";
import { Box, Card } from "@mui/material";
import { Row } from "antd";
import TextField from "@mui/material/TextField";

function ForgotPassword() {
  return (
    <>
      <Card style={{ justifyContent: "center", width: 500, height: 600, display: "flex", marginTop: 200, margin: "auto" }}>
        {/* <Row style={{ width: "100%", height: 400, display: "flex", marginTop: 100, margin: 20 }}>
          <h4> Find Your Petik Account</h4>
        </Row> */}

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: 10,
            // display: "flex",
          }}
        >
          <h4> Find Your Petik Account</h4>
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </Box>
      </Card>
    </>
  );
}

export default ForgotPassword;
