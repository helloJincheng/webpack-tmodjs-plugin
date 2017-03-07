var path = require('path');
var should = require('should');
var webpack = require('webpack');

describe("tmodjs-loader", function(){

    it("should report ok", function(done) {
        
        var compiler = webpack({
            entry: path.resolve(__dirname,'./case1/index.js'),
            module: {
                rules: [{
                    test: /\.tpl$/,
                    use: ['webpack-tmodjs-loader']
                }]
            }
        })

        compiler.run((error, state) => {

            console.log('ERROR::', error);

            console.log('STATE::', state);

        })

    });
});

