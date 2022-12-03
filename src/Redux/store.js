import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./Reducers";

const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;