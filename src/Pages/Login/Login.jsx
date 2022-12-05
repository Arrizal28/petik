import React, { useEffect, useState } from "react";
import logo from "../../assets/images/petik.png";
<<<<<<< HEAD:src/Pages/Login/Login.js
import { Cards, Cardss, TextFields, Buttons, Buttonz, Links, BoxAuth } from "../../Styled/MUI/AuthStyles";
=======
import {
  Cards,
  Cardss,
  TextFields,
  Buttons,
  Buttonz,
  Links,
} from "../../Styled/MUI/AuthStyles";
>>>>>>> 8fd5fa6b76a70ce986a39fc2324855c280a98bf6:src/Pages/Login/Login.jsx
import { CardContent, IconButton, InputAdornment } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import { login } from "../../Redux/Actions/authaction";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import { useNavigate } from "react-router-dom";
import { Heading, Text } from "../../Styled/ComponentUI/Styles";

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
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
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
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Links to="/login">
              <Buttons
                variant="contained"
                size="large"
                disabled={!email || !password}
                onClick={handleSubmit}
              >
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
      </Cards>
    </BoxAuth>
  );
}

export default Login;
