import axios from "axios";
import { setToken, setRegister, setLogin, setGoogle, setForgot } from "../Reducers/authReducer";

export const register = (data) => async (dispatch) => {
  try {
    const result = await axios.post(`${process.env.REACT_APP_AUTH_API}/auth/register`, data);
    if (result.data.status) {
      dispatch(setRegister(result.data));
      alert(result.data.message);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const result = await axios.post(`${process.env.REACT_APP_AUTH_API}/auth/login`, data);
    if (result.data.status) {
      localStorage.setItem("token", result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setLogin(result.data));
      alert(result.data.message);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const loginWithGoogle = (accessToken, access_token) => async (dispatch) => {
  // const data = {
  //   access_token: accessToken,
  // };
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/login-google?access_token=${access_token}`
      // data
    );
    if (result.data.token) {
      localStorage.setItem("token", result.data.token);
      dispatch(setToken(result.data.token));
      alert("success!");
    }
  } catch (error) {
    alert(error.response.message);
  }
};

export const forgotPassword = (data) => async (dispatch) => {
  try {
    const result = await axios.post(`${process.env.REACT_APP_AUTH_API}/auth/forgot-password`, data);
    if (result.data.status) {
      dispatch(setForgot(result.data));
      alert(result.data.message);
    }
  } catch (error) {
    alert(error.message);
  }
};

export const resetpassword = (data) => async () => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/reset-password?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhcnJpemFsNHJyemVuQGdtYWlsLmNvbSIsImlhdCI6MTY3MDAzMTM5MSwiZXhwIjoxNjcwMDMyMjkxfQ.XMo_108aATQl0dwQRAYwEeG_lOV3oWezcqbQ7j_AgxY`,
      data
    );
    if (result.data.status) {
      alert("success!");
    }
  } catch (error) {
    alert(error.message);
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch(setToken(null));
};
