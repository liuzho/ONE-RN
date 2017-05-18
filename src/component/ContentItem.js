//LiuZh 2017-05-16
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

let windowWidth = Dimensions.get('window').width;
const contentMovie = 5;
const contentMusic = 4;

let width = windowWidth - 20;//内容宽度
let widthM4 = width / 4;//宽度1/4
let widthM2 = width / 2;//宽度1/2

export default class ContentItem extends Component{

	constructor(props){
		super(props);
		this.state = {
			imgHeight: 200,//图片高度，最终由Image.getSize决定
		};
	}

	render() {
		let data = this.getData(this.props.rowData);
		return(
			<TouchableWithoutFeedback
				onPress={() => {this.props.onPress(data.url, data.type)}}>
				<View style={styles.itemBody}>
					<Text style={styles.typeTxt}> {`- ${data.type} -`} </Text>
					<Text style={styles.titleTxt}> {data.title} </Text>
					<Text style={styles.authorTxt}> {data.author} </Text>
					{
						data.contentType == contentMusic ? (
							<View style={styles.musicBox}>
								<View>
									<Image style={styles.xiamiImg} 
										source={require('../img/xiami.png')}/>
									<Image style={styles.cdImg}
										resizeMode="contain"
										source={{uri: data.imgUrl}}>
										{/*<TouchableWithoutFeedback 
											onPress={()=>{alert('click')}}>
											<Image style={{height: 28,width:28,}}
												source={require('../img/play.png')} />
										</TouchableWithoutFeedback>*/}
									</Image>
								</View>
								<View style={{flex: 1,}}/>
								<Image style={styles.musicRightImg}
									resizeMode="contain"
									source={require('../img/music_right.png')} />
							</View>
						) : (
							<Image style={[styles.imgPic,{height: this.state.imgHeight,}]} 
								resizeMode="contain"
								source={{uri: data.imgUrl}}/>
						)
					}
					<Text style={data.contentType == contentMusic ? styles.musicNameTxt : {height: 0,}}>this is music name</Text>
					<Text style={styles.contentTxt}>{data.content}</Text>
					<Text style={data.contentType == contentMovie ? styles.movieNameTxt : {height: 0,}}> {`--《${data.movieName}》`} </Text>
					<View style={styles.bottomBox}>
						<Text style={styles.bottomTxt}> {data.time} </Text>
						<View style={{flex: 1,}}></View>
						<Text style={styles.bottomTxt}> {data.likeCount} </Text>
						<Image 
							style={styles.bottomImg}
							source={require('../img/bubble_like.png')} />
						<View style={{width: 20,}}/>
						<Image
							style={styles.bottomImg}
							source={require('../img/bubble_share.png')} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}

	componentDidMount() {
		Image.getSize(this.props.rowData.img_url, this.getSizeSuccess(), this.getSizeFailure);
	}

	//img的getSize成功回调
	getSizeSuccess() {
		//用that指代本组件，否则函数内this指向Image了，setState()方法就不存在于Image而报错
		let that = this;
		return (width, height) => {
			height = ((windowWidth - 20) / width) * height;
			that.setState({
				imgHeight: height,
			});
		}
	}
//img的getSize失败回调
	getSizeFailure(error) {
		alert(`get img size failure=>${error}`);
	}

//将rowData提取一些需要的数据，转换成一个更轻量的对象数据
	getData(rowData) {
		return {
			contentType: rowData.content_type,
			movieName: rowData.content_type == contentMovie ? rowData.subtitle : 'unknow',
			type: rowData.share_list.wx.title.split('|')[0].trim(),
			title: rowData.title,
			author: rowData.share_list.wx.desc.split(' ')[0].replace('/',' / '),
			imgUrl: rowData.img_url,
			content: rowData.forward,
			time: 'n小时前',
			likeCount: rowData.like_count,
			url: rowData.share_info.url,
		};
	}


}


const styles = StyleSheet.create({
	itemBody: {
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		paddingRight: 10,
		marginBottom: 12,
	},
	typeTxt: {
		fontSize: 11,
		color: '#666666',
	},
	titleTxt: {
		width: width,
		lineHeight: 24,
		fontSize: 16,
		color: '#000000',
	},
	authorTxt: {
		width: width,
		lineHeight: 30,
		fontSize: 11,
		color: '#888888',
	},
	imgPic: {
		width: width,
		marginTop: 8,
		marginBottom: 8,
	},
	contentTxt: {
		width: width,
		fontSize: 13,
		color: '#999999',
		lineHeight: 26,
	},
	movieNameTxt: {
		width: width,
		textAlign: 'right',
		fontSize: 14,
		color: '#999999',
	},
	bottomBox: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 8,
	},
	bottomTxt: {
		lineHeight: 17,
		height: 18,
		fontSize: 11,
		color: '#BBBBBB',
		marginRight: 5,
	},
	bottomImg: {
		width: 18,
		height: 18,
	},
	musicBox: {
		height: widthM2,
		width: width,
		flexDirection: 'row',
	},
	musicRightImg: {
		height: widthM2,
		alignSelf: 'flex-end',
	},
	xiamiImg: {
		width: 28,
		height: 28,
		position: 'absolute',
		left: 0,
		top: widthM2 - 32,
	},
	cdImg: {
		height: widthM2,
		width: widthM2,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: widthM4,
		borderRadius: widthM4,
	},
});