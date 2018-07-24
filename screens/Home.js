import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import FooterTabs from '../components/Footer';

export default class HomeView extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <Container style={{ paddingTop: 20 }}>
        <Content padder>
          <Text>Home</Text>
        </Content>
        <FooterTabs navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
