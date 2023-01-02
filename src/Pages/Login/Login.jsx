import React, { useEffect, useState } from "react";
import logo from "../../assets/images/petik.png";
<<<<<<< HEAD
import { Cards, Cardss, TextFields, Buttons, Buttonz, Links, BoxAuth, BoxAut } from "../../Styled/MUI/AuthStyles";
import { CardContent, IconButton, InputAdornment } from "@mui/material";
=======
import { Cards, TextFields, Buttons, Buttonz, Links, BoxAuth, CardLogin, CardLogo } from "../../Styled/MUI/AuthStyles";
import { CardContent } from "@mui/material";
>>>>>>> e173c3088ea59053f409edc0c686dadfaa7c649e
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions/authaction";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { Heading, Text } from "../../Styled/ComponentUI/Styles";
import { Row } from "antd";
=======
import { Heading, Title } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "antd";
>>>>>>> e173c3088ea59053f409edc0c686dadfaa7c649e

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
      return;
    }
    if (password === "") {
      return;
    }
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };
      dispatch(login(data));
    }
  };

  return (
    <BoxAuth>
      <Cards>
<<<<<<< HEAD
        <Row style={{ justifyContent: "center", display: "flex" }}>
          <Cardss>
            <CardContent>
              <Links to="/">
                <img className="App-logo" src={logo} alt="logo" />
              </Links>
              <Heading> Log In Your Account</Heading>
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
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Links to="/login">
                <Buttons variant="contained" size="large" disabled={!email || !password} onClick={handleSubmit}>
                  Log In
                </Buttons>
              </Links>
              <GoogleLogin label=" Google" />
              <Text> No Have Account?</Text>
              <Links to="/register">
                <Buttonz variant="outlined" size="small">
                  Register
                </Buttonz>
              </Links>
            </CardContent>
          </Cardss>
=======
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
                  <img className="App-log" src={logo} alt="logo" width="120px" />
                </Links>
              </CardContent>
            </CardLogo>
            <CardLogin elevation={2}>
              <CardContent>
                <TextFields type="email" id="outlined-basic" label="Email" variant="outlined" size="small" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <TextFields type="Password" id="outlined" label="Password" variant="outlined" size="small" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <Links to="/login">
                  <Buttons variant="contained" size="medium" onClick={handleSubmit} disabled={!email || !password}>
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
>>>>>>> e173c3088ea59053f409edc0c686dadfaa7c649e
        </Row>
      </Cards>
    </BoxAuth>
  );
}

export default Login;
