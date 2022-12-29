import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  register: [],
  login: [],
  google: [],
  forgot: [],
  change: [],
  reset: [],
  wai: [],
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
    setChange: (state, action) => {
      state.change = action.payload;
    },
    setReset: (state, action) => {
      state.reset = action.payload;
    },
    setWhoami: (state, action) => {
      state.wai = action.payload;
    },
  },
});

export const {
  setToken,
  setRegister,
  setLogin,
  setGoogle,
  setForgot,
  setWhoami,
  setChange,
  setReset,
} = authSlicer.actions;

export default authSlicer.reducer;
