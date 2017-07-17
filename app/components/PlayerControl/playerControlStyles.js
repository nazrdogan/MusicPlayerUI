import { Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");
export default {
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },

  button: {
    alignSelf: "center",
    margin: 10
  },
  playButton: {
    alignSelf: "center",
    margin: 10,
    fontSize: 60
  }
};
