const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
  target: "http://127.0.0.1:8080",
  changeOrigin: true,
};


const proxy2 = {
  target: "http://localhost:7777",
  changeOrigin: true,
};

module.exports = function (app) {
  app.use("/auth", createProxyMiddleware(proxy));
  app.use("/api", createProxyMiddleware(proxy2));
};
