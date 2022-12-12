import axios from "axios";
import {
  setToken,
  setRegister,
  setLogin,
  setForgot,
  setWhoami,
} from "../Reducers/authReducer";

export const register = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/register`,
      data
    );
    if (result.data.data.status) {
      dispatch(setRegister(result.data));
      alert(result.data.message);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/login`,
      data
    );
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

export const loginWithGoogle = (accessToken) => async (dispatch) => {
  const data = {
    access_token: accessToken,
  };
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/login-google`,
      data
    );
    if (result.data.data.token) {
      localStorage.setItem("token", result.data.data.token);
      dispatch(setToken(result.data.data.token));
      alert("success!");
    }
  } catch (error) {
    alert(error.response.message);
  }
};

export const forgotPassword = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/forgot-password`,
      data
    );
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

export const whoami = (callback) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/auth/whoami`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setWhoami(result.data));
    }
  } catch (error) {
    if (error.response.status === 401) {
      console.log(error);
      callback(error.response.status);
    }
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch(setToken(null));
};
