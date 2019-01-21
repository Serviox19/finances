import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import TransactionScreen from './screens/Transactions';
import CalendarScreen from './screens/Calendar';
import FooterTabs from './components/Footer';


export default class Router extends Component {
  render() {
    const RootStack = createBottomTabNavigator({
      Home: { screen: HomeScreen },
      Trans: { screen: TransactionScreen },
      Cal: { screen: CalendarScreen }
    },{ tabBarComponent: FooterTabs });

    return (
      <RootStack />
    );
  }
}
