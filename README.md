[![David deps][david-image]][david-url]

[david-url]: https://david-dm.org/qq286735628/webpack-tmodjs-plugin
[david-image]: https://david-dm.org/qq286735628/webpack-tmodjs-plugin.svg

# 注意

暂时只跑了 case1 的测试，case2 更丰富的案例还未测试过，生产环境勿用

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

参数功能请参考 https://github.com/aui/tmodjs

- base: './'        模板文件源码目录
- debug: false      
- escape: true      过滤 xss
- combo: false      webpack 使用的时候，不建议开启
- minify: false     webpack 使用的时候，不建议开启
- cache: false      编译缓存
- output: './build' 模板编译后的输出目录
- type: 'amd'       模块类型，改为默认 amd
- charset: 'utf-8'  tmod 只支持 utf-8
- compress: false   压缩 html 多余空格
- syntax: 'simple'  语法类型
- helper: undefined 辅助函数路径
