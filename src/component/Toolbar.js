//LiuZh 2017-05-17
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';

export default class Toolbar extends Component{

	render() {
		let inHome = this.props.inHome;
		let title = this.props.title;
		let onlyLeft = this.props.onlyLeft;
		return (
			<View style={[styles.box, this.props.bgColor ? {backgroundColor: this.props.bgColor,borderColor: 'rgba(0,0,0,0)',} : {}]}>
				<TouchableWithoutFeedback 
					onPress={inHome ? this.pressUser : this.pressBack}>
					<View style={styles.iconBtn}>
						<Image style={styles.iconLeft}
							source={inHome ? require('../img/user.png') : require('../img/back.png')} />
					</View>
				</TouchableWithoutFeedback>
				<View style={{flex: 1,}}/>
				<Text style={styles.titleTxt}>{title ? title : ''}</Text>
				<View style={{flex: 1,}}/>
				{
					onlyLeft ? (<View/>) : (
							<TouchableWithoutFeedback 
								onPress={inHome ? this.pressSearch : this.pressShare}>
								<View style={styles.iconBtn}>
									<Image style={styles.iconRight}
										source={inHome ? require('../img/search.png') : require('../img/bubble_share.png')}/>
								</View>
							</TouchableWithoutFeedback>
					)
				}
			</View>
		)
	}

//按下的是用户图标
	pressUser = () => {
		this.props.navigation.navigate('User');
	}
//按下的是返回图标
	pressBack = () => {
		this.props.navigation.goBack();
	}
//按下的是分享图标
	pressShare() {
		ToastAndroid.show('别急...分享晚点写...', ToastAndroid.SHORT);
	}
//按下的是搜索图标
	pressSearch() {
		ToastAndroid.show('别急...搜索晚点写...', ToastAndroid.SHORT);
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
	iconBtn: {
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconLeft: {
		height: 20,
		width: 20,
	},
	iconRight: {
		height: 20,
		width: 20,
	},
});