import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cflight: [],
  eflight: [],
  dflight: [],
  delflight: [],
  getusers: [],
  getuser: [],
};

const airportSlicer = createSlice({
  name: "airport",
  initialState,
  reducers: {
    setCflight: (state, action) => {
      state.cflight = action.payload;
    },
    setEflight: (state, action) => {
      state.eflight = action.payload;
    },
    setDflight: (state, action) => {
      state.dflight = action.payload;
    },
    setDelflight: (state, action) => {
      state.delflight = action.payload;
    },
    setUsers: (state, action) => {
      state.getusers = action.payload;
    },
    setUser: (state, action) => {
      state.getuser = action.payload;
    },
  },
});

export const {
  setEflight,
  setCflight,
  setDflight,
  setDelflight,
  setUsers,
  setUser,
} = airportSlicer.actions;

export default airportSlicer.reducer;
