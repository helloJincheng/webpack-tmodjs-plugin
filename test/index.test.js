const path = require('path');
const should = require('should');
const webpack = require('webpack');
const TmodPlugin = require('../src/plugin');

describe("tmodjs-loader", function () {

    it("case1-amd", function (done) {

        var compiler = webpack({
            entry: path.resolve(__dirname, './case1-amd/index.js'),
            output: {
                path: path.resolve(__dirname, './case1-amd/dist'),
                filename: '[name].bundle.js'
            },
            plugins: [
                new TmodPlugin({
                    base: './case1-amd',
                    output: './case1-amd/build',
                    type: 'amd'
                })
            ]
        })

        compiler.run((error, state) => {

            if (!error) {
                done();
            }

        })

    });

    it("case2-helper", function (done) {

        var compiler = webpack({
            entry: path.resolve(__dirname, './case2-helper/index.js'),
            output: {
                path: path.resolve(__dirname, './case2-helper/dist'),
                filename: '[name].bundle.js'
            },
            plugins: [
                new TmodPlugin({
                    base: './case2-helper',
                    output: './case2-helper/build',
                    helper: './case2-helper/template-helpers.js'
                })
            ]
        })

        compiler.run((error, state) => {

            if (!error) {
                done();
            }

        })

    });

    it("case3-include", function (done) {

        var compiler = webpack({
            entry: path.resolve(__dirname, './case3-include/index.js'),
            output: {
                path: path.resolve(__dirname, './case3-include/dist'),
                filename: '[name].bundle.js'
            },
            plugins: [
                new TmodPlugin({
                    base: './case3-include',
                    output: './case3-include/build'
                })
            ]
        })

        compiler.run((error, state) => {

            if (!error) {
                done();
            }

        })

    });

    it("case4-syntax", function (done) {

        var compiler = webpack({
            entry: path.resolve(__dirname, './case4-syntax/index.js'),
            output: {
                path: path.resolve(__dirname, './case4-syntax/dist'),
                filename: '[name].bundle.js'
            },
            plugins: [
                new TmodPlugin({
                    base: './case4-syntax',
                    output: './case4-syntax/build',
                    syntax: './case4-syntax/template-syntax.js'
                })
            ]
        })

        compiler.run((error, state) => {

            if (!error) {
                done();
            }

        })

    });

    it("case5-syntax-native", function (done) {

        var compiler = webpack({
            entry: path.resolve(__dirname, './case5-syntax-native/index.js'),
            output: {
                path: path.resolve(__dirname, './case5-syntax-native/dist'),
                filename: '[name].bundle.js'
            },
            plugins: [
                new TmodPlugin({
                    base: './case5-syntax-native',
                    output: './case5-syntax-native/build',
                    syntax: 'native'
                })
            ]
        })

        compiler.run((error, state) => {

            if (!error) {
                done();
            }

        })

    });

});

