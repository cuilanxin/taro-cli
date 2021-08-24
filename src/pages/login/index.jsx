import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({ login, loading }) => ({
  num: login.num,
  isLoad: loading.effects['login/handle'],
}))
class Login extends Component {
  config = {
    navigationBarTitleText: '登陆',
  };

  componentDidMount() {
    const token = Taro.getStorageSync('token');
    if (token) {
      Taro.redirectTo({ url: '/pages/home/index' });
    }
  }
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="Login">登陆122</View>;
  }
}

export default Login;
