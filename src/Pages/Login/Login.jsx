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
import { CardContent, IconButton, InputAdornment } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import { login } from "../../Redux/Actions/authaction";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import { useNavigate } from "react-router-dom";
import { Heading, Title } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "antd";
import swal from "sweetalert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      swal({
        title: "Email is required!",
        icon: "warning",
        button: "OK",
      });
      return;
    }
    if (password === "") {
      swal({
        title: "Password is required!",
        icon: "warning",
        button: "OK",
      });
      return;
    }
    if (email !== "" && password !== "") {
      swal({
        title: "Log In Success!",
        text: "You clicked the button!",
        icon: "success",
        button: "Enter",
      });
      const data = {
        email,
        password,
      };
      dispatch(login(data));
    }
  };

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
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
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon style={{ marginRight: 8 }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextFields
                  type="password"
                  id="outlined"
                  label="Password"
                  variant="outlined"
                  size="small"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

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
  );
}

export default Login;
