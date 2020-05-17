/* ========================================================================
 * judgeheight.js 
 * judgetop研判的顶部——搜索版块,
 * judgebottom研判的底部——列表版块
 * 搜过条件的伸展hlistshow，改变列表版块的高度
 * by wh 20170914
 * ========================================================================*/
var searchhigh;
function getHeight(name,searchname){
	var offsetHigh=20*3+48+15;
	var winhigh = $(window).height();
	searchhigh = $(searchname).height();
	var bthigh=winhigh - searchhigh - offsetHigh;
	if(bthigh<150){
		bthigh=150;
	}
	$(name).height(bthigh);
	
}

//初次入城、套牌车、频繁过车
//有表头需要固定的情况下的表格部分初始高度计算
function getHeighth(name,searchname,distance){
	var winhigh = $(window).height();
	var searchhigh = $(searchname).height();
	$(name).height(winhigh - searchhigh - distance);
	}

//搜索栏点击切换后，表格部分高度变化
function tabhigh(theicon,tablename,searchhigh){	
		var currentlist = $(tablename).height();	
		var judgestatus=$(theicon).hasClass("fa-chevron-up");
		if(judgestatus){
			$(tablename).height(currentlist + searchhigh - 48);
		}else{
			$(tablename).height(currentlist - searchhigh + 48);
		}
	}


$(function(){
	//碰撞页、跟车页的下端高度
	getHeight(".judgebottom",".judgetop");
	$(".hlistshow").click(function(){
		var hobjbt=$('.judgebottom');
		var hobjH=hobjbt.height();
		var judgestatus=$(this).hasClass("fa-chevron-up");
		if(judgestatus){
			hobjbt.height(hobjH+searchhigh-48);
			
		}else{
			hobjbt.height(hobjH-searchhigh+48);
		}
	});
	
	//表格部分的初始高度,搜索栏的初始高度
	getHeighth(".follow-list",".search-for-high",129);		
	getHeighth(".frequency-list-body",".search-for-high",186);
	getHeighth(".fake-list-body",".search-for-high",166);
	var fresearch = $(".frequency .search-for-high").height();
	var fakesearch = $(".fake-body .search-for-high").height();
	var carsearch = $(".carentercy_body .search-for-high").height();
	//频繁过车点击后表格部分高度的改变	
	$(".frequency .hlistshow").click(function(){
		tabhigh(".frequency .hlistshow",".frequency-list-body",fresearch);
	});
	//套牌车点击后表格部分高度的变化	
	$(".fake-body .hlistshow").click(function(){	
		tabhigh(".fake-body .hlistshow",".fake-list-body",fakesearch);
	});
	//初次入城点击后表格部分变化	
	$(".carentercy_body .hlistshow").click(function(){	
		tabhigh(".carentercy_body .hlistshow",".frequency-list-body",carsearch);
	});
	//卡口列表内容区的高度
	$(".trees").height($(window).height()*0.9-20-51-34-42-34);
});

