$(function(){
var map = new BMap.Map("allmap", {
            enableMapClick: false
});    // 创建Map实例
map.centerAndZoom(new BMap.Point(106.92575787796,28.953733792322), 16);  //无锡市
var ctrl = new BMapLib.TrafficControl({
		showPanel: false //是否显示路况提示面板
	});      
map.addControl(ctrl);

ctrl.showTraffic(); //初始化加载路况
$('#tcBtn').hide();
var  mapStyle ={ 
        features: ["road", "building","water","land"],//隐藏地图上的poi
        style : "midnight"  //设置地图风格为高端黑
    }
map.setMapStyle(mapStyle);
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

//var bottom_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});// 左上角，添加比例尺
//var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
//map.addControl(bottom_left_control);        
//map.addControl(top_left_navigation);    
// 
//var size = new BMap.Size(100, 20);
//map.addControl(new BMap.CityListControl({
//  anchor: BMAP_ANCHOR_TOP_LEFT,
//  offset: size
//}));
function checkhHtml5()   
        {   
            if (typeof(Worker) === "undefined")     
            {   
                if(navigator.userAgent.indexOf("MSIE 9.0")<=0)  
				   {  
				 	 alert("定制个性地图示例：IE9以下不兼容，推荐使用百度浏览器、chrome、firefox、safari、IE10");   
				   }  
                
            }  
        }
 checkhHtml5();     
})
