import axios from "axios";
import { setCreateBio, setShowBio, setUpdateBio} from "../Reducers/userReducer"

export const createUserBio = (data) => async (dispatch) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_AUTH_API}/auth/login`,
        data
      );
      if (result.data.message) {
        dispatch(setCreateBio(data))
        alert(result.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  export const showUserBio = () => async (dispatch) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_AUTH_API}/auth/show-bio`
      );
      if (result.message) {
        dispatch(setShowBio())
        alert(result.message);
      }
    } catch (error) {
      alert(error.response.message);
    }
  };

  export const upadateUserBio = (data) => async (dispatch) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_AUTH_API}/auth/show-bio`,
        data
      );
      if (result.data.message) {
        dispatch(setUpdateBio(data))
        alert(result.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };