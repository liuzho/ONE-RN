//LiuZh 2017-05-18
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SettingItem extends Component{

	render() {
		<View style={styles.body}>
			<Image style={styles.icon}
				source={this.props.leftSource}/>
			<Text style={styles.infoTxt}>{this.props.info}</Text>
			<View style={{flex: 1,}}/>
			<Image style={styles.icon}
				source={this.props.rightSource}/>
		</View>
	}
}

const styles = StyleSheet.create({
	body: {
		flexDirecion: 'row',
		justifyContent: 'center',
		alignItems: 'center'
		backgroundColor: '#FFFFFF',
		height: 50,
		padding: 6,
	},
	icon: {
		height: 18,
		width: 18,
	},
	infoTxt: {
		fontSize: 14,
		color: '#111111',
	}
});