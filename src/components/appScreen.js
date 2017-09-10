import React, { Component } from "react";
import {StackNavigator,TabNavigator,DrawerNavigator,DrawerItems } from 'react-navigation';
import {
  View,
  TouchableOpacity,
  Image
} from "react-native";
import App from '../App.js';

export default class AppScr extends Component{
    static navigationOptions = ({navigation}) => ({
        drawerLabel: 'My app',
        headerTitleStyle:{
            color: '#004d40',
            fontSize: 22,
            fontWeight: 'bold'
        },
        headerStyle:{
            backgroundColor:'#26a69a',
            elevation: 5
        },
        drawerIcon: ({ tintColor }) => (
            <Image 
				source={require('../image/icon_user.png')} 
				style={{width:22,height:22,tintColor: tintColor}}
			/>
		),
		headerLeft: 
			<TouchableOpacity onPress = {() => {navigation.navigate('DrawerOpen')}}>
				<Image 
				source={require('../image/icon_more.png')}
				style={{width:35,height:35,tintColor:'#004d40',marginLeft:10}}
				/>
			</TouchableOpacity>
    });

	render(){
		return(
			<App/>
		);
	}
}
