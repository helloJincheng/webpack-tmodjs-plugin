/*TMODJS:{"debug":false,"version":2,"md5":"8122a3113a11eb191f95df8982c86d89"}*/
define(['./template'],function(template){return template('index', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$out='';$out+='<div id="main">\n	<h3>';
$out+=$escape(title);
$out+='</h3>\n	<ul>\n		';
$each(list,function($value,$index){
$out+='\n	    <li><a href="';
$out+=$escape($value.url);
$out+='">';
$out+=$escape($value.title);
$out+='</a></li>\n	    ';
});
$out+='\n	</ul>\n</div>';
return new String($out);
});});