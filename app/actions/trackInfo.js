import { GetTrackInfo } from "../api";
export const getTrackInfo = user => {
  return function(dispatch) {
    GetTrackInfo().then(response => {
      dispatch({ type: "GET_TRACK_INFO", payload: response });
    });
  };
};
