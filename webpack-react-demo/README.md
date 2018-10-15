这个demo是本人react的测试点，也是开始学习react以来第一个网站型demo.

包工具使用的webpack.

UI部分使用的antd design.

网站分为三个部分： 1.新闻网页  2.游戏页面  3.联系界面

使用react-router4.x控制路由，点击导航可跳转到各个页面.

网站的设计整体分为三个部分，Header、Content以及Footer，复用组件是Header以及footer，路由切换的部分是Content.

Header部分有用户登录和退出登录功能.

新闻界面获取新闻使用的网上的免费新闻API，使用的是axios进行交互.