import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Container, Content, Body } from 'native-base';

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Container>
          <Content>
            <Text>Add bar graph for each category and trans.</Text>
          </Content>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({});
