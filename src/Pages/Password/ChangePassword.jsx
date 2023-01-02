import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../Redux/Actions/authaction";

function ChangePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [cnewpass, setCnewpass] = useState("");

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
                  <TextFields
                    type="password"
                    id="outlined"
                    label="Old Password"
                    variant="outlined"
                    size="small"
                    required
                    value={oldpass}
                    onChange={(e) => setOldpass(e.target.value)}
                  />
                  <TextFields
                    type="password"
                    id="outlined"
                    label="New Password"
                    variant="outlined"
                    size="small"
                    required
                    value={newpass}
                    onChange={(e) => setNewpass(e.target.value)}
                  />
                  <TextFields
                    type="password"
                    id="outlined"
                    label="Confirm New Password"
                    variant="outlined"
                    size="small"
                    required
                    value={cnewpass}
                    onChange={(e) => setCnewpass(e.target.value)}
                  />
                  <Links to="/login">
                    <Buttons
                      variant="contained"
                      size="medium"
                      onClick={handleSubmit}
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
