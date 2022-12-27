import axios from "axios";
import swal from "sweetalert";
import { setCflight, setDflight } from "../Reducers/adminReducer";

export const createflight = (data) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/flight/create-flight`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setCflight(result.data));
    swal({
      title: "Succes created flight",
      icon: "success",
      button: "OK",
    });
  } catch (error) {
    console.log("error", error);
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const editflight = (data, id) => async (getState) => {
  try {
    const { token } = getState().auth;
    await axios.put(
      `${process.env.REACT_APP_AUTH_API}/flight/edit/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    swal({
      title: "Succes updated flight",
      icon: "success",
      button: "OK",
    });
  } catch (error) {
    console.log("error", error);
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const deleteflight = (id) => async (getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.delete(
      `${process.env.REACT_APP_AUTH_API}/flight/delete/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
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

export const detailflight = (id) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/flight/get-flight/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setDflight(result.data));
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
