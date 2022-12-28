import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cflight: [],
  eflight: [],
  dflight: [],
  delflight: [],
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
  },
});

export const { setEflight, setCflight, setDflight, setDelflight } =
  airportSlicer.actions;

export default airportSlicer.reducer;
