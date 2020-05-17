$(
	function(){
		$(".alert-detail").height($(window).height()*0.7 - 40);
    	//跟车关联页，列表点击显示隐藏切换
    	 var deg = 0;
    $(".follow-list-part-title").click(function() {
	    var n = $(this).attr("value");
	    var showone = ".follow-l" + n;
	    $(showone).slideToggle();
	    deg += 180;
    		$(this).children(".follow-slide-icon").css("transform","rotate(" + deg + "deg)")
  	})
    //弹窗的出现与隐藏
    $(".follow-alert-btn").click(function(){
	    	$(".follow-alert").show();
	    	$(".alert-bg").show();
    })
    $(".glyphicon-remove").click(function(){
	    	$(".follow-alert").hide();
	    	$(".alert-bg").hide();
    })
    //开始时间
	lay('#version').html('-v'+ laydate.v);
	//区域一
	laydate.render({
	  elem: '#followstart',
	  type: 'datetime',
	});
	//结束时间
	laydate.render({
	  elem: '#followend',
	  type: 'datetime',
	});
	//按键点击
	$(".follow-search-btn .follow-btn1").click(function(){
		$(this).removeClass("btn-primary");
		$(".follow-btn2").addClass("btn-primary");
	})
	$(".follow-search-btn .follow-btn2").click(function(){
		$(this).removeClass("btn-primary");
		$(".follow-btn1").addClass("btn-primary");
	})
	//初次入城页面弹窗的出现与隐藏
    $(".carentercy_body .btn-warning.btn-outline").click(function(){
	    	$(".follow-alert").show(500);
	    	$(".alert-bg").show();
    })
    $(".carentercy_body .glyphicon-remove").click(function(){
	    	$(".follow-alert").hide();
	    	$(".alert-bg").hide();
    })
    //频繁过车详情页
    $(".frequency-body button").click(function(){
    		$(".frequency-iframe-bg").css("display","none");
		$(".hdetailbox").css("z-index","99999");
		$(".frequency .closeico").css("display","block");
		$(".hmsmark").show();
//		scaleimage($(".carwh"),$(".cardad"));
	});
	$(".frequency .closehdetail").click(function(){
		$(".frequency-iframe-bg").css("display","block");
		$(".frequency-iframe-bg").css("z-index","-888");
		$(".hdetailbox").css("z-index","-999");
		$(".frequency .closeico").css("display","none");
		$(".hmsmark").hide();
	});
	//套牌车详情页
    $(".fake-list-body button").click(function(){  
    		$(".fake-iframe-bg").css("display","none");
		$(".fakebox").css("z-index","999");
		$(".fakebox .closeico").css("display","block");
	});
	$(".fakebox .closehdetail").click(function(){
		$(".fakebox").css("z-index","-999");
		$(".fake-iframe-bg").css("display","block");
		$(".fake-iframe-bg").css("z-index","-888");
		$(".fakebox .closeico").css("display","none");
	});
  }
)
