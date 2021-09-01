import React from 'react';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtActionSheet, AtActionSheetItem } from 'taro-ui';
import Loading from '@/components/loading';
import './index.scss';

/**
 * props
 * @param {*} type=['image'] type=['image']=上传图片 type=['video']=上传视频 type=['image','video']=上传图片视频
 * @param {*} sourceType=['album', 'camera']  album=相册选	camera=相机拍
 * @param {*} success 成功的回调函数 可以不写, 但是写的时候需要返回一个成功的数组 类型[{path: '',size: }]至少要有path, video, size, type
 * @param {*} fail 失败的回调函数
 * @param {*} complete 成功 失败的都会执行
 * @param {*} uploadFile 上传到服务器的方法
 * @param {*} limit 限制可上传数量
 * @param {*} style 容器样式，默认 Grid 布局
 */
/**
 * type.includes('image')
 * @param {*} count=9  最多可以选择的图片张数
 * @param {*} sizeType=['original', 'compressed']  original=原图	compressed=压缩图
 */
/**
 * type.includes('video')
 * @param {*} compressed=true  是否压缩所选择的视频文件
 * @param {*} maxDuration=60  拍摄视频最长拍摄时间，单位秒
 * @param {*} camera='back'  默认拉起的是前置或者后置摄像头 front=前 back=后
 */
class UpFile extends React.PureComponent {
  static defaultProps = {
    type: ['image'],
    count: 9,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    fail: undefined,
    complete: undefined,
    limit: undefined,
    compressed: true,
    maxDuration: 60,
    camera: 'back',
    success: undefined,
  };
  state = {
    isOpened: false,
    data: [],
  };
  // 上传入口
  onUp = () => {
    const { type } = this.props;
    if (type.length === 1 && type[0] === 'image') {
      this.onUpImage();
    }
    if (type.length === 1 && type[0] === 'video') {
      this.onUpVideo();
    }
    if (type.length === 2 && type.includes('image') && type.includes('video')) {
      this.setState({ isOpened: true });
    }
  };
  // 上传图片
  onUpImage = () => {
    this.setState({ isOpened: false });
    let {
      count = 9,
      sizeType = ['original', 'compressed'],
      sourceType = ['album', 'camera'],
      fail,
      complete,
      limit,
    } = this.props;
    let len = limit - this.state.data.length;
    if (typeof limit !== 'undefined') {
      count = len;
    }
    Taro.chooseImage({
      count,
      sourceType,
      sizeType,
      success: (res) => {
        this.update(res.tempFiles.map((item) => ({ ...item, type: 'image' })));
      },
      fail: (err) => {
        fail && fail(err);
      },
      complete: (allWays) => {
        complete && complete(allWays);
      },
    });
  };
  // 上传视频
  onUpVideo = () => {
    this.setState({ isOpened: false });
    const {
      compressed = true,
      maxDuration = 60,
      camera = 'back',
      sourceType = ['album', 'camera'],
      fail,
      complete,
    } = this.props;
    Taro.chooseVideo({
      compressed,
      maxDuration,
      camera,
      sourceType,
      success: (res) => {
        this.update([{ path: res.thumbTempFilePath, size: res.size, video: res.tempFilePath, type: 'video' }]);
      },
      fail: (err) => {
        fail && fail(err);
      },
      complete: (allWays) => {
        complete && complete(allWays);
      },
    });
  };
  // 更新 state
  update = (list) => {
    const { success } = this.props;
    if (typeof success === 'function') {
      Promise.resolve(() => {
        return success(list);
      }).then((data) => this.setState({ data: [...this.state.data, ...data] }));
    } else {
      this.setState({ data: [...this.state.data, ...list] });
    }
  };
  // 删除
  deleteImage = (e, path) => {
    e.stopPropagation();
    this.setState({ data: this.state.data.filter((item) => item.path !== path) });
  };
  // 查看大图
  examine = (e, path, current) => {
    e.stopPropagation();
    const sources = [];
    for (let i = 0; i < this.state.data.length; i++) {
      const item = this.state.data[i];
      if (item.type === 'image') {
        sources.push({
          ...item,
          poster: item.path,
          url: item.path,
        });
      }
      if (item.type === 'video') {
        sources.push({
          ...item,
          poster: item.path,
          url: item.video,
        });
      }
    }
    // eslint-disable-next-line no-undef
    wx.previewMedia({
      sources,
      current,
      showmenu: false,
    });
  };
  render() {
    const { isOpened, data } = this.state;
    const limit = this.props.limit === undefined ? true : this.props.limit > data.length;
    return (
      <View key="cuilanxincontainer">
        <View className="up-container" style={{ ...this.props.style }} key="cuilanxin22">
          {data.map((item, index) => {
            let timer = item.size / 10000000;
            if (timer < 1) {
              timer = 1;
            }
            if (timer < 0) {
              timer = false;
            }
            return (
              <View className="up-file-image" key={item.path}>
                <View className="up-file-image-box">
                  <Image className="up-file-image" src={item.path} onClick={(e) => this.examine(e, item, index)} />
                </View>
                <View className="up-file-image-close" onClick={(e) => this.deleteImage(e, item.path)}>
                  +
                </View>
                {timer && (
                  <View className="up-file-loading" style={{ animationDuration: timer + 's' }}>
                    <Loading />
                  </View>
                )}
              </View>
            );
          })}
          {limit && (
            <View className="up-file" onClick={this.onUp} key="cuilanxin">
              +
            </View>
          )}
        </View>
        <AtActionSheet isOpened={isOpened} key="cuilanxin-1">
          <AtActionSheetItem onClick={this.onUpImage}>图片</AtActionSheetItem>
          <AtActionSheetItem onClick={this.onUpVideo}>视频</AtActionSheetItem>
        </AtActionSheet>
      </View>
    );
  }
}

export default UpFile;
