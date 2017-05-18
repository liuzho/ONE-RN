//LiuZh 2017-05-16
import React, { Component } from 'react';

import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import {
	TabNavigator,
} from 'react-navigation';

import ReadScene   from '../scene/ReadScene';
import MusicScene  from '../scene/MusicScene';
import MovieScene  from '../scene/MovieScene';
import OneSceneBox from '../scene/OneSceneBox';
import OneScene    from '../scene/OneScene';

let imgOne         = require('../img/home.png');
let imgOneAcitve   = require('../img/home_active.png');
let imgRead        = require('../img/reading.png');
let imgReadActive  = require('../img/reading_active.png');
let imgMusic       = require('../img/music.png');
let imgMusicActive = require('../img/music_active.png');
let imgMovie       = require('../img/movie.png');
let imgMovieActive = require('../img/movie_active.png');

const HomeNav = TabNavigator({
		One: {
			screen: OneSceneBox,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => (
						<Image
							source={focused ? imgOneAcitve : imgOne}
							style={styles.tabImg}
						/>
				),
			},
		},
		Read: {
			screen: ReadScene,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? imgReadActive : imgRead}
						style={styles.tabImg}
					/>
				),
			},
		},
		Music: {
			screen: MusicScene,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? imgMusicActive : imgMusic}
						style={styles.tabImg}
					/>
				),
			},
		},
		Movie: {
			screen: MovieScene,
			navigationOptions: {
				tabBarIcon: ({focused, tintColor}) => {
					return (
						<Image
							source={focused ? imgMovieActive : imgMovie}
							style={styles.tabImg}/>
				)},
			},
		},
	}, {
	lazy: true,
	initialRouteName: 'One',
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


export default HomeNav;




