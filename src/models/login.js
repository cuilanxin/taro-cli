import { onLogin } from '@/servers/login';

export default {
  namespace: 'login',
  state: {
    num: 1,
  },
  effects: {
    *handle({ payload }, { put }) {
      yield put({
        type: 'update',
        payload,
      });
    },
    *onLogin(_, { call }) {
      yield call(onLogin, { username: 'admin', password: 'admin' });
      // console.log('data: ', data);
      // Taro.setStorageSync('token',)
    },
  },
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
