//LiuZh 2017-05-17
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Toolbar extends Component{

	render() {
		let inHome = this.props.inHome;
		let title = this.props.title;
		let onlyLeft = this.props.onlyLeft;
		return (
			<View style={[styles.box, this.props.bgColor ? {backgroundColor: this.props.bgColor,} : {}]}>
				<TouchableWithoutFeedback onPress={inHome ? this.pressUser : this.pressBack}>
					<Image style={styles.iconLeft}
						source={inHome ? require('../img/user.png') : require('../img/back.png')} />
				</TouchableWithoutFeedback>
				<View style={{flex: 1,}}/>
				<Text style={styles.titleTxt}>{title ? title : ''}</Text>
				<View style={{flex: 1,}}/>
				<TouchableWithoutFeedback onPress={inHome ? this.pressSearch : this.pressShare}>
					<Image style={styles.iconRight}
						source={onlyLeft ? null : inHome ? require('../img/search.png') : require('../img/bubble_share.png')}/>
				</TouchableWithoutFeedback>
			</View>
		)
	}

//按下的是用户图标
	pressUser() {
		alert('open user scene');
	}
//按下的是返回图标
	pressBack = () => {
		this.props.navigation.goBack();

	}
//按下的是分享图标
	pressShare() {
		alert('share');
	}
//按下的是搜索图标
	pressSearch() {
		alert('search');
	}
}

const styles = StyleSheet.create({
	box: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderBottomWidth: 0.5,
		borderColor: '#DDDDDD',
	},
	titleTxt: {
		color: '#000000',
		fontSize: 16,
	},
	iconLeft: {
		height: 20,
		width: 20,
		marginLeft: 10,
	},
	iconRight: {
		height: 20,
		width: 20,
		marginRight: 10,
	},
});