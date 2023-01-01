import axios from "axios";
import {
  setResairport,
  setListflight,
  setFlight,
} from "../Reducers/airportReducer";
import swal from "sweetalert";

export const getairport = (query) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/airport/search/${query}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (result.data.status) {
      dispatch(setResairport(result.data));
    }
  } catch (error) {}
};

export const clear = () => async (dispatch) => {
  dispatch(setResairport([]));
};

export const scheduleFlightSearch = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/flight/schedule/search`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (result.data.status) {
      dispatch(setListflight(result.data));
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const getscheduleFlight = (page, limit) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/flight/schedule?page=${page}&limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (result.data.status) {
      dispatch(setFlight(result.data));
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};
