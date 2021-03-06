'use strict';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: true,
        modules: 'commonjs',
        targets: {
          node: '4.9.1',
        },
        useBuiltIns: 'usage',
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-optional-chaining'],
};
