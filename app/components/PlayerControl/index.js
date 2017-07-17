import React, { Component } from "react";
import { Image, View } from "react-native";
import { Button, Text, Icon } from "native-base";
import styles from "./playerControlStyles";
import Slider from "react-native-slider";

class PlayerControl extends Component {
  state = {
    value: 0.2
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Icon
            ios="md-skip-backward"
            android="md-skip-backward"
            style={styles.button}
          />
          <Icon ios="md-play" android="md-play" style={styles.playButton} />
          <Icon
            ios="md-skip-forward"
            android="md-skip-forward"
            style={styles.button}
          />
        </View>
        <View style={{ position: "absolute", right: 10 }}>
          <Icon
            ios="ios-thumbs-up"
            android="ios-thumbs-up"
            style={styles.button}
          />
        </View>
      </View>
    );
  }
}

export default PlayerControl;
