module.exports = function(api) {
  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-object-rest-spread',
  ]
  const presets = [
    ['@babel/preset-env', { forceAllTransforms: true }],
    '@babel/preset-flow',
  ]

  return { plugins, presets }
}