const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SRC = path.resolve(__dirname, 'src/js');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Keep the Zombies Contained',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [
            /node_modules/,
            /spec/
          ],
        loader: "eslint-loader",
      },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
            'file-loader',
          ],
        },
        {
  		    test: /\.(ogg|mp3|wav|mpe?g)$/i,
  		    use: 'file-loader',
  			},
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader',
        }
      ]
    }
  };
