# 注意

暂时只跑了 case1 的测试，case2 更丰富的案例还未测试过，生产环境唔用

# TmodJS Webpack 壳

TmodJS 已经停止维护，新业务不推荐使用

该项目仅用于解决依赖了 tmodjs 无法升级开发环境到 webpack 的需求

tmod 自带的嵌套处理是通过直接扫描目录而不是依赖分析，所以用 plugin 比 loader 更为合适

# webpack 配置

```javascript
var path = require('path');
var TmodPlugin = require('../src/plugin');

module.exports = {

  entry: path.resolve(__dirname, './case1/index.js'),
  output: {
    path: path.resolve(__dirname, './case1/dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new TmodPlugin({
      base: './case1',
      output: './case1/build',
      type: 'amd'
    })
  ]

}
```

## 参数 & 默认值

- base: './'
- debug: false
- escape: false
- combo: false
- minify: false
- cache: false
- output: './build'
- type: 'amd'
- charset: 'utf-8'
- compress: false
- syntax: 'simple'
- helper: undefined