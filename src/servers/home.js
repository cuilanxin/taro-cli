import request from '@/utils/request';

// 数据
export function getList(params) {
  return request('/api/home/list', {
    method: 'POST',
    body: params,
  });
}

// 加载更多
export function getPageList(params) {
  return request('/api/home/page', {
    method: 'POST',
    body: params,
  });
}
