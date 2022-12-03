import React from "react";
import { Box, Fab, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function Create() {
  return (
    <div>
      <Box sx={{ mt: 2, marginLeft: "auto" }}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Tooltip title="Sign In">
            <Fab color="primary" variant="extended" size="medium" sx={{ mr: 1 }}>
              Log in
            </Fab>
          </Tooltip>
        </Link>

        <Link to="/register" style={{ textDecoration: "none" }}>
          <Tooltip title="Sign Up">
            <Fab color="primary" variant="extended" size="medium" sx={{ mr: 1 }}>
              Register
            </Fab>
          </Tooltip>
        </Link>
      </Box>
    </div>
  );
}

export default Create;
