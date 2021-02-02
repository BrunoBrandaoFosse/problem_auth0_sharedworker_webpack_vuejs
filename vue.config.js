const WorkerPlugin = require('worker-plugin');

module.exports = {
  // chainWebpack: config => {
  //   // GraphQL Loader
  //   config.module
  //     .rule('worker')
  //     .test(/\.worker\.js$/)
  //     .use('worker-loader')
  //       .loader('worker-loader')
  //       .end()
  // },
  // rules: [
  //   {
  //     test: /\.js$/,
  //     exclude: /node_modules/,
  //     use: [{ loader: "babel-loader" }, { loader: "eslint-loader" }]
  //   },
  //   {
  //     test: /\.worker\.js$/,
  //     use: [{ loader: "worker-loader", options: { publicPath: "/public/" } }]
  //   }
  // ],
  configureWebpack: {
    // plugins: [
    //   new WorkerPlugin({
    //     sharedWorker: true
    //   })
    // ]
  }
}