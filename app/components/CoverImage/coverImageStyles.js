import { Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");
export default {
  image: {
    alignSelf: "center",
    width: width - 50,
    height: 200,
    top: 40
  }
};
