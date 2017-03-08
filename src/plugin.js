/**
 * plugin 版本
 */

const fs = require('fs');
const path = require('path');
const Tmodjs = require('tmodjs');

var tmodjs_options = {
    debug: false,
    escape: false,
    combo: false,
    minify: false,
    cache: false,
    output: './build',
    type: 'amd',
    charset: 'utf-8',
    compress: false,
    syntax: 'simple',
    helper: undefined
};

module.exports = TmodPlugin;

function TmodPlugin(options) {

    this.tmodjs_base = path.resolve(options.base || './');
    this.tmodjs_options = mergeOptions(tmodjs_options, options);

    this.tmodjs = new Tmodjs(this.tmodjs_base, this.tmodjs_options);

    // 重写 tmodjs 实例的 compile 方法，
    // 源方法使用的 path 库实现在 node 4.x 以上版本有问题
    this.tmodjs.compile = function (file) {

        var that = this;
        var error = false;
        var walk;

        if (file) {


            var fileList = typeof file === 'string' ? [file] : file;

            fileList = fileList.map(function (file) {
                return path.resolve(that.base, file);
            });

            walk = function (list) {

                list.forEach(function (file) {

                    if (error) {
                        return;
                    }

                    error = !that._compile(file);

                });
            };


            walk(fileList);

            if (!error && this.options.combo) {
                this._combo();
            }

        } else {


            walk = function (dir) {

                if (dir === that.output) {
                    return;
                }

                var dirList = fs.readdirSync(dir);

                dirList.forEach(function (item) {

                    if (error) {
                        return;
                    }

                    if (fs.statSync(path.join(dir, item)).isDirectory()) {
                        walk(path.join(dir, item));
                    } else if (that.filterBasename(item) && that.filterExtname(item)) {
                        error = !that._compile(path.join(dir, item));
                    }

                });
            };


            walk(this.base);

            if (!error && this.options.combo) {
                this._combo();
            }
        }

    }

}

TmodPlugin.prototype.apply = function (compiler) {

    var plugin = this;

    compiler.plugin("compile", function (params) {
        console.log("The compiler is starting to compile...");
        plugin.tmodjs.compile();
    });

    compiler.plugin("compilation", function (compilation) {
        console.log("The compiler is starting a new compilation...");

        compilation.plugin("optimize", function () {
            console.log("The compilation is starting to optimize files...");
        });
    });

    compiler.plugin("emit", function (compilation, callback) {

        console.log("The compilation is going to emit files...");
        callback();
    });

    compiler.plugin("done", function(){
        console.log('the Comipler is done')
    });

}

function mergeOptions(oldOptions, newOptions) {

    if (!newOptions) {
        return oldOptions;
    }

    for (var something in oldOptions) {
        if (newOptions[something]) {
            oldOptions[something] = newOptions[something];
        }
    }

    return oldOptions;
}

function filterBasename(name) {
    // 英文、数字、点、中划线、下划线的组合，且不能以点开头
    var FILTER_RE = /^\.|[^\w\.\-$]/;
    return !FILTER_RE.test(name);
}

function filterExtname(name) {
    // 支持的后缀名
    var EXTNAME_RE = /\.(html|htm|tpl)$/i;
    return EXTNAME_RE.test(name);
}