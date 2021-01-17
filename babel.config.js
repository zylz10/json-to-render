module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    'lodash',
    [
      'module-resolver',
      {
        root: ['./packages'],
        alias: {
          '@jrender/core': './packages/core',
          '@jrender/hook-base': './packages/hook-base',
          '@jrender/types': './packages/types',
          '@jrender/vue': './packages/vue'
        }
      }
    ]
  ]
}
