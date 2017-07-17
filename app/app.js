import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Container, Content } from "native-base";
import PageHeader from "./components/PageHeader";
import CoverImage from "./components/CoverImage";
import Info from "./components/Info";
import Duration from "./components/Duration";
import PlayerControl from "./components/PlayerControl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTrackInfo } from "./actions";
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTrackInfo();
  }
  render() {
    const { trackInfo } = this.props;
    if (trackInfo === undefined) {
      return null;
    }
    return (
      <Container>
        <PageHeader />
        <CoverImage image={trackInfo.cover} />
        <Info title={trackInfo.title} artist={trackInfo.artist} />
        <Duration duration={trackInfo.duration} />
        <PlayerControl isLiked={trackInfo.is_liked} likes={trackInfo.likes} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { trackInfo: state.trackInfo.data };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getTrackInfo }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
