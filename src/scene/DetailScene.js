//LiuZh 2017-05-17
import React, { Component } from 'react';

import {
  Text,
  View,
  WebView,
  StyleSheet,
} from 'react-native';

export default class DetailScene extends Component{

	render() {
		return (
			<WebView
				url={this.props.url}
				startInLoadingState={true}  
        domStorageEnabled={true}  
        javaScriptEnabled={true}/>
		);
	}

}

const styles = StyleSheet.create({

});
