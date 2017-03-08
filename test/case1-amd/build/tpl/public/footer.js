/*TMODJS:{"debug":false,"version":13,"md5":"023dc7dde034365e5b7264dd8b62196b"}*/
define(['../../template','../copyright'],function(template){return template('tpl/public/footer', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,time=$data.time,$escape=$utils.$escape,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<div id="footer">\n';
if(time){
$out+='\n	<p class=\'time\'>';
$out+=$escape(time);
$out+='</p>\n';
}
$out+='\n';
include('../copyright');
$out+='\n</div>';
return new String($out);
});});