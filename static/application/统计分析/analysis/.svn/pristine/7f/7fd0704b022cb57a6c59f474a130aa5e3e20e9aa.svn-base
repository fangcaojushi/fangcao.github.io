$(function(){
	var spec_index = $(".spec_index").innerHeight();	
	var common_index = $(".common_index").innerHeight();	
	var tophigh = (common_index-spec_index)/2;
	$(".spec_index").css("margin-top",tophigh + "px");

    //项目详情滚动条设置
    var nuit_box = $(".nuit_box").outerHeight(true)*2+35;
    $(".consnit_content").css("height",nuit_box + "px");
	//显示分数
	$(".show_number li p").each(function(index, element) {
		var num = $(this).attr("tip");
		var www = num * 2 * 24.5; //
		$(this).css("width", www);
		$(this).parent(".atar_Show").siblings("span").text(num*10 + "分");
	});

})
