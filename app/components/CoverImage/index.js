import React, { Component } from "react";
import PropTypes from "prop-types";

import { Image, View } from "react-native";
import styles from "./coverImageStyles";

const CoverImage = props =>
  <View style={{ flex: 4 }}>
    <Image
      style={styles.image}
      resizeMode={"cover"}
      source={{
        uri: props.image
      }}
    />
  </View>;

CoverImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default CoverImage;
