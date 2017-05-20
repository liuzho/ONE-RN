//LiuZh 2017-05-20
import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Image,
  Text,
  Modal,
  TouchableWithoutFeedback,
  ToastAndroid,
  TextInput,
  ScrollView,
} from 'react-native';


export default class EditScene extends Component{

	constructor(props) {
		super(props);

		this.state = {
			popVisible: false,
		};
	}

	render() {
		ToastAndroid.show('不知道这个界面什么意义，反正就写了这样吧，没其他功能',ToastAndroid.SHORT);
		let {weather, editData, imgSize} = this.props.navigation.state.params;
		let date = weather.date.replace(/-/g, ' / ');
		return (
			<ScrollView >
				<View style={styles.itemBody}>
					<Modal
						transparent={true}
						animationType={'fade'}
						visible={this.state.popVisible}
						onRequestClose={()=>{}}>
						<View />
					</Modal>
					<Text style={styles.dateTxt}>{date}</Text>
					<Text style={styles.cityTxt}>{'阴晴不定，南昌'}</Text>
					<TouchableWithoutFeedback
						onPress={this.changePopVisible}>
						<View style={styles.imgBox}>
							<Image
								source={{uri: editData.img_url}}
								style={imgSize}/>
							<Text style={styles.volTxt}>{editData.volume}</Text>
						</View>
					</TouchableWithoutFeedback>
					<Text style={styles.titleTxt}>{`${editData.title} | ${editData.pic_info}`}</Text>
					<TextInput style={[styles.editTxt,{width: imgSize.width * 0.85,}]}
						maxLength={2000}
						defaultValue={editData.forward}
						numberOfLines={5}
						underlineColorAndroid={'transparent'}
						multiline={true}/>
					<Text style={[styles.titleTxt,{marginTop: 20,marginBottom: 50,}]}>{editData.words_info}</Text>
				</View>
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
	itemBody: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	dateTxt: {
		marginTop: 10,
		fontSize: 17,
		color: '#000000',
	},
	cityTxt: {
		fontSize: 11,
		color: '#222222',
	},
	imgBox: {
		marginTop: 7,
		marginBottom: 8,
		position: 'relative',
	},
	volTxt: {
		position: 'absolute',
		left: 8,
		top: 8,
		color: '#FFFFFF',
		fontSize: 13,
		textShadowOffset: {
			width: 1,
			height: 1,
		},
		textShadowRadius: 2,
	},
	titleTxt: {
		fontSize: 11,
		color: '#888888',
	},
	editTxt: {
		borderWidth: 1,
		borderColor: '#DFDFDF',
		fontSize: 14,
		lineHeight: 20,
		color: '#333',
		marginTop: 40,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 5,
	}
});