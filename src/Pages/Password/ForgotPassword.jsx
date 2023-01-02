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
  const [email, setEmail] = useState();
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
    if (email !== "") {
      const data = {
        email,
      };
      dispatch(forgotPassword(data));
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
                  <Heading> Find Your Account</Heading>
                  <Title
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  >
                    Please enter your email For get new password{" "}
                  </Title>
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
                    required
                  />
                  <Links to="/resetpassword">
                    <Buttons
                      variant="contained"
                      size="medium"
                      onClick={handleSubmit}
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
