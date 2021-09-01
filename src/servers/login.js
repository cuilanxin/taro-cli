import request from '@/utils/request';

// 登陆
export function onLogin(params) {
  return request('/api/user/login', {
    method: 'POST',
    body: params,
  });
}

// 验证码
export function sendCode(params) {
  return request('/api/user/sendCode', {
    method: 'POST',
    body: params,
  });
}
