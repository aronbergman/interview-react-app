// next.config.js
const withSourceMaps = require('@zeit/next-source-maps')
module.exports = withSourceMaps({
    webpack(config, options) {
        return config
    }
})