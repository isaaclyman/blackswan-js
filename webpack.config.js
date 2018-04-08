const path = require('path');

module.exports = {
    entry: {
      'blackswan': './source/base.ts',
      'example': './examples/example-player.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'blackswan',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}
