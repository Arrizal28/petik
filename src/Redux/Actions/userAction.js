import axios from "axios";
import {
  setCreateBio,
  setShowBio,
  setUpdateBio,
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
      console.log("success", result.data);
      alert(result.data.message);
    }
  } catch (error) {
    console.log("error", error);
    alert(error.data.message);
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
    alert(error.response.message);
  }
};

export const upadateUserBio = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/update-bio`,
      data
    );
    if (result.data.message) {
      dispatch(setUpdateBio(data));
      alert(result.data.message);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
