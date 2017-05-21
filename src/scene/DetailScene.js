//LiuZh 2017-05-17
import React, { Component } from 'react';

import {
  View,
  WebView,
  StyleSheet,
  Image,
} from 'react-native';

import DetailBottom from '../component/DetailBottom';

export default class DetailScene extends Component{

	webView = null;

	render() {
		
		let url = this.props.navigation.state.params.url;
		return (
			<View style={styles.body}>
				<WebView
					ref={(webView) => {this.webView = webView}}
					style={styles.webView}
					source={{uri: url}}
					onLoad={this.inJectJS}
					contentInset={{top: -50, left: 0, bottom: 0, right: 0}}
					renderError={this.renderError}
					startInLoadingState={true}
    	    domStorageEnabled={true}
    	    javaScriptEnabled={true}/>
    	  <DetailBottom/>
      </View>
		);
	}

	renderError() {
		return (
			<View style={styles.errorBody}>
				<Image style={styles.errorImg}
					source={require('../img/error.png')}/>
			</View>
		);
	}

	inJectJS = () => {
		//不同内容的页面，元素节点class和id不一样....就不管分类，全有可能的都删一遍吧，顶部其实已经通过marginTop给隐藏在toolbar之下了
		let removeHeader = `document.getElementsByClassName('header')[0].parentNode.removeChild(document.getElementsByClassName('header')[0]);`;
		let removeDownload = `document.getElementsByClassName('download')[0].parentNode.removeChild(document.getElementsByClassName('download')[0]);`;
		let removeFooter = `document.getElementsByClassName('footer')[0].parentNode.removeChild(document.getElementsByClassName('footer')[0]);`;
		this.webView.injectJavaScript(removeHeader);
		this.webView.injectJavaScript(removeDownload);
		this.webView.injectJavaScript(removeFooter);
	}

}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	webView: {
		flex: 1,
		marginTop: -50,
	},
	errorImg: {
		height: 150,
		width: 90,
	},
	errorBody: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});
