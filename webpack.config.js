const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ["@babel/polyfill", ENTRY_FILE],
    mode: MODE,
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins() {
                                    ㅤㅤㅤㅤreturn[autoprefixer({ browsers: "cover 99.5%" })]
                                    ㅤㅤㅤ
                                }
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'styles.css'
        }),
    ]
};

module.exports = config;
//여기서는 babel node같은 최신 자바문법을 사용할 수 없음.