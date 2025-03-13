const path = require('path');
module.exports = {
    entry: {
        index: './src/index.js', // 從哪裡開始打包
    },
    output: {
        filename: 'bundle.js', // 要打包成什麼
        path: path.resolve('./build'), // 要打包在哪裡
    },
};