const path = require('path')
module.exports = {
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('components', path.resolve(__dirname, './src/components'))
        .set('pages', path.resolve(__dirname, './src/pages'))
        .set('assets', path.resolve(__dirname, './src/assets'))
    },
    devServer: {
        proxy: {
          '/ajax': {
            target: 'https://m.ymatou.com/',
            changeOrigin: true,
            secure:false,
            pathRewrite:{'^/ajax':''}
          }
        }
      }
    
}