import babel from 'rollup-plugin-babel';

export default {
  entry: './src/index.js',
  dest: './dist/index.js',
  format: 'cjs',
  plugins: [
    babel({
      babelrc: false,
      comments: false,
      presets: [
        [
          'env',
          {
            modules: false,
            targets: {
              node: 6,
            },
          },
        ],
        'stage-0',
        'babili',
      ],
    }),
  ],
};
