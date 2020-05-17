$(function(){
	setInterval ("busMove()", 2000);
});

function busMove()
{
    $(".bus").each(function(){
    	var radl=Math.floor((Math.random()*50)-25);
    	var radt=Math.floor((Math.random()*25)-12);
    	var lposition=parseInt($(this).css("left"))+radl;
    	var tposition=parseInt($(this).css("top"))+radt;
//  	alert(lposition+"  , "+tposition)
    $(this).animate({left:lposition+"px",top:tposition+"px"});
  });
}