import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './screens/Home';
import Settings from './screens/Settings';

class HomeScreen extends Component {
  render() {
    return (
      <Home />
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <Settings />
    );
  }
}

export default createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});
