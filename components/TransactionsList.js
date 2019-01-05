import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';

export default class TransList extends Component {
  constructor(props) {
    super(props)
  }

  dummyTrans() {
    return [
      {}
    ]
  }

  renderTrans() {
    return dummyTrans().map((trans) => {
      return (
        //render each transaction with a native base component or something custom
      )
    })
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
