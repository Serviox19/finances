import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ListView } from 'react-native';
import { Text, View } from 'native-base';

export default class TransList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Transaction List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
