//LiuZh 2017-05-16
import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import MyListView from '../component/MyListView';

const READ_URL = 'http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android';

export default class ReadScene extends Component{

	constructor(props){
		super(props);

		this.state = {
			readData: null,
		}
	}

//如果有数据，渲染lv数据，如果没有数据，渲染等待页面
	render() {
		return this.state.readData? this.renderLv() : this.renderLoadingView();
	}

//渲染等待视图，TODO：实现动画等待==>导入component方式
	renderLoadingView() {
		return (
			<View style={styles.loading}>
				<Text>Loading...(TODO动画)</Text>
			</View>
		);
	}
//渲染listView展示数据
	renderLv() {
		return(
			<MyListView
				navigation={this.props.screenProps.appNavigation}
				data={this.state.readData}/>
		);
	}

	componentDidMount() {
		this.fetchRead();
	}

	fetchRead() {
		fetch(READ_URL)
		.then((response) => response.json())
		.then((jsonData) => {
			this.setState({
				readData: jsonData.data,
			});
		})
		.catch((error) => {
			alert(error);
		});
	}
}

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

});