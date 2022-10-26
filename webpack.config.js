const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


let mode = 'development'
if (process.env.NODE_ENV === 'production' ) {
    mode = 'production'
}
console.log(mode + ' mode')


module.exports = {
    entry: {
        main: path.resolve(__dirname, './codejam/script.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'assets/[name][ext]',
        clean: true,
    },
    devtool: "source-map",
    devServer: {
        static: './dist',
        hot: false,
    },
    mode: mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: '[name].css',
            
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./codejam/index.html"),
            filename: 'index.html',
    })],
    module: {
      rules: [
        {
            test: /\.css$/,
            use: [
			    MiniCssExtractPlugin.loader,
				'css-loader',
            ]
        },
        {
            test: /\.s[ac]ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
              'css-loader',
              "resolve-url-loader",
              'sass-loader',
            ]
        },
        {
            test: /\.svg$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/images/svg/[name][ext]'
            }
        },
        {
            test: /\.png$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/images/png/[name][ext]'
            }
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/fonts/[hash][ext]'
            }

        },
        {
            test: /\.(gif|mp3)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/mp3/[name][ext]'
            }
        },
      ],
    },
}