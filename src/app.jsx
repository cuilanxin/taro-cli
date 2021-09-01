import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { Provider } from 'react-redux';
import 'taro-ui/dist/style/index.scss';
// import '@tarojs/async-await';
import dva from './utils/dva';
import models from './models';
import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释： 取消注释有可能出现
// The react devtools encountered an error
// TypeError: Cannot set property `${value}` of undefined
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
//   require('nerv-devtools');
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();
class App extends Component {
  componentDidMount() {
    const token = Taro.getStorageSync('token');
    if (!token) {
      Taro.redirectTo({ url: '/pages/login/index' });
    }
  }
  // 鉴权
  power = (path) => {
    const token = Taro.getStorageSync('token');
    if (!token) {
      Taro.navigateTo({ url: '/pages/login/index' });
      return;
    }
    if (typeof path === 'function') {
      path();
    } else {
      Taro.navigateTo({ url: path });
    }
  };
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
