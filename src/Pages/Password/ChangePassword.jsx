import React, { useState } from "react";
import {
  Cards,
  Buttons,
  Links,
  BoxAuth,
  CardLogin,
  CardLogo,
} from "../../Styled/MUI/AuthStyles";
import { CardContent } from "@mui/material";
import { Heading, Title } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../Redux/Actions/authaction";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControls } from "../../Styled/MUI/AuthStyles";

function ChangePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [cnewpass, setCnewpass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [showNCPassword, setShowNCPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowCPassword = () => setShowCPassword((show) => !show);

  const handleMouseDownCPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowNCPassword = () => setShowNCPassword((show) => !show);

  const handleMouseDownNCPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (oldpass === "") {
      return;
    }
    if (newpass === "") {
      return;
    }
    if (cnewpass === "") {
      return;
    }
    if (oldpass !== "" && newpass !== "" && cnewpass !== "") {
      const data = {
        oldPassword: oldpass,
        newPassword: newpass,
        confirmNewPassword: cnewpass,
      };
      dispatch(changePassword(data));
      navigate("/");
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
                  <Heading>Change Password</Heading>
                  <Title>Please Enter Your New Passowrd </Title>
                </CardContent>
              </CardLogo>
              <CardLogin elevation={2}>
                <CardContent>
                  <FormControls variant="outlined" required size="small">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Old Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      value={oldpass}
                      onChange={(e) => setOldpass(e.target.value)}
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
                  <FormControls variant="outlined" required size="small">
                    <InputLabel htmlFor="outlined-adornment-password">
                      New Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showCPassword ? "text" : "password"}
                      value={newpass}
                      onChange={(e) => setNewpass(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowCPassword}
                            onMouseDown={handleMouseDownCPassword}
                            edge="end"
                          >
                            {showCPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControls>
                  <FormControls variant="outlined" required size="small">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm New Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showNCPassword ? "text" : "password"}
                      value={cnewpass}
                      onChange={(e) => setCnewpass(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowNCPassword}
                            onMouseDown={handleMouseDownNCPassword}
                            edge="end"
                          >
                            {showNCPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
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
                      disabled={!oldpass || !newpass || !cnewpass}
                    >
                      Save
                    </Buttons>
                  </Links>
                </CardContent>
              </CardLogin>
            </Col>
          </Row>
        </Cards>
      </BoxAuth>
    </>
  );
}

export default ChangePassword;
