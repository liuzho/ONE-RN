//LiuZh 2017-05-17
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class Toolbar extends Component{

	render() {
		let inHome = this.props.inHome;
		return (
			<View style={styles.box}>
				<Image style={styles.iconLeft}
					source={inHome ? require('../img/user.png') : require('../img/back.png')} />
				<Text>{this.props.title}</Text>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	box: {
		height: 50,
		flexDirection: 'center',
		backgroundColor: '#FFFFFF',
		borderBottomWidth: 0.5,
		borderColor: '#DDDDDD',
	},
	iconLeft: {
		height: 40,
		width: 40,
		alignSelt: 'flex-start',
		marginLeft: 10,
	},
	iconRight: {
		height: 40,
		width: 40,
		alignSelt: 'flex-end',
		marginRight: 10,
	},
});