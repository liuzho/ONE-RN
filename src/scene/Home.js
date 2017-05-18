//LiuZh 2017-05-18
import React, { Component } from 'react';

import {
  StyleSheet,
} from 'react-native';

import HomeNav from '../navigator/HomeNav';

export default class Home extends Component{

	render() {
		return (
			<HomeNav
				screenProps={{appNavigation: this.props.navigation,}}
				style={{flex: 1,}}/>
		);
	}
}