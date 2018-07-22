import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Settings from './screens/Settings';


const RootStack = createStackNavigator({
  Home: { screen: Home, title: "Finances" },
  Settings: { screen: Settings, title: "Settings" }
});

export default class Router extends Component {
  render() {
    return <RootStack />;
  }
}
