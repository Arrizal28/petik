import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cbio: [],
  sbio: [],
  ubio: [],
  notif: [],
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
    setNotif: (state, action) => {
      state.notif = action.payload;
    },
  },
});

export const { setCreateBio, setShowBio, setUpdateBio, setAuthMe, setNotif } =
  authSlicer.actions;

export default authSlicer.reducer;
