module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './app/']
        ],
      }
    }
  },
  "rules": {
    "linebreak-style": 'off', // 不同操作系统换行符问题.
    "comma-dangle": ["error", "never"], // 对象最后一个不要加逗号.
    "react/jsx-filename-extension": 'off', // js中用jsx语法报错.
    "import/extensions": 'off', // import .jsx文件报错.
    "no-console": 'off',
    "no-static-element-interactions": 'off',
    "click-events-have-key-events": 'off',
    "import/no-extraneous-dependencies": 'off',
    'no-plusplus': 'off',
    'no-unescaped-entities': 'off',
    'react/no-unescaped-entities': 'off',
    'max-len': ['error', 120],
    'react/forbid-prop-types': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'react/self-closing-comp': 'off',
    'no-param-reassign': 'off',
    'prefer-template': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'prefer-const': 'off'
  }
}