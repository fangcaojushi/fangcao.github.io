/*========================================================================
 * .hvs tr   mouseover
 * 本期与上周数据对比模块，详细数值的显示位置函数
 * ========================================================================*/	  
   function Posiset(chartl,numl,chartr,numr){
	   	$(chartl).siblings(numl).css({"right":($(chartl).width()+10) + "px","opacity":"1"});
		$(chartr).siblings(numr).css({"left":($(chartr).width()+10) + "px","opacity":"1"});	
	};
	$(function() {
		Posiset (".chart_conl",".num_conl",".chart_conr",".num_conr");
		Posiset (".chart_conl1",".num_conl1",".chart_conr1",".num_conr1");
		Posiset (".chart_conl2",".num_conl2",".chart_conr2",".num_conr2");
		Posiset (".chart_conl3",".num_conl3",".chart_conr3",".num_conr3");
		Posiset (".chart_conl4",".num_conl4",".chart_conr4",".num_conr4");
		Posiset (".chart_conl5",".num_conl5",".chart_conr5",".num_conr5");
		Posiset (".chart_conl6",".num_conl6",".chart_conr6",".num_conr6");
		Posiset (".chart_conl7",".num_conl7",".chart_conr7",".num_conr7");
		Posiset (".chart_conl8",".num_conl8",".chart_conr8",".num_conr8");
		Posiset (".chart_conl9",".num_conl9",".chart_conr9",".num_conr9");
		Posiset (".chart_conl10",".num_conl10",".chart_conr10",".num_conr10");
		Posiset (".chart_conl11",".num_conl11",".chart_conr11",".num_conr11");
	})