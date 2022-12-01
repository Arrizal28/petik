import { Card, Fab } from "@mui/material";
import React from "react";

import verify from "../../assets/images/verify.png";
import { Link } from "react-router-dom";

function Succes() {
  return (
    <div>
      <Card className="verify">
        <div>
          <img src={verify} alt="logo" label="Verifikasi Berhasil" />
          <h5 styles={{ margin: "200px" }}> Verifikasi Berhasil</h5>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Fab color="primary" variant="extended" size="medium" sx={{ mr: 1 }}>
              Log in
            </Fab>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Succes;
