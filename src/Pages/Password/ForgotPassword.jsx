import React from "react";
import { Cards, TextFields, Buttons, Links, BoxAuth, CardLogin, CardLogo } from "../../Styled/MUI/AuthStyles";
import { CardContent } from "@mui/material";
import { Heading, Title } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "antd";

function ForgotPassword() {
  return (
    <>
      <BoxAuth>
        <Cards>
          <Row style={{ marginTop: 100, justifyContent: "center", marginBottom: 100 }}>
            <Col style={{ justifyContent: "center" }}>
              <CardLogo elevation={2}>
                <CardContent>
                  <Heading> Find Your Account</Heading>
                  <Title>Please enter your email For get new password </Title>
                </CardContent>
              </CardLogo>
              <CardLogin elevation={2}>
                <CardContent>
                  <TextFields type="email" id="outlined-basic" label="Email" variant="outlined" size="small" required />
                  <Links to="/resetpassword">
                    <Buttons variant="contained" size="medium">
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
