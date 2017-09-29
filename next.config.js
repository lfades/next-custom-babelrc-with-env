const language = require('./language')

module.exports = {
  webpack: (config) => {
    config.plugins.forEach(plugin => {
      if (plugin.constructor.name === 'DefinePlugin') {
        // the next line is the one causing an error, but it will work fine
        // if we change the .babelrc
        // {
        //   "env": {
        //     "server": {
        //       "presets": ["node8"]
        //     },
        //     "client": {
        //       "presets": ["next/babel"]
        //     }
        //   }
        // }
        // with this
        // {
        //   "presets": ["env", "next/babel"]
        // }
        Object.assign(plugin.definitions, language)

        console.log(plugin.definitions)
      }
    })

    return config
  }
}
