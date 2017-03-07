/*TMODJS:{"debug":false,"version":10,"md5":"0ca3a9ed24439a168a163c0a8473766c"}*/
define(['./template'],function(template){return template('index', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$string=$utils.$string,time=$data.time,$out='';$out+=$string($helpers. dateFormat(time , 'yyyy-MM-dd hh:mm:ss'));
return new String($out);
});});