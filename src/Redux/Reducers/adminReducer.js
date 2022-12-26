import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cflight: [],
  eflight: [],
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
  },
});

export const { setEflight, setCflight } = airportSlicer.actions;

export default airportSlicer.reducer;
