import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import FooterTabs from '../components/Footer';

export default class SettingsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ paddingTop: 20 }}>
        <Content>
          <Text>Settings</Text>
        </Content>
        <FooterTabs navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
