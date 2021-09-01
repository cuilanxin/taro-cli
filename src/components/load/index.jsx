import Taro from '@tarojs/taro';
import React from 'react';
import { View, ScrollView } from '@tarojs/components';
import './index.scss';
// 初衷 - 上拉刷新 下拉加载
class Load extends React.PureComponent {
  static defaultProps = {
    /** 头部元素 */
    dropChildren: '下拉刷新',
    /** 底部元素 */
    pullChildren: '上拉加载',
    /** 下拉一定的高度回调伐值 */
    topHeight: 40,
    /** 下拉一定高度执行回调 */
    onDrop: Function,
    /** 上划一定的高度回调伐值 */
    bottomHeight: 40,
    /** 上划一定高度执行回调 */
    onPull: Function,
    /**
     * 触摸结束执行的回调
     * @param {*} type 'drop' | 'pull'
     */
    onHandle: (type) => {
      return type;
    },
    /** 是否完全闭合 */
    completely: true,
    /** 容器样式 */
    containerStyle: {
      position: 'relative',
      overflow: 'hidden',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'transparent',
    },
    /**是否允许滚动，可以设置false */
    scrollY: true,
    /** 双击状态栏回到滚动条顶部 */
    enableBackToTop: false,
    /** 开始动画滚动 */
    scrollWithAnimation: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      container: {},
    };
  }
  cuilanxinlocation = {};
  cuilanxintype = 0;
  cuilanxindrop = 0;
  cuilanxinpull = 0;
  // 下拉
  dropHandle = (top) => {
    if (top < 0) return false;
    const { topHeight, onDrop } = this.props;
    if (top >= topHeight && this.cuilanxindrop === 0) {
      onDrop && onDrop(top);
      this.cuilanxindrop++;
    }
    this.setState({ container: { top: top + 'px' } });
  };
  // 上划
  pullHandle = (bottom) => {
    if (bottom < 0) return false;
    const { bottomHeight, onPull } = this.props;
    if (bottom >= bottomHeight && this.cuilanxinpull === 0) {
      onPull && onPull(bottom);
      this.cuilanxinpull++;
    }
    this.setState({ container: { bottom: bottom + 'px' } });
  };
  // 手指触摸动作开始
  onTouchStart = (event) => {
    event.stopPropagation();
    this.cuilanxinlocation = event.touches[0];
    // event.touches 点击时的坐标
  };
  // 手指触摸后移动
  onTouchMove = (event) => {
    const containerClient = event.touches[0].clientY;
    const showTop = this.cuilanxinlocation.clientY;
    if (this.cuilanxintype === 1) {
      return false;
    }
    // 下拉
    if (this.cuilanxintype === 0) {
      this.dropHandle(containerClient - showTop);
      return false;
    }
    // 上滑
    if (this.cuilanxintype === 2) {
      this.pullHandle(showTop - containerClient);
    }
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.completely !== nextProps.completely) {
      if (nextProps.completely) {
        let key = this.cuilanxintype === 0 ? 'top' : 'bottom';
        this.setState({ container: { [key]: 0 } });
      }
    }
  }
  // 重制
  reset = (key, val, type) => {
    if (key === 'top') {
      if (this.state.container[key] < this.props.topHeight) {
        this.setState({ container: { [key]: 0 } });
        return false;
      }
    }
    if (key === 'bottom') {
      if (this.state.container[key] > this.props.bottomHeight) {
        this.setState({ container: { [key]: 0 } });
        return false;
      }
    }
    let num = this.props.completely ? 0 : val;
    this.setState({ container: { [key]: num + 'px' } }, () => {
      this.props.onHandle(type);
    });
  };
  // 手指触摸动作结束
  onTouchEnd = () => {
    this.cuilanxinlocation = {};
    const { topHeight, bottomHeight } = this.props;
    if (this.cuilanxintype === 0) {
      this.cuilanxindrop = 0;
      this.reset('top', topHeight, 'drop');
      return false;
    }
    if (this.cuilanxintype === 2) {
      this.reset('bottom', bottomHeight, 'pull');
      this.cuilanxinpull = 0;
    }
  };
  // 滚动到顶部
  onScrollToUpper = () => {
    this.cuilanxintype = 0;
  };
  // 滚动到底部
  onScrollToLower = () => {
    this.cuilanxintype = 2;
  };
  // 滚动时触法
  onScroll = (event) => {
    // console.log('event: ', event);
    if (this.cuilanxintype === 0 && event.detail.scrollTop > 10) {
      this.cuilanxintype = 1;
    }
    // if(this.cuilanxintype === 2 && event.detail.scrollTop < 10)
  };
  render() {
    const { onTouchStart, onTouchMove, onTouchEnd, onScrollToUpper, onScrollToLower, onScroll } = this;
    const { scrollY, enableBackToTop, scrollWithAnimation, containerStyle, dropChildren, children, pullChildren } =
      this.props;
    const { container } = this.state;
    return (
      <View className="load-container" style={{ ...containerStyle, position: 'relative', overflow: 'hidden' }}>
        <View className="load-container-drop">{dropChildren}</View>
        <ScrollView
          onTouchStart={onTouchStart} // 手指触摸动作开始
          onTouchMove={onTouchMove} // 手指触摸后移动
          onTouchEnd={onTouchEnd} // 手指触摸动作结束
          onScrollToUpper={onScrollToUpper} // 滚动到顶部
          upperThreshold={10} // 距离顶部多远触发 onScrollToUpper
          onScrollToLower={onScrollToLower} // 滚动到底部
          lowerThreshold={10} // 距离底部多远触发 onScrollToLower
          onScroll={onScroll} // 滚动时触法
          style={container}
          scrollY={scrollY}
          scrollTop={0} // 设置竖向滚动条位置
          className="load-container-scroll"
          id="load-container-scroll"
          scrollWithAnimation={scrollWithAnimation} // 动画
          enableBackToTop={enableBackToTop} // 双击顶部状态栏返回顶部
        >
          {children}
        </ScrollView>
        <View className="load-container-pull">{pullChildren}</View>
      </View>
    );
  }
}

export default Load;
