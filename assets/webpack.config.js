const path = require('path')
const CONTENT_PATH = path.resolve(path.join(__dirname, '../priv/static'))
const NODE_ENV = process.env.NODE_ENV || 'production'

module.exports = {
  mode: NODE_ENV,
  entry: {
    app: ['./js/main.js']
  },
  output: {
    filename: 'js/app.js',
    path: CONTENT_PATH
  },
  devServer: {
    contentBase: CONTENT_PATH,
    historyApiFallback: true,
    hot: false,
    inline: true,
    port: 8080,
    proxy: {
      '/admin/api': 'http://localhost:4000'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map'
}
