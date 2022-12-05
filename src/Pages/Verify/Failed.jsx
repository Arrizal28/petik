import React from "react";
import verify from "../../assets/images/gagal.png";
import { Boxs, CardBox, Cards } from "../../Styled/MUI/VerifyStyled";
import { Buttonx, Dividers, Links } from "../../Styled/MUI/AuthStyles";

function Failed() {
  return (
    <CardBox>
      <Cards>
        <Boxs>
          <img src={verify} alt="logo" label="Verifikasi Gagal" width="360px" />
          <Boxs>
            <Dividers>verification failed</Dividers>
            <Links to="/register">
              <Buttonx color="primary" variant="outlined" size="medium">
                Register
              </Buttonx>
            </Links>
          </Boxs>
        </Boxs>
      </Cards>
    </CardBox>
  );
}

export default Failed;
