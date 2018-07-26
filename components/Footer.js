import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
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
            this.props.navigation.navigate('Home') }>
            <Icon name="ios-list-box-outline" />
            <Text style={styles.textStyle}>Home</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate('Trans') }>
            <Icon name="ios-add-circle-outline" />
            <Text style={styles.textStyle}>Transactions</Text>
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
