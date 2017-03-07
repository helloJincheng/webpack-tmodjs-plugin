/*TMODJS:{"debug":false,"version":2,"md5":"10ae5fc0c7430ae5fe883ba08db88bea"}*/
define(['../template','./public/header','./public/footer'],function(template){return template('tpl/index', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$string=$utils.$string,title=$data.title,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$out='';include('./public/header');
$out+='\n\n<div id="main">\n	<h3>';
$out+=$string(title);
$out+='</h3>\n	<ul>\n		';
$each(list,function($value,$index){
$out+='\n	    <li><a href="';
$out+=$string($value.url);
$out+='">';
$out+=$string($value.title);
$out+='</a></li>\n	    ';
});
$out+='\n	</ul>\n</div>\n\n';
include('./public/footer');
return new String($out);
});});