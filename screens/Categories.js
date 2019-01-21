import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Container, Content, Body, Text, Title } from 'native-base';

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <Body>
            <Title>Categories</Title>
          </Body>
        </Header>
        <Container style={{ paddingTop: 20 }}>
          <Content>
            <Text style={{ textAlign: 'center' }}>Add bar graph for each category and trans.</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({});
