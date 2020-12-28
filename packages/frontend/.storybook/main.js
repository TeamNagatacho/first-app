const path = require("path")
module.exports = {
  stories: ['../src/stories/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    config.module.rules = [
      // デフォルトのrulesに入っているCSS用の設定が悪さをするのでお帰りいただく
      ...config.module.rules.filter(rule => rule.test.source !== (/\.css$/).source),
      // css-loader を設定しなおす
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]___[hash:base64:2]',
              },
            },
          },
          'sass-loader',
        ],
      }
    ]
    config.resolve.alias = {
      "@components": path.resolve(__dirname, '..', 'src', 'components'),
      "@styles": path.resolve(__dirname, '..', 'src', 'styles')
    }
    return config
  }
}

