import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Text,
	TouchableOpacity,
	Platform,
	Dimensions,
} from 'react-native';
import Line from './components/line.js';
import Drawer from './components/router.js'

const {width,height} = Dimensions.get('window');

export default class App extends Component {
	constructor(props){
		super(props);
		this.state={
			red:26,
			green:158,
			blue:154
		}
	}

	onSliderChanged = (color) => {
		this.setState(color);
	}

	dicreaseValue(color,str){
		if(this.state.red>0 && str=='r'){
			this.setState(color);
		}
		if(this.state.green>0 && str=='g'){
			this.setState(color);
		}
		if(this.state.blue>0 && str=='b'){
			this.setState(color);
		}
	}

	increaseValue(color,str){
		if(this.state.red<255 && str=='r'){
			this.setState(color);
		}
		if(this.state.green<255 && str=='g'){
			this.setState(color);
		}
		if(this.state.blue<255 && str=='b'){
			this.setState(color);
		}
	}

    render() {
        return (
        	<View style = {styles.container}>
				<View style = {styles.body}>
					<View style = {[styles.body1,{backgroundColor:`rgb(${this.state.red},${this.state.green},${this.state.blue})`}]}>
						<Text 
							selectable={true} 
							selectionColor={'white'}
							style={{fontSize:30,fontWeight:'bold',color:'white'}}
						>
							<Text style={{color:'red'}}>{this.state.red}</Text>,
							<Text style={{color:'green'}}>{this.state.green}</Text>,
							<Text style={{color:'blue'}}>{this.state.blue}</Text>
						</Text>
					</View>

					<View style = {styles.body2}>
						<Line 
							value = {this.state.red} 
							textStyle={{color:'red'}}
							onValueChanged = {(val) => {
								let currentColor = this.state;
								let newColor = {currentColor, red:val}
								this.onSliderChanged(newColor)
							}}
							inDicreaseValue = {(val)=>{
								let currentColor = this.state;
								let newColor = {currentColor, red:val, red:currentColor.red-1}
								this.dicreaseValue(newColor,'r')
							}}
							inIncreaseValue = {(val)=>{
								let currentColor = this.state;
								let newColor = {currentColor, red:val, red:currentColor.red+1}
								this.increaseValue(newColor,'r')
							}}
						/>

						<Line 
							value = {this.state.green} 
							textStyle={{color:'green'}}
							onValueChanged = {(val) => {
								let currentColor = this.state;
								let newColor = {...currentColor, green:val}
								this.onSliderChanged(newColor)
							}}
							inDicreaseValue = {(val)=>{
								let currentColor = this.state;
								let newColor = {currentColor, green:val, green:currentColor.green-1}
								this.dicreaseValue(newColor,'g')
							}}
							inIncreaseValue = {(val)=>{
								let currentColor = this.state;
								let newColor = {currentColor, green:val, green:currentColor.green+1}
								this.increaseValue(newColor,'g')
							}}
						/>

						<Line 
							value = {this.state.blue} 
							textStyle={{color:'blue'}}
							onValueChanged = {(val) => {
								let currentColor = this.state;
								let newColor = {...currentColor, blue:val}
								this.onSliderChanged(newColor)
							}}
							inDicreaseValue = {(val)=>{
								let currentColor = this.state;
								let newColor = {currentColor, blue:val, blue:currentColor.blue-1}
								this.dicreaseValue(newColor,'b')
							}}
							inIncreaseValue = {(val)=>{
								let currentColor = this.state;
								let newColor = {currentColor, blue:val, blue:currentColor.blue+1}
								this.increaseValue(newColor,'b')
							}}
						/>
					</View>
					
				</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	header:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#26a69a',
		...Platform.select({
			ios:{
				shadowColor: '#00766c',
				shadowOffset:{width:0,height:10},
				shadowOpacity: 0.5,
			},
			android:{
				elevation: 8,
			}
		}),
	},
	body:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	body2:{
		width: width*0.7,
		height: height*0.3,
		backgroundColor: '#b2dfdb',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 20,
	},
	body1:{
		width: 200,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#000',
		marginBottom: 5,
		backgroundColor: '#00766c',
	},
})