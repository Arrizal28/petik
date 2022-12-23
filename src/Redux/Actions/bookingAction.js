import axios from "axios";
import swal from "sweetalert";
import {
  setCbooking,
  setCancelbooking,
  setListbooking,
  setPayment,
  setFlightid,
  setTseat,
  setClass,
  setTicket,
} from "../Reducers/bookingReducer";

export const createBooking = (data) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/booking`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setCbooking(result.data));
      console.log("success", result.data);
      swal({
        title: result.data.message,
        icon: "success",
        button: "OK",
      });
    }
  } catch (error) {
    console.log("error", error);
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const cancelBooking = (id) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.put(
      `${process.env.REACT_APP_AUTH_API}/booking/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setCancelbooking(result.data));
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const getListBooking = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/booking/list-booking`
    );
    if (result.data.message) {
      dispatch(setListbooking(result.data));
      swal({
        title: result.data.message,
        icon: "success",
        button: "OK",
      });
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const payment = (data) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/payment`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setPayment(result.data));
      console.log("success", result.data);
      swal({
        title: result.data.message,
        icon: "success",
        button: "OK",
      });
    }
  } catch (error) {
    console.log("error", error);
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const getticket = (id) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/ticket/print-ticket/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setTicket(result.data));
      console.log("success", result.data);
      swal({
        title: result.data.message,
        icon: "success",
        button: "OK",
      });
    }
  } catch (error) {
    console.log("error", error);
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const flightid = (id) => async (dispatch) => {
  dispatch(setFlightid(id));
};

export const totalseat = (number) => async (dispatch) => {
  dispatch(setTseat(number));
};

export const flightclass = (flightclass) => async (dispatch) => {
  dispatch(setClass(flightclass));
};