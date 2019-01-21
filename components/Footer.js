import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Footer, FooterTab, Button, Text } from 'native-base';
import { createStackNavigator } from 'react-navigation';

export default class FooterTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer>
        <FooterTab style={styles.footer}>
        <Button onPress={() =>
          this.props.navigation.navigate('Cal') }>
          <Icon name="ios-calendar" style={{fontSize: 22, color: '#000'}} />
        </Button>
          <Button onPress={() =>
            this.props.navigation.navigate('Home') }>
            <Icon name="ios-home" style={{fontSize: 22, color: '#000'}} />
          </Button>
          <Button onPress={() => this.props.navigation.navigate('Category') }>
            <Icon name="ios-list" style={{fontSize: 22, color: '#000'}} />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = {
  footer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 12,
    color: '#000000'
  }
}
