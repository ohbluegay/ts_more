const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const resolve = pathUrl => path.resolve(__dirname, pathUrl)

module.exports = {
    entry: resolve('../src/index.tsx'),
    output: {
        filename: 'bunder.js',
        path: resolve('../dist')
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.less'],
        alias: {
            src: resolve('../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                use: ['babel-loader', 'ts-loader'],
                include: resolve('../src'),
                exclude: /node_modules/
            }, {
                test: /\.(c|le)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]',
                    publicPath: resolve('../dist')
                }
            }
        ]
    },
    plugins: [
      new htmlWebpackPlugin({
          filename: 'index.html',
          template: './index.html',
          inject: true,

      })
    ],
    devServer: {
        contentBase: '../',
        port: 3000,
        inline: true
    }
}