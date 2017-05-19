//LiuZh 2017-05-19
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

export default class SearchScene extends Component{
	render() {
		return (
			<TouchableWithoutFeedback
				onPress={()=>this.props.navigation.goBack()}>
				<View style={styles.body} >
					<Text style={styles.title}>一个搜索</Text>
					<Text>搜索引擎就是把字典塞到硅片里</Text>
					<TextInput style={styles.input} 
						placeholder={'真指望我做搜索啊？！'}/>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	input: {
		width: 280,
		height: 50,
		fontSize: 16,
		color: '#BBBBBB',
		textAlign: 'center',
		marginTop: 60,
	},
	title: {
		fontSize: 26,
		color: '#666666',
		marginBottom: 6,
	}
});
