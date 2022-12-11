import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cbio: [],
  sbio: [],
  ubio: [],
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
  },
});

export const { setCreateBio, setShowBio, setUpdateBio, setAuthMe } =
  authSlicer.actions;

export default authSlicer.reducer;
