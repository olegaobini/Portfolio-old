const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: './src/vendor.js',
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets'
            },
          },
        ],
      },
    ],
  },
  // This config allows to use jQuery $ sign
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'template.html',
          template: 'src/template.html',
          chunks: ['main']
      }),
      new HtmlWebpackPlugin({
          filename: 'resume.html',
          template: './src/resume.html',
          chunks: ['resume']
      }),
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ]
};
