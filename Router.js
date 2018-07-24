import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Settings from './screens/Settings';


export default class Router extends Component {
  render() {
    const RootStack = createStackNavigator({
      Home: { screen: Home },
      Settings: { screen: Settings }
    });

    return (
      <RootStack />
    );
  }
}
