import React from 'react';
import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { connect } from 'react-redux';
import { AtInput, AtMessage } from 'taro-ui';
import logo from '@/static/image/login.png';
import './index.scss';

const regPhone = /^1[34578]\d{9}$/;

@connect(({ loading }) => ({
  loading: loading.models.login,
}))
class Login extends React.Component {
  timer = React.createRef();
  state = {
    phoneValue: '',
    codeValue: '',
    sendStyle: {
      backgroundColor: '#fff',
      color: 'red',
    },
    loginStyle: {
      backgroundColor: '#09f',
    },
    flag: 60,
    isPwd: false,
  };
  componentDidMount() {
    const token = Taro.getStorageSync('token');
    if (token) {
      Taro.redirectTo({ url: '/pages/home/index' });
    }
  }
  onChange = (key, val) => {
    this.setState({ [key]: val });
  };
  onLogin = () => {
    this.props.dispatch({
      type: 'login/onLogin',
      payload: { phoneValue: this.state.phoneValue, codeValue: this.state.codeValue, type: !this.state.isPwd },
    });
  };
  sendCode = (phone, flag) => {
    if (flag !== 60) {
      Taro.atMessage({
        message: `${flag}秒后重试`,
        type: 'warning',
      });
      return;
    }
    if (!phone) {
      Taro.atMessage({
        message: '手机号不合法',
        type: 'warning',
      });
      return;
    }
    this.props
      .dispatch({
        type: 'login/sendCode',
        payload: { phoneValue: this.state.phoneValue },
      })
      .then((r) => {
        if (r) {
          this.setState({ codeValue: r });
          this.timer.current = setInterval(() => {
            if (!this.state.flag) {
              clearInterval(this.timer.current);
              this.timer.current = null;
              this.setState({ flag: 60 });
              return;
            }
            this.setState({ flag: this.state.flag - 1 });
          }, 1000);
        }
      });
  };

  render() {
    const { onChange, onLogin, sendCode } = this;
    const { phoneValue, codeValue, sendStyle, loginStyle, flag, isPwd } = this.state;
    const phone = regPhone.test(phoneValue);
    let isLogin = false;
    if (!isPwd) {
      isLogin = phone && codeValue >= 4;
    } else {
      isLogin = phoneValue.replace(/ /g, '').length >= 5 && codeValue.length >= 5;
    }
    return (
      <View className="login-container">
        <AtMessage />
        <View
          className="login-container-title"
          onClick={() => {
            this.setState({ isPwd: !isPwd, phoneValue: '', codeValue: '' });
          }}
        >
          {isPwd ? '验证码' : '账号密码'}登陆
        </View>
        <View className="login-container-top">
          <Image src={logo} className="login-container-top-img" />
          <Text className="login-container-top-text">靓仔</Text>
        </View>

        <View className="login-container-inp">
          <AtInput
            name="user"
            title={isPwd ? '账号' : '手机号'}
            type={isPwd ? 'text' : 'number'}
            placeholder={isPwd ? '请输入账号' : '请输入手机号'}
            maxLength={isPwd ? 20 : 11}
            onBlur={(e) => {
              if (!isPwd && !regPhone.test(e)) {
                Taro.atMessage({
                  message: '手机号不合法',
                  type: 'warning',
                });
              }
            }}
            value={phoneValue}
            onChange={(event) => onChange('phoneValue', event)}
          />
          <AtInput
            name="pass"
            title={isPwd ? '密码' : '验证码'}
            placeholder={isPwd ? '请输入密码' : '请输入验证码'}
            type={isPwd ? 'password' : 'number'}
            maxLength={isPwd ? 20 : 8}
            value={codeValue}
            onChange={(event) => onChange('codeValue', event)}
          >
            {isPwd ? null : (
              <View
                className="login-container-inp-right"
                style={flag < 60 ? sendStyle : {}}
                onClick={() => sendCode(phone, flag)}
              >
                {flag < 60 ? `${flag}s后重试` : '发送'}
              </View>
            )}
          </AtInput>
        </View>
        <View className="login-container-btn">
          <View className="login-container-btn-box" onClick={isLogin && onLogin} style={isLogin ? loginStyle : {}}>
            登陆
          </View>
        </View>
        <View className="login-container-info">
          <View className="login-container-info-text">忘记密码？请查看</View>
          <View className="login-container-info-text">Mocker/api.js文件登录设置</View>
        </View>
      </View>
    );
  }
}

export default Login;
