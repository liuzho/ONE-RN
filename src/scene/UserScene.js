//LiuZh 2017-05-18
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ToastAndroid,
} from 'react-native';

import SettingItem from '../component/SettingItem';

let windowWidth    = Dimensions.get('window').width;//屏幕宽度
let imgNightMode   = require('../img/night_mode.png');
let imgCheck       = require('../img/check.png');
let imgSetting     = require('../img/setting.png');
let imgFeedback    = require('../img/feedback.png');
let imgEntr        = require('../img/enter.png');
let imgUserBg      = require('../img/user_bg.jpg');
let imgHeadDefault = require('../img/head.png');

export default class UserScene extends Component{

	render() {
		return (
			<View style={styles.body}>
				<Image style={styles.headBgImg}
					source={imgUserBg}>
					<Image style={styles.userHeadImg}
						source={imgHeadDefault}/>
					<Text style={styles.userNameTxt}>LiuZh</Text>
				</Image>
				<Text style={styles.settingTxt}>设置</Text>
				<SettingItem 
					onPress={this.pressNightMode}
					leftSource={imgNightMode}
					rightSource={imgCheck}
					info={'夜间模式'}/>
				<View style={styles.line}/>
				<SettingItem 
					onPress={this.pressMoreSetting}
					leftSource={imgSetting}
					rightSource={imgEntr}
					info={'其他设置'}/>
				<View style={styles.line}/>
				<SettingItem 
					onPress={this.pressFeedBack}
					leftSource={imgFeedback}
					rightSource={imgEntr}
					info={'用户反馈'}/>
				<View style={styles.line}/>
			</View>
		);
	}

	pressNightMode() {
		ToastAndroid.show('别点了...这个不写...', ToastAndroid.SHORT);
	}

	pressMoreSetting() {
		ToastAndroid.show('别急...这个晚点写...', ToastAndroid.SHORT);
	}

	pressFeedBack() {
		ToastAndroid.show('别急...这个晚点写...', ToastAndroid.SHORT);
	}
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		justifyContent: 'flex-start',
		marginTop: -50,
		backgroundColor: '#FFFFFF',
	},
	headBgImg: {
		opacity: 0.9,
		justifyContent: 'center',
		alignItems: 'center',
		width: windowWidth,
		height: windowWidth / 2,
	},
	userHeadImg: {
		height: 60,
		width: 60,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: '#FFFFFF',
	},
	userNameTxt: {
		fontSize: 16,
		color: '#EEEEEE',
		marginTop: 6,
	},
	settingTxt: {
		fontSize: 13,
		color: '#AAAAAA',
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 10,
		backgroundColor: '#EFEFEF',
	},
	line: {
		height: 0.5,
		backgroundColor: 'rgba(200,200,200,0.2)',
	},
});


