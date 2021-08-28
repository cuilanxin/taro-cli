import Taro from '@tarojs/cli';
// 保存图片视频 保存视频到系统相册。支持mp4视频格式。需要用户授权
/**
 * 保存图片视频 保存视频到系统相册。支持mp4视频格式。需要用户授权
 * 参考 https://taro-docs.jd.com/taro/docs/apis/media/video/saveVideoToPhotosAlbum
 * @param {*}
 */
export function savePicture({}) {
  Taro.saveVideoToPhotosAlbum({
    filePath: erwema,
    success: (res) => {
      this.props.onCancel && this.props.onCancel(res);
    },
    fail: (err) => {
      this.props.onCancel(err);
    },
  });
}

/**
 * 电话
 */
export function callPhone(phone) {
  Taro.makePhoneCall({
    phoneNumber: phone,
  });
}

/**
 * 获取盒子距离屏幕左上方坐标
 */
export function getLocation() {
  Taro.createSelectorQuery()
    .in(this.$scope)
    .select('#select-container-title')
    .boundingClientRect((rect) => {
      this.setState({
        location: rect,
        position: { top: rect.top + rect.height + 'px' },
      });
    })
    .exec();
}

// 页面下拉 上拉
// config = {
//   navigationBarTitleText: '标题',
//   enablePullDownRefresh: true, //是否开启
//   onReachBottomDistance: 50, // 页面上拉触底事件触发时距页面底部距离，单位为 px
//   backgroundTextStyle: 'dark', // dark / light
// }
// 下拉刷新
// onPullDownRefresh() {
//   this.props.dispatch({
//     type: 'home/getList',
//   });
//   this.props.dispatch({
//     type: 'home/getGoods',
//   });
//   Taro.stopPullDownRefresh(); 要关掉
// }
// 上拉加载更多
// onReachBottom() {
//   if (this.props.goods.length > 30) {
//   } else {
//     this.props.dispatch({
//       type: 'home/update',
//       payload: { goods: [...this.props.goods, ...this.props.goods] },
//     });
//   }
// }
