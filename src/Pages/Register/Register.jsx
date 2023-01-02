import React, { useState, useEffect } from "react";
import logo from "../../assets/images/petik.png";
import { Cards, TextFields, Buttons, Buttonz, Links, BoxAuth, CardLogin, CardLogo } from "../../Styled/MUI/AuthStyles";
import { CardContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/Actions/authaction";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import { Heading, Title } from "../../Styled/ComponentUI/Styles";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (confirm_password === "") {
      alert("confirm Password is required");
      return;
    }
    if (email !== "" && password !== "" && confirm_password !== "") {
      const data = {
        email,
        password,
        confirm_password,
      };
      dispatch(register(data));
      navigate("/login");
    }
  };

  return (
    <>
      <BoxAuth>
        <Cards>
          <Row style={{ marginTop: 100, justifyContent: "center", marginBottom: 100 }}>
            <Col style={{ justifyContent: "center" }}>
              <CardLogo elevation={2}>
                <CardContent>
                  <Links to="/">
                    <img className="App-log" src={logo} alt="logo" width="120px" />
                  </Links>
                </CardContent>
              </CardLogo>
              <CardLogin elevation={2}>
                <CardContent>
                  <TextFields type="email" id="outlined-basic" label="Email" variant="outlined" size="small" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <TextFields type="password" id="outlined" label="Password" variant="outlined" size="small" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <TextFields type="password" id="outlined" label="Confirm Password" variant="outlined" size="small" value={confirm_password} onChange={(e) => setConfirm_Password(e.target.value)} required />
                  <Links to="/register">
                    <Buttons variant="contained" size="medium" disabled={!email || !password} onClick={handleSubmit}>
                      Register
                    </Buttons>
                  </Links>
                </CardContent>
              </CardLogin>
            </Col>
            <Col style={{ justifyContent: "center" }}>
              <CardLogo elevation={2}>
                <CardContent>
                  <Heading>Log In</Heading>
                </CardContent>
              </CardLogo>
              <CardLogin elevation={2}>
                <CardContent>
                  <Title> Enter Account?</Title>
                  <Links to="/login">
                    <Buttonz variant="outlined" size="medium">
                      Log In
                    </Buttonz>
                  </Links>
                  <GoogleLogin label=" Google" />
                </CardContent>
              </CardLogin>
            </Col>
          </Row>
        </Cards>
      </BoxAuth>
    </>
  );
}

export default Register;
