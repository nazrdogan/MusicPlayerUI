import { Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");
export default {
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center"
  },
  duration: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginHorizontal: 4,
    alignItems: "flex-end"
  }
};
