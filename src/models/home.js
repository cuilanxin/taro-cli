import Taro from '@tarojs/taro';
import { getList, getPageList } from '@/servers/home';

export default {
  namespace: 'home',
  state: {
    data: [],
    page: 1,
    completely: false,
  },
  effects: {
    *getList(_, { call, put }) {
      Taro.showLoading({
        title: '加载中',
        mask: true,
      });
      const data = yield call(getList, {});
      Taro.hideLoading();
      if (data && data.code === 1) {
        yield put({
          type: 'update',
          payload: { data: data.data, completely: true, page: 1 },
        });
      } else {
        Taro.atMessage({
          message: data.message,
          type: 'warning',
        });
      }
    },
    *getPageList(_, { call, select, put }) {
      Taro.showLoading({
        title: '加载中',
        mask: true,
      });
      const { page, list } = yield select(({ home }) => ({
        page: home.page,
        list: home.data,
      }));
      const data = yield call(getPageList, { page });
      Taro.hideLoading();
      if (data && data.code === 1) {
        yield put({
          type: 'update',
          payload: { data: [...list, ...data.data], completely: true },
        });
      } else if (data) {
        yield put({
          type: 'update',
          payload: { completely: true },
        });
        Taro.atMessage({
          message: data.message,
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
