/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux';

import {RootStack} from './src/screens';
import configureStore from './src/store/configureStore';

const AppContainer = createAppContainer(RootStack);
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
