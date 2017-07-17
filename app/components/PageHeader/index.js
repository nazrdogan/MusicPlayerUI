import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Button,
  Right,
  Icon,
  Body,
  Title
} from "native-base";

const PageHeader = () =>
  <Header>
    <Left>
      <Button transparent>
        <Icon name="arrow-back" />
      </Button>
    </Left>
    <Body>
      <Title>Trucker Radio</Title>
    </Body>
    <Right />
  </Header>;

export default PageHeader;
