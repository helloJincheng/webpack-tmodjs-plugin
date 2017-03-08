/*TMODJS:{"debug":false,"version":13,"md5":"48c3c9ec7512739ebf5554912e3eee93"}*/
define(['../template','./public/header','./public/footer'],function(template){return template('tpl/index', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$escape=$utils.$escape,title=$data.title,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$out='';include('./public/header');
$out+='\n\n<div id="main">\n	<h3>';
$out+=$escape(title);
$out+='</h3>\n	<ul>\n		';
$each(list,function($value,$index){
$out+='\n	    <li><a href="';
$out+=$escape($value.url);
$out+='">';
$out+=$escape($value.title);
$out+='</a></li>\n	    ';
});
$out+='\n	</ul>\n</div>\n\n';
include('./public/footer');
return new String($out);
});});