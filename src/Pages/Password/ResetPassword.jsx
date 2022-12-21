import React from "react";
import { Cards, TextFields, Buttons, Links, BoxAuth, CardLogin, CardLogo } from "../../Styled/MUI/AuthStyles";
import { CardContent } from "@mui/material";
import { Heading, Title } from "../../Styled/ComponentUI/Styles";
import { Col, Row } from "antd";
function ResetPassword() {
  return (
    <>
      <BoxAuth>
        <Cards>
          <Row style={{ marginTop: 100, justifyContent: "center", marginBottom: 100 }}>
            <Col style={{ justifyContent: "center" }}>
              <CardLogo elevation={2}>
                <CardContent>
                  <Heading>Reset Password</Heading>
                  <Title>Please Enter Your New Passowrd </Title>
                </CardContent>
              </CardLogo>
              <CardLogin elevation={2}>
                <CardContent>
                  <TextFields type="password" id="outlined" label="New Password" variant="outlined" size="small" required />
                  <TextFields type="password" id="outlined" label="Confirm New Password" variant="outlined" size="small" required />
                  <Links to="/login">
                    <Buttons variant="contained" size="medium">
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

export default ResetPassword;
