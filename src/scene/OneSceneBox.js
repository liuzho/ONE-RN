//LiuZh 2017-05-18
import React, { Component } from 'react';

import {
  StyleSheet,
} from 'react-native';

import OneSceneBoxNav from '../navigator/OneSceneBoxNav';

export default class OneSceneBox extends Component{

	render() {
		let screenProps = {
			appNavigation: this.props.screenProps.appNavigation,
		};
		return (
			<OneSceneBoxNav
				screenProps={screenProps}
				style={{flex: 1,}}/>
		);
	}
}