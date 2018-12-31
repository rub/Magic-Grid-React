module.exports = () => [
  require('@clipped/plugin-rollup')({
    moduleName: 'MagicGrid',
    formats: ['cjs', 'umd', 'es', 'iife'],
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
    },
    external: ['react', 'react-dom', 'prop-types']
  }),
  require('@clipped/plugin-typescript')(),
  {
    typescript(cfg) {
      cfg.compilerOptions.lib = ['dom', 'es7']
      cfg.exclude.node_modules = 'node_modules/**'
      cfg.compilerOptions.jsx = 'react'
      cfg.compilerOptions.moduleResolution = 'node'
      cfg.compilerOptions.module = 'es2015'
      cfg.compilerOptions.declaration = true

      cfg.include.push('typings/**/*')
    },
    rollup(cfg, api) {
      cfg.input = api.resolve('src/index.tsx')
      cfg.plugins.splice(cfg.plugins.length - 1, 1)
    }
  },
]
