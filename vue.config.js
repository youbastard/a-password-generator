// eslint-disable-next-line no-unused-vars
const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {

  // Enable sass mixins and vars to be used
  // within component styles
  // requires 'sass' and 'sass-loader' packages
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/tachyons";
        `
      }
    }
  },

  // enable SVGs to be imported as components
  // useful for reusing SVGs by applying styles
  // and reducing the amount of network requests
  // requires "vue-svg-loader" package
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
};
