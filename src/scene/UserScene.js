//LiuZh 2017-05-18
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import SettingItem from '../component/SettingItem';

let windowWidth  = Dimensions.get('window').width;//屏幕宽度
let imgNightMode = require('../img/night_mode.png');
let imgCheck     = require('../img/check.png');
let imgSetting   = require('../img/setting.png');
let imgFeedback  = require('../img/feedback.png');
let imgEntr      = require('../img/enter.png');

export default class UserScene extends Component{


	render() {
		return (
			<View style={styles.body}>
				<Image style={styles.headBgImg}
					source={require('../img/user_bg.jpg')}>
					<Image style={styles.userHeadImg}
						source={require('')}/>
					<Text style={styles.userNameTxt}>LiuZh</Text>
				</Image>
				<Text style={styles.settingTxt}>设置</Text>
				<SettingItem 
					leftSource={imgNightMode}
					rightSource={imgCheck}
					info={'夜间模式'}/>
				<View style={styles.line}/>
				<SettingItem 
					leftSource={imgSetting}
					rightSource={imgEntr}
					info={'其他设置'}/>
				<View style={styles.line}/>
				<SettingItem 
					leftSource={imgFeedback}
					rightSource={imgEntr}
					info={'用户反馈'}/>
				<View style={styles.line}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		justifyContent: 'flex-start',
		marginTop: -50,
		backgroundColor: '#FFFFFF',
	}
	headBgImg: {
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
		paddingBottomg: 6,
		paddingLeft: 10,
		backgroundColor: '#EFEFEF',
	},
	line: {
		height: 0.4,
		color: 'rgba(200,200,200,0.4)',
	},
});