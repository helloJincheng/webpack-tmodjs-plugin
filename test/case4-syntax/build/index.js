/*TMODJS:{"debug":false,"version":1,"md5":"f33e5bb07b70d977bd6163d2f5582b75"}*/
define(['./template'],function(template){return template('index', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,title=$data.title,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$out='';$out+='<div id="main">\n	<h3>';
$out+=$string(title);
$out+='</h3>\n	<ul>\n		';
$each(list,function($value,$index){
$out+='\n	    <li><a href="';
$out+=$string($value.url);
$out+='">';
$out+=$string($value.title);
$out+='</a></li>\n	    ';
});
$out+='\n	</ul>\n</div>';
return new String($out);
});});