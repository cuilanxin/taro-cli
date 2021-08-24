const isH5 = process.env.CLIENT_ENV === 'h5';
const HOST = '"http://localhost:9527"'; // 你自己的请求域名

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {
    HOST: isH5 ? '"/api"' : JSON.parse(HOST),
  },
  h5: {
    devServer: {
      port: '3000',
      proxy: {
        '/': {
          target: JSON.parse(HOST),
          pathRewrite: {
            '^/': '/',
          },
          changeOrigin: true,
        },
      },
    },
    mini: {},
    // h5: {},
  },
};
