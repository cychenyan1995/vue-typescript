const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    // chainWebpack: config => {
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    // },
    productionSourceMap: false,
    configureWebpack(config) {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    // Required - The path to the webpack-outputted app to prerender.
                    staticDir: path.join(__dirname, 'dist'),
                    // Required - Routes to render.
                    routes: ['/', '/habit'],
                })
            ]
        }
    },
}