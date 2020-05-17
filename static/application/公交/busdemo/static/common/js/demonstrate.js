//js by wh
//js应用：演示系统

$(document).ready(function() {
	$('.gjzs_menu a').click(function(){
		$(this).siblings().removeClass('cur');
		$(this).addClass('cur');
		var index=$(".gjzs_menu a").index(this)+1;
		$(".gjzs_con").removeClass('cur');
		$("#link"+index).addClass('cur');
	  });

/***********************抽屉*******************************************/		
	$('.win_title').click(function(){
    var shoushuo_window=$(this).parent();
		if(shoushuo_window.hasClass('shoushuo_window_hidden'))
		{
			shoushuo_window.removeClass('shoushuo_window_hidden');
		}
		else
		{
			shoushuo_window.addClass('shoushuo_window_hidden');
		}
	  });
	
	  $('#bottom_win').click(function(){
    		var history_win=$(this).parent();
    		var history_winH='-'+history_win.height()+'px';
		if(history_win.hasClass('history_win_hidden'))
		{
			history_win.removeClass('history_win_hidden');
			history_win.css("bottom","0px");
			$(this).addClass("glyphicon-chevron-down");
			$(this).removeClass("glyphicon-chevron-up");
		}
		else
		{
			history_win.addClass('history_win_hidden');
			history_win.css("bottom",history_winH);
			$(this).removeClass("glyphicon-chevron-down");
			$(this).addClass("glyphicon-chevron-up");
		}
	  });
/***********************浮飘*******************************************/	
  $('.point-area').click(function(){
		  $(this).addClass('active').siblings("").removeClass("active");
		  //var popover_width=$('.popover').width();
		  var popover_height=$('.popover').height();
		  var popover_left=$(this).offset().left+60;
		  var popover_top=$(this).offset().top-popover_height/2+60-6;
		  $('.popover').css('left',popover_left+'px');
		  $('.popover').css('top',popover_top+'px');
		  $('.popover').show(500); 
	  });
	  $('#popover_close').click(function(){
		  $('.popover').hide(500);
	});
	
/*$('#xiangqing_car').bind('click', function () {
    e._showDetial ? ($('#xiangqing_car_modal').slideUp(200), e._showDetial = !1)  : ($('#xiangqing_car_modal').slideDown(200), e._showDetial = !0)
  });
	*/
	
$('#xiangqing_car').click(function () {
   $('#xiangqing_car_modal').slideToggle(500);
   if($('#car_show').hasClass('glyphicon-hand-down'))
   {
	   $('#car_show').removeClass('glyphicon-hand-down');
	   $('#car_show').addClass('glyphicon-hand-up');
	}
	else
	{
		$('#car_show').removeClass('glyphicon-hand-up');
	   $('#car_show').addClass('glyphicon-hand-down');
	}
  
  });
 
 $('#car_shipin_btn').click(function(){
	 $('#car_shipin_modal').toggle(500);
	 
});

$('#shipin_close').click(function(){
	 $('#car_shipin_modal').hide(500);
	 
});
});


//<!--input获得焦点时图标替换-->
	$(function(){
		$(".treehight .search_left .text").focus(function(){
   		 var p1 = $(".search_left").find("img").attr('src','/busdemo/static/common/images/sou1.png');
	})
		
		$(".search_left .text").blur(function(){
   		 var p1 = $(".search_left").find("img").attr('src','/busdemo/static/common/images/sou.png');
	})
});