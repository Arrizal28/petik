import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getwhoami } from "../../Redux/Actions/authaction";
import { useDispatch, useSelector } from "react-redux";

function Protected({ children, types }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, wai } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      if (token) {
        dispatch(
          getwhoami((status) => {
            if (status === 500) {
              navigate("/login");
            }
          })
        );
      }
    })();
  }, [token, navigate, dispatch]);

  useEffect(() => {
    if (wai?.data?.role) {
      if (!types.some((type) => type === wai.data.role)) {
        navigate("/");
      }
    }
  }, [wai?.data?.role, types, navigate]);

  if (!token) {
    return <Navigate to={`/login`} />;
  }

  return children;
}

export default Protected;
