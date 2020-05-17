       $(function(){
			
			//获取焦点事件
			$("#posit").focus(function(){
				if($("#posit").val()==""){
					$(".default_module").show();
				}else{
					$(".default_module").hide();
				}
			});
			
			//失去焦点事件
			$(".ensure").click(function(){
				$(".default_module").hide();
			});
			
			//点击事件
			$("#search-button").click(function(){
				$(".poilist").slideDown(300);
			});
           //点击路况按钮显示路况数据
			$('#road_condition').click(function(){
			    $('#map_modal').toggle(500);
			});
			$('#map_close').click(function(){
			 	$('#map_modal').hide(500);
			});
			$('.default_module a').click(function(){
				$(this).find("i").toggleClass('active');				
				$(this).find("span").toggleClass('active');				
			});
		});	