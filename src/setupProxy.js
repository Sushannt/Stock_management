const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "http://103.166.62.80/MC_StockMgmtPilkhua",
            pathRewrite: { "^/api": "/api" },
            changeOrigin: true,
        })
    );
};