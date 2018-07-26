import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import TransactionScreen from './screens/Transactions';
import FooterTabs from './components/Footer';


export default class Router extends Component {
  render() {
    const RootStack = createBottomTabNavigator({
      Home: { screen: HomeScreen },
      Trans: { screen: TransactionScreen }
    },{ tabBarComponent: FooterTabs });

    return (
      <RootStack />
    );
  }
}
