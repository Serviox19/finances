import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import CategoryScreen from './screens/Categories';
import CalendarScreen from './screens/Calendar';
import FooterTabs from './components/Footer';


export default class Router extends Component {
  render() {
    const RootStack = createBottomTabNavigator({
      Home: { screen: HomeScreen },
      Category: { screen: CategoryScreen },
      Cal: { screen: CalendarScreen }
    },{ tabBarComponent: FooterTabs });

    return (
      <RootStack />
    );
  }
}
