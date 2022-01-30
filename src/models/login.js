import Taro from '@tarojs/taro';
import { onLogin, sendCode } from '@/servers/login';

export default {
  namespace: 'login',
  state: {
    code: '',
  },
  effects: {
    *onLogin({ payload }, { call }) {
      Taro.showLoading({
        title: '登陆中',
        mask: true,
      });
      const data = yield call(onLogin, {
        username: payload.phoneValue,
        password: payload.codeValue,
        type: payload.type,
      });
      if (data && data.code === 1) {
        Taro.setStorageSync('token', data.token);
        Taro.getApp().$app.powerLink(() => Taro.reLaunch({ url: '/pages/home/index' }));
      } else {
        Taro.atMessage({
          message: data?.message,
          type: 'warning',
        });
      }
    },
    *sendCode({ payload }, { call }) {
      Taro.showLoading({
        title: '发送中',
        mask: true,
      });
      const data = yield call(sendCode, payload);
      if (data && data.code === 1) {
        Taro.showToast({
          title: '发送成功',
          icon: 'success',
          duration: 1000,
        });
        return data.codeValue;
      } else if (data) {
        Taro.atMessage({
          message: data?.message,
          type: 'warning',
        });
      }
    },
  },
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
