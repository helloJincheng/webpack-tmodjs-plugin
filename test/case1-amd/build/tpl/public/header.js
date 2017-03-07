/*TMODJS:{"debug":false,"version":12,"md5":"3bb2497b9824d3c9c35ef0df8683587c"}*/
define(['../../template','./logo'],function(template){return template('tpl/public/header', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<!-- 头部 开始 -->\n<div id="header">\n	';
include('./logo');
$out+='\n	<ul id="nav">\n	    <li><a href="http://www.qq.com">首页</a></li>\n	    <li><a href="http://news.qq.com/">新闻</a></li>\n	    <li><a href="http://pp.qq.com/">图片</a></li>\n	    <li><a href="http://mil.qq.com/">军事</a></li>\n	</ul> \n</div>\n<!-- 头部 结束 --> ';
return new String($out);
});});