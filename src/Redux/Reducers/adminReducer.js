import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cflight: [],
  eflight: [],
  dflight: [],
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
  },
});

export const { setEflight, setCflight, setDflight } = airportSlicer.actions;

export default airportSlicer.reducer;
