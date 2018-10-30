var path = require('path')
var webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}
let banner = `

            ██████████             2017 - 2018 ⊕ Otağ 2.1.1
         █████      █████
       ████     ██     ████
     ███        ██        ███       .88888.    dP              88b
    ██                      ██     d8'   \`8b   88
    ██   █████  ██  █████   ██     88     88 d8888P .d8888b. .d8888b.
    ██                      ██     88     88   88   88'  \`88 88'  \`88
     ███        ██        ███      Y8.   .8P   88   88.  .88 88.  .88
       ████     ██     ████         \`8888P'    \`888 \`88888P8 \`8888P88
         █████      █████                                         .88
            ██████████              Otag Tamga Web Sitesi     d8888P
                                    Alper Kürşat Ünver
                                    alper@otagjs.org

`

module.exports = {
  entry: './Yerlik/Dene/uygu.js',
  output: {
    path: path.resolve(__dirname, './Yerlik/Dene/'),
    publicPath: './',
    filename: 'uygu.min.js'
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ],
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  performance: false,
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  let plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
  Object.assign(module.exports, {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          sourceMap: true,
          uglifyOptions: {
            mangle: true,
            ecma: 6,
            compress: false
          },
          parallel: true
        })
      ]
    },
    devtool: '#source-map',
    plugins
  })
}