const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js", // 프로젝트 진입점 파일
  output: {
    filename: "bundle.js", // 번들된 JavaScript 파일의 이름
    publicPath: "/",
    path: path.resolve(__dirname, "dist"), // 번들된 파일을 저장할 경로
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js 파일에 대해서
        exclude: /node_modules/, // node_modules 폴더 제외
        use: "babel-loader", // Babel을 사용하여 ES6+ 코드를 변환
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // 사용할 HTML 템플릿 파일
    }),
    new CopyPlugin({
      patterns: [{ from: "src/json", to: "json" }],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // 개발 서버의 루트 디렉토리 설정
    },
    historyApiFallback: true,
    port: 8080, // 개발 서버 포트
    open: true, // 서버 실행 시 브라우저 자동으로 열기
    hot: true,
  },
};
