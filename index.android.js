//LiuZh 2017-05-16
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
//导入SN用作顶部back等的导航
import {
	StackNavigator,
} from 'react-navigation';
import HomeScene from './src/scene/Home';//主页
import DetailScene from './src/scene/DetailScene';//内容详情页
import Toolbar from './src/component/Toolbar';//Toolbar
const App = StackNavigator({
		Home: {
			screen: HomeScene,
		},
		Detail: {
			screen: DetailScene,
			navigationOptions: ({navigation}) => ({
				header: (
					<Toolbar
						title={navigation.state.params.title}/>
				),
			}),
		},
	}, {
		initialRouteParams: {
			title: '一个',
		},
		navigationOptions: ({navigation}) => ({
			header: (
					<Toolbar 
						inHome={true}
						title={navigation.state.params.title}/>
				),
		}),
});

AppRegistry.registerComponent('ONE', () => App);
