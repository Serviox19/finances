import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    firebase.initializeApp({
      apiKey: "AIzaSyAgsKhuU-TW7cQcCgNEJ0ie1uDL-qZI5YA",
      authDomain: "finance-app-ce389.firebaseapp.com",
      databaseURL: "https://finance-app-ce389.firebaseio.com",
      projectId: "finance-app-ce389",
      storageBucket: "finance-app-ce389.appspot.com",
      messagingSenderId: "1095967643236"
    })
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
