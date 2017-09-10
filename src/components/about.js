import React, { Component } from "react";
import {StackNavigator,TabNavigator,DrawerNavigator,DrawerItems } from 'react-navigation';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default class About extends Component{
	static navigationOptions = ({navigation}) => ({
		drawerLabel: 'About',
		headerTitleStyle:{
            color: '#004d40',
            fontSize: 22,
            fontWeight: 'bold'
		},
		headerStyle:{
			backgroundColor:'#26a69a',
			elevation: 12
        },
        drawerIcon: ({ tintColor }) => (
            <Image 
				source={require('../image/icon_help.png')} 
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
			<View style={styles.container}>
				<View style={styles.box1}>
					<View style={styles.box1_left}>
						<Image source={require('../image/avatar.png')} style={styles.ava}/>
					</View>

					<View style={styles.box1_right}>
						<Text style={styles.text_name}>NGUYỄN THANH TRÍ</Text>
						<Text style={styles.text_dob}>03-02-1997</Text>
						<Text style={styles.text_profile}>fb.com/nguyenthanhtri.97</Text>
					</View>
				</View>

				<View style={styles.box2}>
					<ScrollView>
						<View style={{alignItems:'center'}}>
							<Text style={{color:'#9ea3a3'}}>08-2013</Text>
						</View>
						<Image source={require('../image/photo1.jpg')} style={styles.photo}/>
						<View style={{alignItems:'center'}}>
							<Text style={{color:'#9ea3a3'}}>03-2014</Text>
						</View>
						<Image source={require('../image/photo2.jpg')} style={styles.photo}/>
						<View style={{alignItems:'center'}}>
							<Text style={{color:'#9ea3a3'}}>10-2015</Text>
						</View>
						<Image source={require('../image/photo3.jpg')} style={styles.photo}/>
						<View style={{alignItems:'center'}}>
							<Text style={{color:'#9ea3a3'}}>06-2016</Text>
						</View>
						<Image source={require('../image/photo4.jpg')} style={styles.photo}/>
						<View style={{alignItems:'center'}}>
							<Text style={{color:'#9ea3a3'}}>08-2016</Text>
						</View>
						<Image source={require('../image/photo5.jpg')} style={styles.photo}/>
						<View style={{alignItems:'center'}}>
							<Text style={{color:'#9ea3a3'}}>02-2017</Text>
						</View>
						<Image source={require('../image/photo6.jpg')} style={styles.photo}/>
						<View style={{alignItems:'center'}}>
							<Text style={{color:'#9ea3a3'}}>-The End-</Text>
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: '#fff',
	},
	box1:{
		flex:1,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#d8d8d8',
	},
	box1_left:{
		flex:2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	ava:{
		width: 100,
		height: 100,
		borderRadius:50,
		borderWidth:3,
		borderColor: '#26a69a'
	},
	photo:{
		width: 200,
		height: 200,
	},
	box1_right:{
		flex:4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	box2:{
		flex:3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text_name:{
		fontSize: 21,
		color: '#ff0000',
		fontWeight: 'bold',
	},
	text_dob:{
		fontSize: 15,
		color: '#9a9e9b',
	},
	text_profile:{
		fontSize: 15,
		color: '#3bdbd5',
		textDecorationLine:('underline')
	}
});

//	nhận tham số từ cùng stacknavigator
//	<Text>{this.props.navigation.state.params.thamso}</Text> 