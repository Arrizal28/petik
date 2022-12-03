import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../../Redux/Actions/authaction";

function GoogleLogin({ label }) {
  const dispatch = useDispatch();

  const googleLogin = useGoogleLogin({
    onSuccess: async (res) => {
      console.log("succes", res);
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <div className="d-grid">
      <div className="m-auto">
        <Button variant="primary" onClick={googleLogin}>
          <FontAwesomeIcon icon={faGoogle} /> {label}
        </Button>
      </div>
    </div>
  );
}

export default GoogleLogin;
