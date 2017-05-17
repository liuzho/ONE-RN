//LiuZh 2017-05-16
import {
  AppRegistry,
} from 'react-native';
//导入SN用作顶部back等的导航
import {
	StackNavigator,
} from 'react-navigation';
//导入主页
import HomeScene from './src/scene/Home';

const App = StackNavigator({
		Home: {
			screen: HomeScene,
		},
	});

AppRegistry.registerComponent('ONE', () => HomeScene);
