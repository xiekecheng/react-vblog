/*
 * @Author: your name
 * @Date: 2021-08-19 00:44:50
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 00:56:24
 * @FilePath: /react-vblog/src/setupProxy.js
 */
const { createProxyMiddleware } = require('http-proxy-middleware');
//   "proxy": "http://localhost:9999",
// 配置请求转发
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:9999',
      changeOrigin: true,
    })
  );
};