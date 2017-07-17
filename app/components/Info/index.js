import React, { Component } from "react";
import { Thumbnail, Content, Body, Text, H2, H3, H5, H6 } from "native-base";
import { Image, View } from "react-native";
import styles from "./infoStyles";

const Info = () =>
  <View style={{ flex: 2 }}>
    <Body>
      <H2>Airplane Mode</H2>
      <H3>Airplane Mode</H3>
      <Text note style={styles.note}>
        Airplane Mode
      </Text>
    </Body>
  </View>;

export default Info;
