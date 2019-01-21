import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Body,
  Header, Title, Text } from 'native-base';

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <React.Fragment>
        <Header>
          <Body>
            <Title>Calendar</Title>
          </Body>
        </Header>
        <Container style={{ paddingTop: 15 }}>
          <Content padder>
            <Text style={{ textAlign: 'center' }}>Calendar Component Goes here</Text>
            <Text style={{ textAlign: 'center' }}>With List View Under</Text>
          </Content>
        </Container>
      </React.Fragment>
    )
  }
}
