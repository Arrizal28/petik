<<<<<<< HEAD
// import React, { useEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// function Protected({ children }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
=======
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected({ children }) {
  const navigate = useNavigate();
>>>>>>> 8fd5fa6b76a70ce986a39fc2324855c280a98bf6

//   const { token } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   }, [token, navigate]);

//   return children;
// }

// export default Protected;
