import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Body,
Header, Title, Text } from 'native-base';

export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <Body>
            <Title>Transactions</Title>
          </Body>
        </Header>
        <Container style={{ paddingTop: 20 }}>
          <Content padder>
            <Text>Transactions Screen</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({});
