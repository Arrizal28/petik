import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resairport: [],
};

const airportSlicer = createSlice({
  name: "airport",
  initialState,
  reducers: {
    setResairport: (state, action) => {
      state.resairport = action.payload;
    },
  },
});

export const { setResairport } = airportSlicer.actions;

export default airportSlicer.reducer;
