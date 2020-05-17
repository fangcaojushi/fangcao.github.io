/* ========================================================================
 * analysis_search 
 * 对于统计分析的时间，线路，车辆，站牌选择模块
 * ========================================================================
 * Author: Wanghong
 * Development date:2017.3.17
 * ======================================================================== */	
$(function(){
	
/* ========================================================================
 * object: search_analysis_box li span
 * 根据所选的的内容，改写select的值
 * ======================================================================== */	
	$('.search_analysis_box li span').click(function() {
		var spantxt=$(this).text();
		//改写选中的值
		var ulparentId=$(this).parents('ul').attr('aria-labelledby');
		$("#"+ulparentId+" .search_text").text(spantxt);
		//选择线路后车辆和站点变成有效
		if(ulparentId=='dropdownMenu_line'){
			lineState('dropdown');
		};
		//增加选择项
		var ulparentIdName=ulparentId.substr(ulparentId.lastIndexOf('_')+1);
		$("#selected_"+ulparentIdName).show(500);
		$("#selected_"+ulparentIdName+" .screening_content .condition").text(spantxt);
	});


/* ========================================================================
 * object: screening_close
 * 删除和清楚所有的已经选择项
 * ======================================================================== */
	$('.screening_close').click(function() {
		$(this).parent().parent().parent().hide();
	
	});
//清除所有的选择条件
	$('.delete').click(function() {
		$(".screening_condition").hide();
		$("#dropdownMenu_time .search_text").text("请选择时间");
		$("#dropdownMenu_line .search_text").text("请选择线路");
		$("#dropdownMenu_car .search_text").text("请选择车辆");
		$("#dropdownMenu_site .search_text").text("请选择站牌");
		lineState(' ');
	});


//单独清除选择条件
	$(".screening_close").click(function(){
		closeSelectedOne($(this));
	});
/* ========================================================================
 * object: closeSelectedOne
 * 清除选项的函数
 * ======================================================================== */
	function closeSelectedOne(selectbtn){
		//关闭按钮的名称
		var btnName=selectbtn.attr("id");
		//要复位的下拉菜单的类别
		var btnSelectName=btnName.substr(btnName.lastIndexOf('_')+1);
		//要复位的下拉菜单的内容
		var btnReset;
		switch (btnSelectName)
		{
		case "time":
		  btnReset="时间";
		  break;
		case "line":
		  btnReset="线路";
		  $("#dropdownMenu_car .search_text").text("请选择车辆");
		  $("#selected_car").hide();
		  $("#dropdownMenu_site .search_text").text("请选择站牌");
		  $("#selected_site").hide();
		  lineState(' ');
		  break;
		case "car":
		  btnReset="车辆";
		  break;
		case "site":
		  btnReset="站牌";
		  break;
		};
		//复位的下拉菜单的内容
		$("#dropdownMenu_"+btnSelectName+" .search_text").text("请选择"+btnReset);
		
	};

/* ========================================================================
 * object: lineState
 * 选择了线路或清除线路给站牌和车辆置相应的状态
 * ======================================================================== */
	function lineState(stateName){
			$('#dropdownMenu_car').attr('data-toggle',stateName);
			$('#dropdownMenu_site').attr('data-toggle',stateName);
			if(stateName=='dropdown'){
				$('#dropdownMenu_car').removeClass("btn-gray");
				$('#dropdownMenu_site').removeClass("btn-gray");
			}
			else{
				$('#dropdownMenu_car').addClass("btn-gray");
				$('#dropdownMenu_site').addClass("btn-gray");
			}
			
	};
	
/* ========================================================================
 * object: YMDselect
 * 联动日期的算法
 * ======================================================================== */
//定义年月日
 var timeYear,curtimeYear,					//定义当前选择的年
 	 timeMonth,curtimeMonth,				//定义当前选择的月
 	 timeDay,curtimeDay,				//定义当前选择的月
 	 tabTimeName='yeartab',		//定义选择的年月日选项卡，并初始化为年
 	 YMDContent;					//构造*年*月*日
		SYT="-请选择年份-";
		SMT="-请选择月份-";
		SDT="-请选择日期-";
		BYN=10;//年份范围往前50年
		AYN=0;//年份范围往后0年
		
		//设置年份
		YMDselect.SetY=function(YMD){
			dDate = new Date();
			dCurYear = dDate.getFullYear();
			curtimeYear=dCurYear+"年";
			timeYear=curtimeYear;
			curtimeMonth=dDate.getMonth()+1;
			timeMonth=curtimeMonth;
			curtimeDay= dDate.getDate();
			timeDay=curtimeDay;
			YMD.SelY.options.add(new Option(SYT,'0'));
			for(i = dCurYear+AYN; i>(dCurYear-BYN); i--){
				YMDYT=i+'年';
				YMDYV=i;
				OptY = new Option(YMDYT,YMDYV);
				YMD.SelY.options.add(OptY);
				if(YMD.DefY==YMDYV) OptY.selected=true
			}
			YMDselect.SetM(YMD);
		};
		//设置月份
		YMDselect.SetM=function(YMD){
			YMD.SelM.length = 0;
			YMD.SelM.options.add(new Option(SMT,'0'));
			if(YMD.SelY.value>0){
				for(var i=1;i<=12;i++){
					YMDMT=i+'月';
					YMDMV=i;
					OptM=new Option(YMDMT,YMDMV);
					YMD.SelM.options.add(OptM);
					if(YMD.DefM==YMDMV) OptM.selected=true
				}
			}
			if(YMD.SelD)YMDselect.SetD(YMD)
		};
		//设置日期
		YMDselect.SetD=function(YMD){
			YI=YMD.SelY.value;
			MI=YMD.SelM.value;
			YMD.SelD.length = 0;
			YMD.SelD.options.add(new Option(SDT,'0'));
			if(YI>0 && MI>0){
				dPrevDate = new Date(YI, MI, 0);
				daysInMonth=dPrevDate.getDate();
				for (d = 1; d <= parseInt(daysInMonth); d++) {
					YMDDT=d+'日';
					YMDDV=d;
					OptD=new Option(YMDDT,YMDDV);
					YMD.SelD.options.add(OptD);
					if(YMD.DefD==YMDDV)OptD.selected=true;
				}
			}
		};
		//年月日的递归调用函数
		function YMDselect(){
			this.SelY=document.getElementsByName(arguments[0])[0];
			this.SelM=document.getElementsByName(arguments[1])[0];
			this.SelD=document.getElementsByName(arguments[2])[0];
			this.DefY=this.SelD?arguments[3]:arguments[2];
			this.DefM=this.SelD?arguments[4]:arguments[3];
			this.DefD=this.SelD?arguments[5]:arguments[4];
			this.SelY.YMD=this;
			this.SelM.YMD=this;
			this.SelY.onchange=function(){YMDselect.SetM(this.YMD); timeYear=$(this).children('option:selected').val()+"年"};
			this.SelM.onchange=function(){ timeMonth=$(this).children('option:selected').val() };
			if(this.SelD)this.SelM.onchange=function(){YMDselect.SetD(this.YMD);  timeMonth=$(this).children('option:selected').val() };
			if(this.SelD)this.SelD.onchange=function(){  timeDay=$(this).children('option:selected').val()};
			YMDselect.SetY(this)
		};
/* ========================================================================
 * object: addSearch
 * 年月日联动的调用
 * ======================================================================== */
	if($("#selected_time").length > 0){
		new YMDselect('yearY','monthY');
		new YMDselect('yearM','monthM');
		new YMDselect('yearD','monthD','dayD');
	}	
/* ========================================================================
 * object: time_submit
 * 时间条件的确定
 * ======================================================================== */

//快捷条件的状态
	
	$(".quick span").click(function(){
		$(this).siblings().removeClass("active");
		$(this).toggleClass("active");
		if($(this).hasClass("active")){
		timeYear=$(this).text();
		}else{
			timeYear=dCurYear+"年";
		}
//		timeYear=$(this).text();
	});

//时间条件的显示
	$("#dropdownMenu_time").click(function(){
		$(".moreselect").show();
		$(".maskbox").show();
	});
	$("#time_cancel").click(function(){
		$("#YMD_content").text("请选择时间");
		$(".moreselect").hide();
		$(".maskbox").hide();
	});
	//置年月日选中的tab值
	$(".moreselect ul li a").click(function(){
		$(".quick span").siblings().removeClass("active");
		timeYear=dCurYear+"年";
	    tabTimeName=$(this).attr("aria-controls");
	    switch (tabTimeName)
		{
		case "yeartab":
		  timeYear=curtimeYear;
		  $("[name='yearY']").val(0);
		  $(".quick span").each(function(){
		    $(this).removeClass("active");
		  });
		  break;
		case "monthtab":
		 timeYear=curtimeYear;
		 timeMonth=curtimeMonth;
		 $("[name='yearM']").val(0);
		 $("[name='monthM']").val(0);
		 break;
		case "daytab":
		 timeYear=curtimeYear;
		 timeMonth=curtimeMonth;
		 timeDay=curtimeDay;
		 $("[name='yearD']").val(0);
		 $("[name='monthD']").val(0);
		 $("[name='dayD']").val(0);
		 break;
		};
	});
/* ========================================================================
 * object: #time_submit 之click
 * 设置时间的select值
 * ======================================================================== */	
	$("#time_submit").click(function(){
		switch (tabTimeName)
		{
		case "yeartab":
		  YMDContent=timeYear;
		  break;
		case "monthtab":
		  YMDContent=timeYear+timeMonth+"月";
		  break;
		case "daytab":
		  YMDContent=timeYear+timeMonth+"月"+timeDay+"日";
		  break;
		};
		$("#YMD_content").text(YMDContent);
		$("#selected_time").show(500);
		$("#selected_time .screening_content .condition").text(YMDContent);
		addSelectAll();
		$(".moreselect").hide();
		$(".maskbox").hide();
	});
/* ========================================================================
 * object: addSelectAll
 * 清除所有的显示与否
 * ======================================================================== */
	function addSelectAll(){
		var selectAll=$("#selected_all");
		if(selectAll.css("display")=='none'){
			selectAll.show();
		}
	};
/* ========================================================================
 * object: selected_frequerncy
 * 发车频率的选择状态
 * ======================================================================== */
	
	$(".selected_frequerncy span").click(function(){
		$(this).siblings().removeClass("active");
		$(this).toggleClass("active");
	});
/* ========================================================================
 * object: table_head
 * 表头始终显示，
 * ======================================================================== */
	if($("#tbl_box").length > 0){
		//tbl_con为表格的id
		//tbl_box为表格外层div的id，即其父亲的id
		$.fn.CloneTableHeader("tbl_con", "tbl_box");

	};	
});