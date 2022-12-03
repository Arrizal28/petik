import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  register: [],
  login: [],
  google: [],
  forgot: [],
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRegister: (state, action) => {
        state.register = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setGoogle: (state, action) => {
      state.login = action.payload;
    },
    setForgot: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { setToken, setRegister, setLogin, setGoogle, setForgot } = authSlicer.actions;

export default authSlicer.reducer;