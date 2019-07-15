// does not working
module.exports = (api) => {
  api.cache(true);

  const presets = [
    'next/babel',
    '@zeit/next-typescript/babel',
    '@babel/preset-typescript',
  ];
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
        },
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
