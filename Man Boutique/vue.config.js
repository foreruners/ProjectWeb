module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:3333/products', 
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        },
      },
    },
  };
  