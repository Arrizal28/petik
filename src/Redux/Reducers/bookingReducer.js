import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cbooking: [],
  cancelbook: [],
  listbooking: [],
  payment: [],
  flightid: null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCbooking: (state, action) => {
      state.cbooking = action.payload;
    },
    setCancelbooking: (state, action) => {
      state.cancelbook = action.payload;
    },
    setListbooking: (state, action) => {
      state.listbooking = action.payload;
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setFlightid: (state, action) => {
      state.flightid = action.payload;
    },
  },
});

export const {
  setCbooking,
  setCancelbooking,
  setListbooking,
  setPayment,
  setFlightid,
} = authSlicer.actions;

export default authSlicer.reducer;
