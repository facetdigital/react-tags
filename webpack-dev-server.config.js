const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  // Entry points to the project
  entry: {
    ReactTags: path.join(__dirname, 'src/components/ReactTags.js'),
  },
  // Server Configuration options
  devServer: {
    compress: true,
    contentBase: './', // Relative directory for base of server
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    https: false,
    quiet: false,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 3000,
    public: 'http://0.0.0.0:3000',
    stats: {
      // Stats documentation is here: https://webpack.js.org/configuration/stats/
      colors: true
    },
    watchOptions: {
      // if you're using Docker (or any VM, probably) you may need this
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'), // Path of output file
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'ReactTags',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-dnd': 'ReactDnD',
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // All .js files
        use: [
          {
            // react-hot is like browser sync and babel loads jsx and es6-7
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};

module.exports = config;
