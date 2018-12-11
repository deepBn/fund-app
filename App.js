/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';

import {RootStack} from './src/screens'

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
