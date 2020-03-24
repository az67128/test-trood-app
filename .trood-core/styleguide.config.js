const path = require('path');
const paths = require('./config/paths');


module.exports = {
  mountPointId: 'doc-content',
  showSidebar: false,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguideRoot.js')
  },
  pagePerSection: true,
  usageMode: 'expand',
  styleguideDir: 'docs/components',
  assetsDir: 'public',
  webpackConfig: {
    resolve: {
      alias: {
        $trood: paths.appSrc,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs)$/,
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.css$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                sourceMap: true,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('postcss-global-import')({
                    path: ['src'],
                  }),
                  require('postcss-import')({
                    path: ['src'],
                  }),
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    preserve: false,
                    features: {
                      'custom-media-queries': true,
                      'color-mod-function': true,
                    },
                    importFrom: 'src/styles/variables.css',
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
          ],
        },
      ],
    },
  },
  components: 'src/components/*/index.js',
  getComponentPathLine(componentPath) {
    const name = path.normalize(path.dirname(componentPath)).replace(/src[\\\/]components[\\\/]/, '')
    return `import ${name} from '$trood/components/${name}'`
  },
  styles: {
    StyleGuide: {
      root: {
        background: '#fcfcfc',
      },
    },
    SectionHeading: {
      toolbar: {
        display: 'none',
      },
    },
    Playground: {
      toolbar: {
        display: 'none',
      },
    },
  },
}
