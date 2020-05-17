/***********************浮飘*******************************************/	
  $('.bus').mouseover(function(){
		  $(this).addClass('active').siblings("").removeClass("active");
		  var fupiao=$('.over_win .popover');
		  var popover_width=fupiao.width();
		  var popover_height=fupiao.height();
		  var buscenter=$('.bus').width()/2;
		  var popover_left=$(this).offset().left-popover_width/2+buscenter;
		  var popover_top=$(this).offset().top-popover_height;
		  fupiao.css('left',popover_left+'px');
		  fupiao.css('top',popover_top+'px');
		  fupiao.show(); 
	  });
	  
	 
 $('.bus').mouseout(function(){
		  $('.over_win .popover').hide();
	});