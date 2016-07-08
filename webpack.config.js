/**
 * Created by zeelshah on 08/07/16.
 */
var path = require('path');
module.exports = {
    entry : './src/js/app.js',
    output : {
        path: './dist',
        filename: 'index.js',
        publicPath: '/'
    },
    devServer: {
        inline : true,
        port : 3333,
        contentBase: './dist'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel',
                query : {
                    presets: ['es2015', 'react','stage-0']
                }
            },
            { test: /\.css$/, loader: "style!css" }]
    },
    resolve: {
        root: [
            path.resolve('./src')
        ]
    }
}