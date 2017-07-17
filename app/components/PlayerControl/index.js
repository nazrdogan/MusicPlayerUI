import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import { Button, Text, Icon } from "native-base";
import styles from "./playerControlStyles";
import Slider from "react-native-slider";

const Liked = props =>
  <Button small dark transparent>
    <Icon ios="ios-thumbs-up" android="ios-thumbs-up" style={styles.button} />
    <Text>
      {props.likes}
    </Text>
  </Button>;

const NoLike = props =>
  <Button small dark transparent>
    <Icon
      ios="ios-thumbs-up-outline"
      android="ios-thumbs-up"
      style={styles.button}
    />
    <Text>
      {props.likes}
    </Text>
  </Button>;

class PlayerControl extends Component {
  state = {
    value: 0.2
  };
  constructor(props) {
    super(props);
  }

  render() {
    const { isLiked, likes } = this.props;
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
          {isLiked === true
            ? <Liked likes={likes} />
            : <NoLike likes={likes} />}
        </View>
      </View>
    );
  }
}
PlayerControl.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired
};

export default PlayerControl;
