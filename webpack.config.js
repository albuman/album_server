const resolve = require('path').resolve;

const destination = resolve(__dirname, 'dist');

module.exports = {
    context: __dirname,
    entry: {
        server: resolve(__dirname, 'server.ts')
    },
    mode: 'development',
    output: {
        filename: 'server.js',
        path: destination,
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(sdl|gql)$/,
                use: 'raw-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    devtool: 'source-map',
    target: 'node'
};