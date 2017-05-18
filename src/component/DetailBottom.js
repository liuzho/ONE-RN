//LiuZh 2017-05-17
import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

export default class DetailBottom extends Component{

	render() {
		return (
			<View style={styles.body}>
				<Image style={styles.icon}
					source={require('../img/bottom_like.png')}/>
				<Image style={styles.icon}
					source={require('../img/bottom_collect.png')}/>
				<Image style={styles.icon}
					source={require('../img/bottom_comment.png')}/>
				<View style={{flex: 1,}}/>
				<Text style={styles.bottomTxt}>666 喜欢 · 666 评论</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	body: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		borderTopWidth: 0.4,
		borderColor: 'rgba(210,210,210,0.4)',
	},
	icon: {
		height: 20,
		width: 20,
		marginLeft: 15,
		marginRight: 15,
	},
	bottomTxt: {
		fontSize: 12,
		color: '#999999',
		marginRight: 15,
	}
});