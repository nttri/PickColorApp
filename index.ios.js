import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './src/App.js';

export default class PickColor extends Component {
  render() {
    return (<App/>);
  }
}

AppRegistry.registerComponent('PickColor', () => PickColor);
