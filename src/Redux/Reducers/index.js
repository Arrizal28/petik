import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

export default combineReducers({
    auth: authReducer,
    user: userReducer,
});