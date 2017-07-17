import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import App from "./app";

const store = createStore(allReducers, applyMiddleware(thunk, logger));

export default class MusicPlayerUI extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("MusicPlayerUI", () => MusicPlayerUI);
