module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loaders: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          noUnusedLocals: false,
          ignoreDiagnostics: [7005],
        },
      },
    ],
  });
  config.module.rules.push({
    test: /\.(tsx)$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'typescript',
          prettierConfig: {
            semi: true,
            singleQuote: true,
            jsxSingleQuote: false,
            useTabs: false,
            tabWidth: 2,
            trailingComma: 'all',
            printWidth: 80,
            arrowParens: 'always',
          },
        },
      },
    ],
    enforce: 'pre',
  });
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
      }
    ],
  })
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  })
  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
        },
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    'uuikit': "../src/index"
  }
  return config;
};