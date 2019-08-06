import { CopyWebpackPlugin } from 'copy-webpack-plugin';
import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

export default config;