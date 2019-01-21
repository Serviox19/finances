import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Body,
  Header, Title, Text } from 'native-base';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Container style={{ paddingTop: 15 }}>
          <Content padder>
            <Text>Home</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({});
