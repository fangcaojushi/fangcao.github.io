// chart line
var random1 = function(){ return (Math.random()*1).toPrecision(2)};
var random2 = function(){ return (Math.random()*(8-4)+4).toPrecision(2)};
var random3 = function(){ return (Math.random()*(4-2)+2).toPrecision(2)};
var lineChartData = {
                    labels : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],
                    datasets : [
                        {
                            //label: "My First dataset",
                            fillColor : "rgba(204,51,255,0.5)",						//填充的颜色
                            strokeColor : "rgba(204,51,255,1)",						//线的颜色
                            pointColor : "rgba(204,51,255,1)",						//鼠标悬浮显示的数据块的颜色
                            pointStrokeColor : "rgba(204,51,255,1)",
                            pointHighlightFill : "rgba(197,48,197,1)",
                            pointHighlightStroke : "rgba(197,48,197,1)",
                            data :  [random1(),random1(),random1(),random1(),random1(),random1(),random1(),random2(),random2(),random2(),random3(),random3(),random3(),random3(),random3(),random3(),random3(),random2(),random2(),random2(),random2(),random3(),random3(),random1()]
                        },
                        {
                            //label: "My First dataset",
                            fillColor : "rgba(0,0,204,0.5)",
                            strokeColor : "rgba(0,0,204,1)",
                            pointColor : "rgba(0,0,204,1)",
                            pointStrokeColor : "rgba(0,0,204,1)",
                            pointHighlightFill : "rgba(0,0,204,1)",
                            pointHighlightStroke : "rgba(0,0,204,1)",
                            data : [random1(),random1(),random1(),random1(),random1(),random1(),random1(),random2(),random2(),random2(),random3(),random3(),random3(),random3(),random3(),random3(),random3(),random2(),random2(),random2(),random2(),random3(),random3(),random1()]
                        },
                        {
                            //label: "My Second dataset",
                            fillColor : "rgba(1,164,243,0.5)",
                            strokeColor : "rgba(1,164,243,1)",
                            pointColor : "rgba(1,164,243,1)",
                            pointStrokeColor : "rgba(1,164,243,1)",
                            pointHighlightFill : "rgba(1,164,243,1)",
                            pointHighlightStroke : "rgba(1,164,243,1)",
                            data : [random1(),random1(),random1(),random1(),random1(),random1(),random1(),random2(),random2(),random2(),random3(),random3(),random3(),random3(),random3(),random3(),random3(),random2(),random2(),random2(),random2(),random3(),random3(),random1()]
                        }
                        
                    ]
        
                }
var default_line={
		scaleOverride :true ,   //是否用硬编码重写y轴网格线
		scaleShowLabels : true, //是否显示Y轴的标签
		scaleShowGridLines : true,//是否显示网格线
		scaleGridLineColor : "rgba(0,0,0,.1)",//网格线的颜色
		scaleSteps : 5,        //y轴刻度的个数
		scaleStepWidth :2,   //y轴每个刻度的宽度
		scaleStartValue : 0,    //y轴的起始值
		pointDot : true,        //是否显示点
		pointDotRadius : 1,     //点的半径
		pointDotStrokeWidth : 3,//点的线宽
		datasetStrokeWidth : 2, //数据线的线宽
		animation : true,       //是否有动画效果
		animationSteps : 60,   //动画的步数			
		responsive: true
	}
        
window.onload = function(){
	var ctx = $("#canvas").get(0).getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, default_line);	
	
}