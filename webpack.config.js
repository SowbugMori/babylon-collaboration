module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    './src'
                ],

                exclude: /node_modules/,

                use: [
                    'bable-loader',
                ]
            }
        ]
    },
    resolve: {
        modules: [
            './assets',
            'node_modules',
        ]
    }
}