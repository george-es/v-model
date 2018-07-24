// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  {{#if_eq lintConfig "standard"}}
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  {{/if_eq}}
  {{#if_eq lintConfig "airbnb"}}
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  {{/if_eq}}
  {{#if_eq lintConfig "none"}}
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  {{/if_eq}}
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  {{#if_eq lintConfig "airbnb"}}
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  {{/if_eq}}
  // add your custom rules here
  rules: {
    {{#if_eq lintConfig "standard"}}
    // allow async-await
    'generator-star-spacing': 'off',
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    // 禁止空语句块
    'no-empty': 2,
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 2,
    // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
    'no-empty-function': 2,
    // 禁止 case 语句落空
    'no-fallthrough': 2,
    // 引号类型 `` "" ''
    'quotes': [1, 'single'],
    //语句强制分号结尾
    // 'semi': [2, 'always'], 
    // 要求使用 === 和 !==
    'eqeqeq': 2
    // 缩进风格
    'indent': [2,4]
  }
}
