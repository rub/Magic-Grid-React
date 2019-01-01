const path = require('path')

module.exports = () => [
  require('@clipped/plugin-webpack')(),
  require('@clipped/plugin-babel')(),
  require('@clipped/plugin-react')(),
  {
    webpack(cfg) {
      cfg.module.rules.css.include.add('bulma', path.resolve(__dirname, 'node_modules/bulma'))
    }
  }
]
