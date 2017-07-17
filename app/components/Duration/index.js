import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import { Text } from "native-base";
import styles from "./durationStyles";
import Slider from "react-native-slider";
class Duration extends Component {
  state = {
    value: 0.2
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.duration}>
          <Text note>0:00</Text>
          <Text note>
            {this.props.duration / 60}
          </Text>
        </View>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
      </View>
    );
  }
}
Duration.propTypes = {
  duration: PropTypes.number.isRequired
};
export default Duration;
