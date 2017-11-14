import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDDJViWMDhI-EZiCbPSL5V0GZwB1GIMSUo',
      authDomain: 'manager-4123c.firebaseapp.com',
      databaseURL: 'https://manager-4123c.firebaseio.com',
      projectId: 'manager-4123c',
      storageBucket: 'manager-4123c.appspot.com',
      messagingSenderId: '855560693360'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
