//LiuZh 2017-05-18
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';

let imgPlay  = require('../img/play.png');
let imgPause = require('../img/pause.png');

export default class CdView extends Component{

	constructor(props) {
		super(props);

		this.state = {
			isPlaying: false,
			rotate: new Animated.Value(0),
		};
	}

	render() {
		let width     = this.props.width;
		let transform = [{
				rotate: this.state.rotate.interpolate({
        inputRange: [0, 1],//输入区间
        outputRange: ['0deg', `${60*360}deg`],//映射的输出区间
      	})
		},];
		let imgStyle  = {
			height: width,
			width: width,
			borderRadius: width,
			borderWidth: 5,
			borderColor: 'rgba(80,80,80,0.4)',
			transform: transform,
		};
		return(
			<View style={{marginLeft: width / 2,}}>
				<Animated.Image 
					style={imgStyle}
					source={this.props.source}/>
				<View style={[{height: width,width:width,}, styles.btnBox]}>
					<TouchableWithoutFeedback
						onPress={this.onPress}>
						<Image
							style={styles.imgBtn}
							source={this.state.isPlaying ? imgPause : imgPlay}/>
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	}

	onPress = () => {
		ToastAndroid.show('没做播放，看他转吧...', ToastAndroid.SHORT);
		if (this.state.isPlaying) {
			this.state.rotate.stopAnimation();
		} else {
			this.startTimingRotateAnim();
		}
		this.setState({
			isPlaying: !this.state.isPlaying,
		});
	}

// 旋转动画----------timing   我可能写了一个假动画，委曲求全写的，致于这个动画到底有啥问题...我不写了...
  startTimingRotateAnim = () => {
    Animated.timing(
      this.state.rotate,
      {
        toValue: 1,
        duration: 1000 * 60 * 60,//一个小时/60圈
        easing: Easing.linear,//线性变化
      }
    ).start();
  }
}

const styles = StyleSheet.create({
	btnBox: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top: 0,
		left: 0,
	},
	imgBtn: {
		width: 28,
		height: 28,
	}
});