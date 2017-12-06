const path = require('path')
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath)
const SCSS_DATA = `
    @import "_color.scss";
    @import "_variable.scss";
`;

module.exports = {
    entry: {
        main: [
            resolvePath('./src/index')
        ]
    },
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                include: resolvePath('./src'),
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            modules: true, // sử dụng import styles from ...scss
                            camelCase: true,
                            localIdentName: process.env.NODE_ENV === 'development' ?
                                '[name]__[local]___[hash:base64:5]'
                                : '[name]__[hash:base64:8]'
                        }
                    },
                    {
                        // tìm scss từ trên xuống
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')(),
                                require('cssnano')(),
                            ],
                            sourceMap: Boolean(process.env.NODE_ENV === 'development'),
                        },
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                        options: {
                            // import các biến
                            includePaths: [resolvePath('./src/commons/scss')],
                            sourceMap: Boolean(process.env.NODE_ENV === 'development'),
                            data: SCSS_DATA
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.scss', '.css'],
        modules: ['src', 'packages', 'node_modules'],
    }
}