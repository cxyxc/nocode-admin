// TODO: 生产环境下 serverless 自动注入 apiUrl
// TODO: serverless fullstack 暂无 gateway 处理反向代理，由后端开启跨域解决
import { RequestOptionsInit } from 'umi-request';

// @ts-ignoreapiUrl
let apiUrl = window?.env?.apiUrl?.slice(0, -1);
if (process.env.NODE_ENV === 'development') {
  // 前端单独开发
  apiUrl = '';
}
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  // 前后端同步开发
  apiUrl = 'http://localhost:8888';
}

// request interceptor, change url or options.
export function apiUrlInterceptor(url: string, options: RequestOptionsInit) {
  const { headers, ...others } = options;
  return {
    // @ts-ignore
    url: `${apiUrl}${url}`,
    options: {
      ...others,
      headers: {
        ...headers,
        authorization: localStorage.getItem('token') || '',
      },
    },
  };
}
