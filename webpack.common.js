const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.graphql'],
    alias: {
      Config$: path.resolve(__dirname, 'src/config/index.ts'),
      AppContext$: path.resolve(__dirname, 'src/services/appContext/'),
      API$: path.resolve(__dirname, 'src/services/api/'),
      Common: path.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer(), cssnano]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new ManifestPlugin({
      seed: {
        short_name: 'Repo List',
        name: 'Repo List',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          }
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#fabada',
        background_color: '#fabada'
      }
    }),
    new CopyWebpackPlugin([
      {
        from: 'static'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css'
    })
  ]
};
