module.exports = {
  extends: [
    'stylelint-config-standard',
    // 'stylelint-config-sass-guidelines',
    // 'stylelint-config-prettier'
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': true,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'keyframe-declaration-no-important': true,
    'media-feature-name-no-unknown': true,
    'named-grid-areas-no-invalid': true,
    'max-nesting-depth': null,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    /**
     * @ 符号前无需空一行
     * 在注释信息后的忽略
     */
    'at-rule-empty-line-before': 'always',

    // 'at-rule-empty-line-before': [
    //   'always',
    //   {
    //     ignore: ['after-comment'],
    //   },
    // ],
    /**
     *@-rule 名称需小写
     *例 @keyframes
     */
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line', // 单行时，@-rule后总是需要空格
    'block-closing-brace-empty-line-before': 'never', // 关闭括号前不需要空行
    'block-closing-brace-newline-after': 'always', // 关闭括号后需要换行
    'block-closing-brace-newline-before': 'always-multi-line', // 多行时，关闭括号前需要换行
    'block-closing-brace-space-before': 'always-single-line', // 单行时，关闭括号前总是需要空格
    'block-opening-brace-newline-after': 'always-multi-line', // 多行时，开头括号后总是需要换行
    'block-opening-brace-space-after': 'always-single-line', // 单行时，开头括号后总是需要换行
    'block-opening-brace-space-before': 'always', // 开头括号前总是需要空格
    'color-hex-case': 'lower', // 十六进制颜色值小写
    'color-hex-length': 'short', // 十六进制值使用短写形式
    'comment-empty-line-before': 'never', // 注释前不需要空行
    'comment-whitespace-inside': 'always', // 注释标记里需要空格
    'custom-property-empty-line-before': [
      // 自定义属性前需要空行
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'declaration-bang-space-after': 'never', // !符合后不需要空格，例：!important
    'declaration-bang-space-before': 'always', // !符号前总是需要空格
    'declaration-block-semicolon-newline-after': 'always-multi-line', // 多行时，声明的分号后总是需要换行
    'declaration-block-semicolon-space-after': 'always-single-line', // 单行时，声明的分号后总是需要空格
    'declaration-block-semicolon-space-before': 'never', // 声明分号前不需要空格
    'declaration-block-single-line-max-declarations': 1, // 单行内最多一个声明
    'declaration-block-trailing-semicolon': 'always', // 声明以分号结尾
    'declaration-colon-newline-after': 'always-multi-line', // 多行时，声明分号后总是换行
    'declaration-colon-space-after': 'always-single-line', // 单行时，声明分号后总需要空格
    'declaration-colon-space-before': 'never', // 声明分号前不需要空格
    'declaration-empty-line-before': 'never', // 声明前不需要空行
    'function-comma-newline-after': 'always-multi-line', // 多行时，逗号后需要换行
    'function-comma-space-after': 'always-single-line', // 单行时，函数逗号后需要空格
    'function-comma-space-before': 'never', // 单行时，函数逗号前不需要空格
    // 'function-max-empty-lines': 0, // 函数中不允许出现空行
    'function-name-case': 'lower', // 函数名称需要小写
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never', // 函数圆括号后不需要空格
    'function-whitespace-after': 'always', // 多个函数之间总是需要空格
    'function-url-quotes': 'always', // url()函数中总是需要引号
    indentation: 2, // 缩进字符为2
    'length-zero-no-unit': true, // 数字0后不需要单位
    // 'max-empty-lines': 0, // 最多空行数为0
    'media-feature-colon-space-after': 'always', // 媒体查询的属性冒号后总是需要空格
    'media-feature-colon-space-before': 'never', // 媒体查询的属性冒号不需要需要空格
    'media-feature-name-case': 'lower', // 媒体查询特性名称小写
    'media-feature-parentheses-space-inside': 'never', // 媒体查询特性的括号内不需要空格
    'media-feature-range-operator-space-after': 'always', // 媒体查询特性中的运算符后需要空格
    'media-feature-range-operator-space-before': 'always', // 媒体查询特性中的运算符前需要空格
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'no-eol-whitespace': true, // 结尾不需要多余的空格
    'no-missing-end-of-source-newline': true, // 不允许丢失最后一个声明块后的空行
    'number-leading-zero': 'always', // 总是需要前导0
    'number-no-trailing-zeros': true, // 不允许结尾多余的0
    'property-case': 'lower', // 属性值需要小写
    'rule-empty-line-before': 'always', // 规则前不需要空行
    'selector-attribute-brackets-space-inside': 'never', // 属性选择器的[]内不需要空格
    'selector-attribute-operator-space-after': 'never', // 属性选择器的操作符后不需要空格
    'selector-attribute-operator-space-before': 'never', // 属性选择器的操作符前不需要空格
    'selector-combinator-space-after': 'always', // 组合选择器后需要空格
    'selector-combinator-space-before': 'always', // 组合选择器前需要空格
    'selector-descendant-combinator-no-non-space': true, // 禁止选择器的后代组合符使用非空格字符
    'selector-list-comma-newline-after': 'always', // 选择器列表逗号后总是需要换行
    'selector-list-comma-space-before': 'never', // 选择器列表的逗号前不需要空格
    // 'selector-max-empty-lines': 1, // 相邻选择器后的空行数为0
    'selector-pseudo-class-case': 'lower', // 伪类名称小写
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower', // 伪元素名称小写
    'selector-pseudo-element-colon-notation': 'double', // 伪元素采用双冒号形式
    'selector-type-case': 'lower', // 选择器类型小写
    'unit-case': 'lower', // 单位小写
    'value-keyword-case': 'lower', // 值为小写
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never', // 值列表逗号前不需要空格
    // 'value-list-max-empty-lines': 0, // 值列表内不需要空行
    'alpha-value-notation': 'number', // alpha值采用数字形式
    'shorthand-property-no-redundant-values': true, // 不允许在简写属性冗余值。
    'string-quotes': 'single', // 使用单引号
    'declaration-block-no-duplicate-properties': true, // 不允许重复属性
    'order/properties-order': [
      'display',
      'justify-content',
      'align-items',
      'position',
      'left',
      'right',
      'top',
      'bottom',
      'float',
      'clear',
      'visibility',
      'overflow',
      'overflow-x',
      'overflow-y',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'border',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'color',
      'font',
      'font-size',
      'font-family',
      'font-weight',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'vertical-align',
      'white-space',
      'break-word',
      'content',
      'cursor',
      'border-radius',
      'box-shadow',
      'text-shadow',
      'linear-gradient',
    ],
  },
};
