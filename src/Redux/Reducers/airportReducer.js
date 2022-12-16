import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resairport: [],
  listflight: [],
  flight: [],
};

const airportSlicer = createSlice({
  name: "airport",
  initialState,
  reducers: {
    setResairport: (state, action) => {
      state.resairport = action.payload;
    },
    setListflight: (state, action) => {
      state.listflight = action.payload;
    },
    setFlight: (state, action) => {
      state.flight = action.payload;
    },
  },
});

export const { setResairport, setListflight, setFlight } =
  airportSlicer.actions;

export default airportSlicer.reducer;
