import axios from "axios";
import swal from "sweetalert";
import {
  setCreateBio,
  setShowBio,
  setUpdateBio,
  setNotif,
} from "../Reducers/userReducer";

export const createUserBio = (data) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/user/create-bio`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setCreateBio(result.data));
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

export const showUserBio = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/user/show-bio`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setShowBio(result.data));
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const upadateUserBio = (data) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.put(
      `${process.env.REACT_APP_AUTH_API}/user/update-bio`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setUpdateBio(result.data));
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

export const notifications = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/notifications`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setNotif(result.data));
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const notifikasi = (data) => async (dispatch) => {
  dispatch(setNotif(data));
};
