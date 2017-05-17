//LiuZh 2017-05-16
import React, { Component } from 'react';

import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

import {
	TabNavigator,
} from 'react-navigation';

import OneScene from './OneScene';
import ReadScene from './ReadScene';
import MusicScene from './MusicScene';
import MovieScene from './MovieScene';

const Home = TabNavigator({
		One: {
			screen: OneScene,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => (
					<Image
						source={require('../img/home.png')}
						style={styles.tabImg}
					/>
				),
			},
		},
		Read: {
			screen: ReadScene,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => (
					<Image
						source={require('../img/reading.png')}
						style={styles.tabImg}
					/>
				),
			},
		},
		Music: {
			screen: MusicScene,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => (
					<Image
						source={require('../img/music.png')}
						style={styles.tabImg}
					/>
				),
			},
		},
		Movie: {
			screen: MovieScene,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => (
					<Image
						source={require('../img/movie.png')}
						style={styles.tabImg}
					/>
				),
			},
		},
	}, {
  tabBarPosition: 'bottom',//tabbar放在底部
  swipeEnabled: false,//不能滑动切换
  animationEnabled: false,//不要切换动画
  tabBarOptions: {
  	style: {
  		height: 50,
  		borderTopWidth: 0.5,
  		borderColor: '#DDDDDD',
  		backgroundColor: '#FFFFFF',
  	},
  	showLabel: false,//不显示文字
  	showIcon: true,//显示icon
  	indicatorStyle: {
  		height: 0,
  	},
  }
});

const styles = StyleSheet.create({
	tabImg: {
		height: 50,
		width: 50,
	},
});


export default Home;




