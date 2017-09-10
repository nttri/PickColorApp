import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    Slider,
} from 'react-native';

export default class Line extends Component {
    constructor(props){
        super(props);
        this.state = props
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.container1}>
                    <TextInput 
                        style = {[styles.textInput,{...this.props.textStyle}]}
                        value = {`${this.props.value}`}
                        editable={false}
                        caretHidden={true}
                        underlineColorAndroid={'#e0f2f1'}
                    />
                </View>
            
                <View style = {styles.container2}>
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = {(val)=>{this.props.inDicreaseValue(val)}}
                    >
                        <Text style = {[styles.text,{...this.props.textStyle}]}>-</Text>
                    </TouchableOpacity>
                    
                    <Slider 
                        style = {styles.slider}
                        onValueChange={(val)=>{
                            this.props.onValueChanged(val)
                        }}
                        value = {this.props.value}
                        maximumTrackTintColor={`${this.props.textStyle.color}`}
                        step={1}
                        maximumValue={255}
                        minimumValue={0}
                    />

                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = {(val)=>{this.props.inIncreaseValue(val)}}
                    >
                        <Text style = {[styles.text,{fontSize:20},{...this.props.textStyle}]}>+</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1:{
        marginTop: 0,
		alignItems: 'center',
    },
	container2:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 2,
    },
    text:{
        fontSize: 28,
        textAlign: 'center',
    },
    slider:{
        width: 150,
    },
    textInput:{
        height: 40,
        fontSize: 13,
        padding: 0,
        width: 50,
        textAlign: 'center',
    }
})