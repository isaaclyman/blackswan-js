const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    blackswan: path.resolve(__dirname, "./base.ts")
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    library: "blackswan",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          compilerOptions: {
            declaration: true,
            declarationDir: path.resolve(__dirname, "../")
          }
        }
      }
    ]
  }
};
