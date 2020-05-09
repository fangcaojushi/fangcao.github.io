
//load flash portfolio flow list
function portfolioFlowList(myActiveItem){
 
 var src = "flash/flowList/portfolioFlowList.swf";
 var html = "";

 html += ' <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="998" height="475" id="artFlowList">';
 html += ' <param name="allowScriptAccess" value="sameDomain" />';
 html += ' <param name="wmode" value="transparent">';
 html += ' <param name="src" value="'+root+''+src+'">';
 html += ' <param name="FlashVars" value="myActiveItem='+myActiveItem+'">';
 html += ' <embed src="'+root+''+src+'" width="998" height="475" name="artFlowList" wmode="transparent" swLiveConnect="true" FlashVars="myActiveItem='+myActiveItem+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"/>';
 html += ' </object>';
 
 document.write(html);
}


