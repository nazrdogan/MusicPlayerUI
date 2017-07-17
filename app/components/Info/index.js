import React, { Component } from "react";
import { Thumbnail, Content, Body, Text, H2, H3, H5, H6 } from "native-base";
import { Image, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./infoStyles";

const Info = props =>
  <View style={{ flex: 2 }}>
    <Body>
      <Text>
        {props.title}
      </Text>
      <Text>
        {props.artist}
      </Text>
      <Text note style={styles.note} />
    </Body>
  </View>;

Info.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};

export default Info;
