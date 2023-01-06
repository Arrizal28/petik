import React, { useState, useEffect } from "react";
import {
  Cards,
  TextFields,
  Buttons,
  Links,
  BoxAuth,
  CardLogin,
  CardLogo,
} from "../../Styled/MUI/AuthStyles";
import { CardContent } from "@mui/material";
import { Heading, Title } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../Redux/Actions/authaction";

function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { token } = useSelector((state) => state.auth);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regexString = /^[A-Za-z]+$/;
    const regex =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "") {
      return;
    }
    if (regexString.test(email)) {
      setIsError(true);
      return;
    }
    if (regex.test(email)) {
      const data = {
        email: email,
      };
      dispatch(forgotPassword(data));
      navigate("/login");
      return;
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
                  <Heading> Find Your Account</Heading>
                  <Title>Please enter your email For get new password </Title>
                </CardContent>
              </CardLogo>
              <CardLogin elevation={2}>
                <CardContent>
                  <TextFields
                    error={isError}
                    helperText={isError ? "Email not valid" : ""}
                    type="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                  <Links to="/resetpassword">
                    <Buttons
                      variant="contained"
                      size="medium"
                      onClick={handleSubmit}
                      disabled={!email}
                    >
                      Continue
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

export default ForgotPassword;
