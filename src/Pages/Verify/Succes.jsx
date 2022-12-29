import React from "react";
import { useNavigate } from "react-router-dom";

import verify from "../../assets/images/verify.png";
import { Boxs, CardBox, Cards } from "../../Styled/MUI/VerifyStyled";
import { Buttonx, Dividers, Links } from "../../Styled/MUI/AuthStyles";
function Succes() {
  const navigate = useNavigate();
  return (
    <CardBox>
      <Cards>
        <Boxs>
          <img src={verify} alt="logo" label="Verifikasi Gagal" width="360px" />
          <Boxs>
            <Dividers>verification Succes</Dividers>
            <Links to="/login">
              <Buttonx
                color="primary"
                variant="outlined"
                size="medium"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Log In
              </Buttonx>
            </Links>
          </Boxs>
        </Boxs>
      </Cards>
    </CardBox>
  );
}

export default Succes;
