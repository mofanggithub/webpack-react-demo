const path = require('path');

module.exports = {
    // 入口文件
    entry: {
        app: './src/index.js'
    },
    // 输出到dist文件夹, 文件名字为bundle.js
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    devServer: {
        inline:true,
        port: 8886
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,

        		exclude: /node_modules/,

        		loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },

                ]
            }
        ]
    }
}