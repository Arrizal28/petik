import { Card, Fab } from "@mui/material";
import React from "react";

import verify from "../../assets/images/gagal.png";
import { Link } from "react-router-dom";

function Failed() {
  return (
    <div>
      <Card className="verify">
        <div>
          <img src={verify} alt="logo" label="Verifikasi Gagal" />
          <h5 styles={{ margin: 200 }}> Verifikasi Gagal</h5>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Fab color="primary" variant="extended" size="medium" sx={{ mr: 1 }}>
              Register
            </Fab>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Failed;
