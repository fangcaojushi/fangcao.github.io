$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.bind('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	};

	Accordion.prototype.dropdown = function(e) {

		var $el = e.data.el;
			$this = $(this);
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		 if (!e.data.multiple) {
		 	$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		 }
	};








	var accordion = new Accordion($('#accordion'), false);
});
$(function(){
	$('.sp_menu li').click(function(){
		var index=$(this).index()+1;
		$(this).addClass("active").siblings("li").removeClass("active"); 
		$('.sp_con li:nth-child('+index+')').addClass("active").siblings("li").removeClass("active");
	});
	$('.defaultimg').click(function(){
		$('.zhan').toggle(1000);
	});
	var strname,strname_hover;
	$(".zhan img").hover(
	function(){
		 strname=$(this).attr("src");
		strname_hover=strname.replace(/.png/,"_hover.png");
		$(this).attr("src",strname_hover);
	},
	function(){
		$(this).attr("src",strname);
	}
	);
	
	$(".opt-edit").click(function(){
		var txttr=$(this).parents('tr');
		txttr.addClass('select');
		var txtedit=txttr.find('input');
		txtedit.focus();
		txtedit.removeAttr("readonly");
		txttr.find('.txttijiao').show();
		
	});
	$(".txttijiao").click(function(){
		var txttr=$(this).parents('tr');
		txttr.removeClass('select');
		var txtedit=txttr.find('input');
		txtedit.blur();
		txtedit.attr("readonly","readonly");
		$(this).hide();
		
	});
	
	$('.btn-c').click(function(){
		window.open ('shipin_full.html','newwindow','width='+(window.screen.availWidth-10)+',height='+(window.screen.availHeight-30)+ ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
	});
});




//<!--------------------input获得焦点时搜索图标替换-------------------------->
	$(function(){
		$(".search_left .text").focus(function(){
   		 var p1 = $(".search_left").find("img").attr('src','/busdemo/static/common/images/sou1.png');
	})
		
		$(".search_left .text").blur(function(){
   		 var p1 = $(".search_left").find("img").attr('src','/busdemo/static/common/images/sou.png');

	})
});

//<!-----------------------鼠标经过时云台图片切换-------------------->
		 $(".sp_con li .focus img").mouseover(function(){
			 var imgsrc=$(this).attr("src");
			 var ln=imgsrc.length;		 
			 var imghoversrc=imgsrc.substring(0,ln-4)+"_hover.png"
			 $(this).attr("src",imghoversrc);
			 });
		 $(".sp_con li .focus img").mouseout(function(){
			 var imgsrc2=$(this).attr("src");
			 var ln=imgsrc2.length;		 
			 var imghoversrc2=imgsrc2.substring(0,ln-10)+".png"
			 $(this).attr("src",imghoversrc2);
			});			 

//<!--*********************设置目录树高度以及右侧视频插件的宽度************************-->
    $(function(){
        <!--设置目录树高度以及右侧视频插件的宽度-->
        var hone = $(".bootsnav").height();
        var search = $(".accordion_left").height();
        var winHeight = document.body.clientHeight;
        var winWidth = document.body.clientWidth;
        $(".tree_left").css("height",(winHeight-search-hone)+"px");
        var top = $(".tree_top").height();
        $(".shoushuo_window").css("height",(winHeight-search-hone-top)+"px");
       // movieObject为视频插件的class名
        $(".movieObject").css("width",(winWidth-260)+"px");
        $(".movieObject").css("height",(winHeight-50)+"px");
    })
    
  	$(function(){
		$("#search").click(function(){
			$(".submenu").hide(500);
			$("#sear_list").show(500);
			$("#back").show(500);
			$(".res_num").show(500);
		});
		$("#back").click(function(){
			$("#sear_list").hide(500);
			$(".submenu").show(500);
			$("#back").hide(500);
			$(".res_num").hide(500);
		});
		
		 $('#map_modal_btn').click(function(){
		 $('#map_modal').toggle(500);
		 
	});
		$('#map_close').click(function(){
			 $('#map_modal').hide(500);
			 
		});
	})