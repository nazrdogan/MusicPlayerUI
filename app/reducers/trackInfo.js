var initalState = {
  cover: "",
  duration: 0,
  title: "",
  artist: "",
  likes: 0,
  is_liked: false
};

export default function(state = initalState, action) {
  switch (action.type) {
    case "GET_TRACK_INFO":
      return action.payload;
      break;
    default:
      break;
  }
  return state;
}
