/**
 * webpack loader
 */

const fs = require('fs');
const path = require('path');
const loaderUtils = require('loader-utils');
const Tmodjs = require('tmodjs');

module.exports = loader;

var options_tmodjs = {
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

var options_webpack = {};

function loader(source) {

    var loaderContent = this;
    var callback = loaderContent.async();

    options_webpack = loaderUtils.getOptions(loaderContent);
    options_tmodjs = mergeOptions(options_tmodjs, options_webpack);

    var resourcePath = loaderContent.resourcePath;

    if (this.cacheable) {
        this.cacheable();
    }

    var tmodjs = new Tmodjs(loaderContent.context, options_tmodjs);

    tmodjs.on('complieError', function (data) {

        callback('tmodjs complie error');
        console.error(data);

    });

    var outputBuffer = [];

    var walk = function (dir) {

        var error = false;
        var dirList = fs.readdirSync(dir);
        var res;

        dirList.forEach(function (item) {

            if (error) {
                callback(error);
                return;
            }

            if (fs.statSync(path.join(dir, item)).isDirectory()) {

                walk(path.join(dir, item));

            } else if (filterBasename(item) && filterExtname(item)) {

                res = tmodjs._compile(path.join(dir, item));

                if (res && res.output) {
                    outputBuffer.push(res.output);
                }

            }

        });

    }

    walk(loaderContent.context);

    var res = outputBuffer.join('');
    return res;
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