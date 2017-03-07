/*TMODJS:{"debug":false,"version":12,"md5":"e22e448810cdc3f514551eabc51e30c4"}*/
define(['../../template','../copyright'],function(template){return template('tpl/public/footer', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,time=$data.time,$string=$utils.$string,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';$out+='<div id="footer">\n';
if(time){
$out+='\n	<p class=\'time\'>';
$out+=$string(time);
$out+='</p>\n';
}
$out+='\n';
include('../copyright');
$out+='\n</div>';
return new String($out);
});});