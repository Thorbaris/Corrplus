module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ],
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
  //publicPath: '/dist-test/',
};
