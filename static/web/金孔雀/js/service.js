// JavaScript Document
var Arr_big	= new Array();
var Arr_small	= new Array();
var Arr_link	= new Array()
var Arr_title	= new Array()
var Arr_context	= new Array()
Arr_big[0]	="service/yingshi.jpg" //大图 380x260
Arr_small[0]	="service/yingshi_s.gif" //小图 75x50
Arr_link[0]	=encodeURIComponent("test.html") //链接
Arr_big[1]	="service/yanyi.jpg"
Arr_small[1]	="service/yanyi_s.gif"
Arr_link[1]	=encodeURIComponent("test.html")
Arr_big[2]	="service/guanggao.jpg"
Arr_small[2]	="service/guanggao_s.gif"
Arr_link[2]	=encodeURIComponent("test.html")
Arr_big[3]	="service/wangluo.jpg"
Arr_small[3]	="service/wangluo_s.gif"
Arr_link[3]	=encodeURIComponent("test.html")
Arr_big[4]	="service/huiyi.jpg"
Arr_small[4]	="service/huiyi_s.gif"
Arr_link[4]	=encodeURIComponent("test.html")
Arr_big[5]	="service/zhengfu.jpg"
Arr_small[5]	="service/zhengfu_s.gif"
Arr_link[5]	=encodeURIComponent("test.html")
Arr_big[6]	="service/pingpa.jpg"
Arr_small[6]	="service/pingpa_si.gif"
Arr_link[6]	=encodeURIComponent("test.html")
Arr_big[7]	="service/shijue.jpg"
Arr_small[7]	="service/shijue_s.gif"
Arr_link[7]	=encodeURIComponent("test.html")
var bigpics	=Arr_big.join("|")
var smallpics	=Arr_small.join("|")
var links	=Arr_link.join("|")
var titles	=Arr_title.join("|")
var context	=Arr_context.join("|")
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="657" height="402" style="_width:655px;">');
document.write('<param name="allowScriptAccess" value="sameDomain"><param name="movie" value="service/service.swf"><param name="quality" value="high"><param name="bgcolor" value="#000000">');
document.write('<param name="menu" value="false"><param name="wmode" value="transparent">');
document.write('<param name="FlashVars" value="bigpics='+bigpics+'&smallpics='+smallpics+'&links='+links+'&titles='+titles+'&context='+context+'">');
document.write('<embed src="service/service.swf" wmode="transparent" FlashVars="bigpics='+bigpics+'&smallpics='+smallpics+'&links='+links+'&titles='+titles+'&context='+context+'" menu="false" bgcolor="#000000" quality="high" width="657" height="402" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" style="_width:655px;"  />');	document.write('</object>');