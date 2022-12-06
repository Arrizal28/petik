import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cbio: null,
  sbio: null,
  ubio: null,
  authme: null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCreateBio: (state, action) => {
      state.cbio = action.payload;
    },
    setShowBio: (state, action) => {
      state.sbio = action.payload;
    },
    setUpdateBio: (state, action) => {
      state.ubio = action.payload;
    },
    setAuthMe: (state, action) => {
      state.authme = action.payload;
    },
  },
});

export const { setCreateBio, setShowBio, setUpdateBio, setAuthMe } = authSlicer.actions;

export default authSlicer.reducer;
