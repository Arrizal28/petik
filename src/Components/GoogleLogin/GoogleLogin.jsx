import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import googleLogo from "../../assets/images/googleLogo.svg";
import { Buttonx, Dividers } from "../../Styled/MUI/AuthStyles";
import { loginWithGoogle } from "../../Redux/Actions/authaction";

function GoogleLogin({ label }) {
  const dispatch = useDispatch();

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      dispatch(loginWithGoogle(access_token));
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <>
      <Dividers>Or Join With</Dividers>
      <Buttonx variant="outlined" size="small" onClick={googleLogin}>
        <img src={googleLogo} alt="google log " width="25px" />
        {label}
      </Buttonx>
    </>
  );
}

export default GoogleLogin;
