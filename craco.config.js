const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              //"@primary-color": "#1DA57A",
              '@font-size-base': '12px'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  }
};
