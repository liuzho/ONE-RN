//LiuZh 2017-05-18
import React, { Component } from 'react';

import {
	View,
} from 'react-native';

import {
	TabNavigator,
} from 'react-navigation';

import OneScene from '../scene/OneScene';

const OneSceneBoxNav = TabNavigator({
		One1: {
			screen: OneScene,
			navigationOptions: {
				tabBarVisible: false,
			},
		},
		One2: {
			screen: OneScene,
			tabBarVisible: false,
			navigationOptions: {
				tabBarVisible: false,
			},
		},
		One3: {
			screen: OneScene,
			tabBarVisible: false,
			navigationOptions: {
				tabBarVisible: false,
			},
		},
		One4: {
			screen: OneScene,
			tabBarVisible: false,
			navigationOptions: {
				tabBarVisible: false,
			},
		},
		One5: {
			screen: OneScene,
			tabBarVisible: false,
			navigationOptions: {
				tabBarVisible: false,
			},
		},
		One6: {
			screen: OneScene,
			tabBarVisible: false,
			navigationOptions: {
				tabBarVisible: false,
			},
		},
		One7: {
			screen: OneScene,
			tabBarVisible: false,
			navigationOptions: {
				tabBarVisible: false,
			},
		},
		On8: {
			screen: OneScene,
			tabBarVisible: false,
			navigationOptions: {
				tabBarVisible: false,
			},
		},
		One9: {
			screen: OneScene,
			tabBarVisible: false,
			navigationOptions: {
				tabBarVisible: false,
			},
		},
		One10: {
			screen: OneScene,
			tabBarVisible: false,
			navigationOptions: {
				tabBarVisible: false,
			},
		},
	},{
		lazy: true,
});

export default OneSceneBoxNav;




