import React, { Component } from 'react';
import {
  View,
  Image,
  AppRegistry
} from 'react-native';
import App from './src/App.js';
import {Drawer} from './src/components/router.js'

export default class PickColor extends Component {
  render() {
    return (
      <Drawer/>
    );
  }
}

AppRegistry.registerComponent('PickColor', () => PickColor);
