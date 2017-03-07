src 存放着 loader 和 plugin 两个版本的实现

tmod 的嵌套处理不是通过依赖检查，而是直接扫描目录，所以改用 plugin 机制更为合适