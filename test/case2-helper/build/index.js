/*TMODJS:{"debug":false,"version":11,"md5":"2a97ea9f76abdc8451cffef19611354b"}*/
define(['./template'],function(template){return template('index', function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,time=$data.time,$out='';$out+=$escape($helpers. dateFormat(time , 'yyyy-MM-dd hh:mm:ss'));
return new String($out);
});});