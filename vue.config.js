const webpack = require("webpack");
module.exports = {
  // 基本路径
  baseUrl: "/tree-edit-drag/docs/",
  // 输出文件目录
  outputDir: "docs",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
};
