import React from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";
import logo from "../../assets/images/petik.png";
import bgimg from "../../assets/images/bg.png";
import { Link } from "react-router-dom";

const stylesCard = {
  width: 425,
  height: 500,
  justifyContent: "center",
  margin: "auto",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  borderRadius: 20,
};
const sCard = {
  width: 425,
  height: 520,
  justifyContent: "center",
  margin: "auto",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#3596e7",
  borderRadius: 20,
};

const sTextfield = {
  width: 390,
  margin: 15,
  borderRadius: 20,
  display: "flex",
};

const sButton = {
  width: 300,
  marginTop: 15,
  borderRadius: 20,
  display: "flex",
  justifyContent: "center",
  margin: "auto",
};

const sLink = {
  textDecoration: "none",
};

function Register() {
  return (
    <div style={{ marginTop: 150, backgroundImage: `url(${bgimg})` }}>
      <Card className="register" style={sCard}>
        <Card className="register" style={stylesCard}>
          <CardContent>
            <Link style={sLink} to="/">
              <img className="App-logo" src={logo} alt="logo" />
            </Link>
            <h3 style={{ margin: 15, borderRadius: 20 }}> Create Your Account</h3>
            <TextField style={sTextfield} id="outlined-basic" label="Email" variant="outlined" size="small" />
            <TextField style={sTextfield} id="outlined" label="Password" variant="outlined" size="small" />
            <Link style={sLink} to="/register">
              <Button style={sButton} variant="contained" size="large">
                Register
              </Button>
            </Link>
            <h6 style={{ margin: 15, borderRadius: 20 }}> Allready Have Account?</h6>
            <Link style={sLink} to="/login">
              <Button style={{ borderRadius: 10 }} variant="outlined" size="small">
                Log in
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}

export default Register;
