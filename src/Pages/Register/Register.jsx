import React, { useState, useEffect } from "react";
import logo from "../../assets/images/petik.png";
import {
  Cards,
  Cardss,
  TextFields,
  Buttons,
  Buttonz,
  Links,
  Dividers,
  BoxAuth,
} from "../../Styled/MUI/AuthStyles";
import { CardContent, IconButton, InputAdornment } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import { register } from "../../Redux/Actions/authaction";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import { Heading, Text } from "../../Styled/ComponentUI/Styles";
import { useNavigate } from "react-router-dom";

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
            <Heading> Create Your Account</Heading>
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
            <TextFields
              type="password"
              id="outlined"
              label="Confirm Password"
              variant="outlined"
              size="small"
              value={confirm_password}
              onChange={(e) => setConfirm_Password(e.target.value)}
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
            <Links to="/register">
              <Buttons
                variant="contained"
                size="large"
                disabled={!email || !password}
                onClick={handleSubmit}
              >
                Register
              </Buttons>
            </Links>
            <GoogleLogin label=" Google" />
            <Dividers>
              <Text> Allready Have Account?</Text>
            </Dividers>
            <Links to="/login">
              <Buttonz variant="outlined" size="small">
                Log in
              </Buttonz>
            </Links>
          </CardContent>
        </Cardss>
      </Cards>
    </BoxAuth>
  );
}

export default Register;
