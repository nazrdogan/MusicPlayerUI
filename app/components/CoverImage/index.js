import React, { Component } from "react";

import { Image, View } from "react-native";
import styles from "./coverImageStyles";

const CoverImage = () =>
  <View style={{ flex: 2 }}>
    <Image
      style={styles.image}
      source={{
        uri: "https://www.eff.org/files/tor-https-1.png"
      }}
    />
  </View>;

export default CoverImage;
