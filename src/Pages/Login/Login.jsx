import React, { useEffect, useState } from "react";
import logo from "../../assets/images/petik.png";
import {
  Cards,
  TextFields,
  Buttons,
  Buttonz,
  Links,
  BoxAuth,
  CardLogin,
  CardLogo,
} from "../../Styled/MUI/AuthStyles";
import { CardContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions/authaction";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import { useNavigate } from "react-router-dom";
import { Heading, Title } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "antd";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControls } from "../../Styled/MUI/AuthStyles";
import NavbarBottom from "../../Mobile/Layout/NavbarMobile";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regexString = /^[A-Za-z]+$/;
    const regex =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexString.test(email)) {
      setIsError(true);
      return;
    }
    if (password === "") {
      return;
    }
    if (regex.test(email) && password !== "") {
      const data = {
        email,
        password,
      };
      dispatch(login(data));
    }
  };

  return (
    <>
      <BoxAuth>
        <Cards>
          <Row
            style={{
              marginTop: 100,
              justifyContent: "center",
              marginBottom: 100,
            }}
          >
            <Col style={{ justifyContent: "center" }}>
              <CardLogo elevation={2}>
                <CardContent>
                  <Links to="/">
                    <img
                      className="App-log"
                      src={logo}
                      alt="logo"
                      width="120px"
                    />
                  </Links>
                </CardContent>
              </CardLogo>
              <CardLogin elevation={2}>
                <CardContent>
                  <TextFields
                    type="email"
                    error={isError}
                    helperText={isError ? "Email not valid" : ""}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <FormControls variant="outlined" required size="small">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControls>
                  <Links to="/login">
                    <Buttons
                      variant="contained"
                      size="medium"
                      onClick={handleSubmit}
                      disabled={!email || !password}
                    >
                      Log In
                    </Buttons>
                  </Links>
                  <Links to="/forgotpassword">
                    <Title>Forgot Password?</Title>
                  </Links>
                </CardContent>
              </CardLogin>
            </Col>
            <Col style={{ justifyContent: "center" }}>
              <CardLogo elevation={2}>
                <CardContent>
                  <Heading>Join</Heading>
                </CardContent>
              </CardLogo>
              <CardLogin elevation={2}>
                <CardContent>
                  <Title> Create Account?</Title>
                  <Links to="/register">
                    <Buttonz variant="outlined" size="medium">
                      Register
                    </Buttonz>
                  </Links>
                  <GoogleLogin label=" Google" />
                </CardContent>
              </CardLogin>
            </Col>
          </Row>
        </Cards>
      </BoxAuth>
      <NavbarBottom />
    </>
  );
}

export default Login;
