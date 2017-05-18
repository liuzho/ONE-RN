## 仿《ONE》APP又来了！ ----//TODO

又写了一个《ONE》，别急呀，我可没copy上次写的代码~

这是用**ReactNative**写的《ONE》

基本界面都已经实现，当然了，**有些地方图省事(搞不定)** + **追求速度写的Demo**，就自然会导致：

1. 退而求其次的实现方式
2. 代码结构可能不太规范/清晰
3. 可能还有众多bug呢(我不听我不听)

项目地址 => **[https://github.com/liuzho/ONE-RN](https://github.com/liuzho/ONE-RN)**

我的个人主页 => **[https://liuzho.com](https://liuzho.com)**

### 这个Demo对你有没有帮助？

如果你初学RN，那么帮助可能有限，请你点个赞/点个star，以备后续学习

如果你是RN大牛，那么请你点个赞/点个star，慢慢看，慢慢嘲讽我

如果你有一丢丢RN基础，想练练手，那么请你点个赞/点个star，反正你也学不到啥略略略~~~

### 预览

当然了，国际惯例，甩预览图：



### 在你的电脑上运行

你需要这样做：

1. a
2. b
3. c
4. d

### 项目情况

1. **StackNavigator / TabNavigator的使用**

	你能看到的：底部Tab(TabNavigator)、第一个Tab内类似viewPager滑动(TabNavigator)、跳转到用户/搜索等界面(StackNavigator)

2. **组件信息传递props / nav的router携带数据params这些**
	
	抽取了一个Toolbar组件，title的显示通过props/router搞定，StackNavigator的router(项目内appNavigation)通过props疯狂传递给各个界面/组件	

3. **通用控件的抽取**

	Toolbar、CdView等一些组件的抽取(我没有刻意去做这件事，可能有些应该抽取的控件我并没有很好的抽取出来)

4. **动画Animated**

	我承认其实就一个假循环旋转动画....CdView点击按钮旋转，以前总结过Animated知识点现在全忘了...

5. **WebView加载网页并插入JS代码**

	Detail页面的内容，由于想快点完成Demo，也觉得界面写也就是一样的，就没自己实现，直接用了WebView加载相应的WebApp页面，然后通过`webView.injectJavaScript`插入我的JS代码，将内容中头部和底部一些不需要的地方全部通过`Element.reoveChild`给移除掉了

6. **ListView、fetch使用**

	关于ListView、fetch的使用我有写过一篇文章：[ReactNative网络fetch数据并展示在listview中](http://www.jianshu.com/p/22de6734d858)
	
	那么为什么我没有在这个基础上实现下拉刷新、上拉加载、headerView、footerView呢？因为有一个FlatList完全支持这些做法！那又为什么我没有用FlatList呢？！因为在我发现FlatList的时候为时已晚，我已经不想再修改之前写了的代码了....[FlatList中文文档](http://reactnative.cn/docs/0.44/flatlist.html#content)

7. **还有其他一些我一时也想不起来，你觉得都用到了啥？T_T求不打**

8. **感谢API哥们儿？这次你还冒出来不？**

	API：戳这里=>**[ONE的API](https://github.com/jokermonn/-Api/blob/master/ONEv3.5.0~.md)**
	
	注：若侵犯《ONE》权利，我将及时删除所有相关内容

## 结语

>- 更多内容欢迎访问**[我的主页](https://liuzho.com)**或**[我的博客](https://liuzho.github.io)**
>- 觉得本文/本Demo对你有所帮助，请不要忘了点一下文末的"♡"让他变成"❤"
>- 当然，也别忘了Star一下我的仓库 => **[ONE-RN](https://github.com/liuzho/ONE-RN)**
>- 学习就是耐住寂寞不断踩坑，多动手敲就能有更多的知识经验和肩椎脊柱受损T_T