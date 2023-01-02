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
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetpassword } from "../../Redux/Actions/authaction";
function ResetPassword() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [newpass, setNewpass] = useState("");
  const [cnewpass, setCnewpass] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newpass === "") {
      return;
    }
    if (cnewpass === "") {
      return;
    }
    if (newpass !== "" && cnewpass !== "") {
      const data = {
        newPass: newpass,
        confirmNewPass: cnewpass,
      };
      dispatch(resetpassword(data, searchParams.token));
      navigate("/login");
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
                  <Heading>Reset Password</Heading>
                  <Title>Please Enter Your New Passowrd </Title>
                </CardContent>
              </CardLogo>
              <CardLogin elevation={2}>
                <CardContent>
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

export default ResetPassword;
