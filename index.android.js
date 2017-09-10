import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Drawer} from './src/components/router.js'

export default class PickColor extends Component {
  render() {
    return <Drawer/>;
  }
}

AppRegistry.registerComponent('PickColor', () => PickColor);
