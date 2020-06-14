import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super()
    this.state = {
      fixTop: '', //  区域离顶部的高度
      scrollTop: 0, //  滑动条离顶部的距离
    }
  }

  onPageScroll() {
    let self = this;
    Taro.createSelectorQuery().select('.static-news').boundingClientRect(function (rect) {
      self.setState({
        fixTop: rect.top,
      })
    }).exec()
  }
  scroll(e) {
    // let self = this;
    let top = e.detail.scrollTop;
    console.log(top)
    this.setState({
      scrollTop: top
    });
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { scrollTop, fixTop } = this.state;
    return (
      <View className="container">
        <ScrollView
          scrollY
          style={{ height: '100vh' }}
          onScroll={this.scroll}
        >
          <View className="content">
            这是一段文字
          </View>
          {/* <View className="news static-news"><Text>今日新闻列表</Text></View> */}


          <View className={`news ${scrollTop > 200 ? 'fix-news' : ''}`}><Text>今日新闻列表</Text></View>



          <View className="news-list">
            <View>
              这是一个小程序
          </View>
            <View>
              这是一个小程序
          </View>
            <View>
              这是一个小程序
          </View>
            <View>
              这是一个小程序
          </View>
            <View>
              这是一个小程序
          </View>
            <View>
              这是一个小程序
          </View>
            <View>
              这是一个小程序
          </View>
            <View>
              这是一个小程序
          </View>
          <View>
              这是一个小程序
          </View>
          <View>
              这是一个小程序
          </View>
          <View>
              这是一个小程序
          </View>
          <View>
              这是一个小程序
          </View>
          <View>
              这是一个小程序
          </View>
          <View>
              这是一个小程序
          </View>
          <View>
              这是一个小程序
          </View>
          <View>
              这是一个小程序
          </View>
          <View>
              这是一个小程序
          </View>
          <View>
              这是一个小程序
          </View>
          </View >
        </ScrollView >
      </View >
    )
  }
}
