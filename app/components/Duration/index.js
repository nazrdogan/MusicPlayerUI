import React, { Component } from "react";
import { Image, View } from "react-native";
import styles from "./durationStyles";
var ProgressBar = require("react-native-progress-bar");

class Duration extends Component {
  state = {
    progress: 0
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ProgressBar
          fillStyle={{}}
          backgroundStyle={{ backgroundColor: "#cccccc", borderRadius: 2 }}
          style={{ marginTop: 10, width: 300 }}
          progress={this.state.progress}
        />
      </View>
    );
  }
}

export default Duration;
