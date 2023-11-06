const nodeExternals = require('webpack-node-externals')
const path = require('path')
const rules = [{
  test: /\.(tsx|ts)$/,
  use: 'ts-loader',
  exclude: /node_modules/
}]