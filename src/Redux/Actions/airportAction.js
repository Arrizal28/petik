import axios from "axios";
import { setResairport } from "../Reducers/airportReducer";

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
  } catch (error) {
    console.log("error", error);
    alert("must be name, IATA, or ICAO");
  }
};

export const clear = () => async (dispatch) => {
  dispatch(setResairport([]));
};
