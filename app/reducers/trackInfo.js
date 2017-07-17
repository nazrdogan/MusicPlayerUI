import Immutable from "immutable";

var initalState = {
  data: {
    cover: "",
    duration: 0,
    title: "",
    artist: "",
    likes: 0,
    is_liked: false
  }
};

export default function(state = initalState, action) {
  state = Immutable.fromJS(state); // converting courses to an immutable object
  switch (action.type) {
    case "GET_TRACK_INFO":
      return state
        .set("status", "success")
        .set("error", null)
        .set("data", action.payload)
        .toJS(); // returning usual JS object
      break;
    default:
      break;
  }
  return state;
}
