//LiuZh 2017-05-16
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import AppNav from './src/navigator/AppNav';

class App extends Component{
  render() {
    return(
      <AppNav
        screenProps={{navigation: this.props.navigation}}
        style={{flex: 1,}} />
    );
  }
}

AppRegistry.registerComponent('ONE', () => App);