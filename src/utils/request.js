import Taro from '@tarojs/taro';
// import '@tarojs/async-await';

export const apiRoot = 'http://localhost:9527';

export default async function request(api, params) {
  const result = await Taro.request({
    // mode: 'cors', // 跨域
    // mode: 'no-cors',
    url: apiRoot + api,
    data: params.body,
    method: params.method || 'GET',
    header: params.header || {
      'content-type': 'application/json', // 默认值
      //   // 'Access-Control-Allow-Origin': '*',
      // userToken: Taro.getStorageSync('token'),
    },
  }).then(
    (data) => {
      // if (data.data.code === 13002) {
      //   Taro.clearStorage();
      //   Taro.navigateTo({
      //     url: '/pages/login/index',
      //   });
      // }
      // if (data.data.code === 500) {
      //   Taro.clearStorage();
      //   Taro.navigateTo({
      //     url: '/pages/login/index',
      //   });
      // }
      return data;
    },
    (err) => {
      // eslint-disable-next-line no-console
      console.log(`这是接口${api}请求错误错误: `, err);
    },
  );
  return result;
}
