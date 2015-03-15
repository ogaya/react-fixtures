module.exports = {
    entry: './sample.js',
    output: {
        filename: './sample.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel-loader' },
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
