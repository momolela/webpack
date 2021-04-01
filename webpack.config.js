const path = require("path");

module.exports = {
  entry: "./src/main.js", // 指定路口文件
  output: {
    // 指定输出
    path: path.resolve(__dirname, "dist"), // 通过 path 动态获取输出路径，__dirname 是当前文件所在路径
    filename: "app.js", // 输出的文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // 匹配上 css 文件
        // css-loader 只负责将 css 文件进行加载
        // style-loader 负责将样式添加到 dom 中
        // 使用多个 loader 时，顺序从左到右，有严格的顺序要求
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
