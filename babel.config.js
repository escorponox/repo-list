module.exports = (api) => {
  const presets = [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react',
    [
      '@emotion/babel-preset-css-prop',
      api.env('production') ? {} : { sourceMap: true, autoLabel: true }
    ]
  ];
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        regenerator: true
      }
    ],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    api.env('production')
      ? 'babel-plugin-transform-react-remove-prop-types'
      : undefined,
    ['import', { libraryName: 'antd', style: true }]
  ].filter((p) => !!p);

  return {
    presets,
    plugins
  };
};
