import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import airportReducer from "./airportReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  airport: airportReducer,
});
