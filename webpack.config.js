module.exports = {
  entry: './src/ToggleSwitch.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};