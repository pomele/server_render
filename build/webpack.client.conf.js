const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
const glob = require('glob')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const isProd = process.env.NODE_ENV === 'production'

const config = merge(base, {
  // mode: process.env.NODE_ENV || 'development',
  entry: {
    app: './src/client-entry.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name]-[chunkhash].js'
  },
  resolve: {
    alias: {
      'create-api': './create-api-client.js'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"',
      'process.env.DEBUG_API': '"true"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return (
          /node_modules/.test(module.context) && !/\.css$/.test(module.require)
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    // 这是将服务器的整个输出
    // 构建为单个 JSON 文件的插件。
    // 默认文件名为 `vue-ssr-server-bundle.json`
    new VueSSRClientPlugin()
  ]
})
module.exports = config
