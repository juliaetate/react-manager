import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
