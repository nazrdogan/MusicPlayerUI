import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Container, Content } from "native-base";
import PageHeader from "./components/PageHeader";
import CoverImage from "./components/CoverImage";
import Info from "./components/Info";
import Duration from "./components/Duration";
export default class MusicPlayerUI extends Component {
  render() {
    return (
      <Container>
        <PageHeader />
        <CoverImage />
        <Info />
        <Duration />
      </Container>
    );
  }
}
AppRegistry.registerComponent("MusicPlayerUI", () => MusicPlayerUI);
