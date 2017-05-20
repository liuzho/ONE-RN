//LiuZh 2017-05-16
import React, { Component } from 'react';

import {
  ListView,
  StyleSheet,
} from 'react-native';

import OneItem     from './OneItem';
import ContentItem from './ContentItem';

export default class MyListView extends Component{

	render() {
		return(
			<ListView
				style={styles.lvBody}
				dataSource={new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2 }).cloneWithRows(this.props.data)}
				renderRow={(rowData) => this.renderRow(rowData)}/>
		);
	}

//渲染listview的一个item
	renderRow(rowData) {
		return rowData.content_type == 0 ? this.renderOne(rowData) : this.renderContent(rowData);
	}

//渲染一个正常item
	renderContent(rowData) {
		return (
			<ContentItem 
				onPress={this.onPress}
				rowData={rowData}/>
		)
	}

	// 渲染One的item
	renderOne(rowData) {
		return  (
			<OneItem 
				appNavigation={this.props.appNavigation}
				weather={this.props.weather}
				rowData={rowData}/> 
		)
	}

//点击item跳转到详情页面
	onPress = (url, title) => {
		//Stack的navigation
		const {navigate} = this.props.appNavigation;
		navigate('Detail', {
			title: title, 
			url: url
		});
	}
}

const styles = StyleSheet.create({
	lvBody: {
		backgroundColor: '#EEEEEE',
		flex: 1,
	},
});



    /**
     * 0 one day
     * 1 read 软糖漫画
     * 2 连载
     * 3 问答
     * 4 音乐
     * 5 影视
     */

     // conten_type

    // public static final int ITEM_TYPE_DAY_ONE = 0;
    // public static final int ITEM_TYPE_READ_CARTOON = 1;
    // public static final int ITEM_TYPE_SERIAL = 2;
    // public static final int ITEM_TYPE_QUESTION = 3;
    // public static final int ITEM_TYPE_MUSIC = 4;
    // public static final int ITEM_TYPE_MOVIE = 5;