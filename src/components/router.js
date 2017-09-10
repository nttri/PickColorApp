import React, { Component } from "react";
import {StackNavigator,TabNavigator,DrawerNavigator,DrawerItems } from 'react-navigation';
import AppScr from './appScreen.js';
import About from './about.js';

import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";


export const AboutScreen = StackNavigator({
    About:{
        screen: About,
        navigationOptions:{
            title: 'About',
        }
    }
});

export const AppScreen = StackNavigator({
    App:{
        screen: AppScr,
        navigationOptions:{
            title: 'Pick Color',          
        }
    }
});


export const Drawer = DrawerNavigator({
    LeftTab:{ screen: AppScreen },
    LeftTab2:{ screen: AboutScreen },
},
    {
        drawerWidth: 200,
        drawerPosition: 'left',
        contentComponent: props => <DrawerItems  {...props} />,
        contentOptions: {
            inactiveTintColor: '#000',
            inactiveBackgroundColor: '#fff',
            activeTintColor: '#fff',
            activeBackgroundColor: '#26a69a',
            style: {
                marginVertical: 0,
            }
        }
    }
);
