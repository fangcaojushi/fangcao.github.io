$(function(){
var map = new BMap.Map("allmap", {
            enableMapClick: false
});    // 创建Map实例
//北京  map.centerAndZoom(new BMap.Point(116.404269,39.916042), 12);
map.centerAndZoom(new BMap.Point(120.311995,31.592074), 12);  //无锡市
//var  mapStyle ={ 
//      features: ["road", "building","water","land","local"],//隐藏地图上的poi
//      style : "midnight"  //设置地图风格为高端黑
//  }
//map.setMapStyle(mapStyle);
var ctrl = new BMapLib.TrafficControl({
		showPanel: false //是否显示路况提示面板
	});      
map.addControl(ctrl);
//	ctrl.setAnchor(BMAP_ANCHOR_TOP_RIGHT);
//map.trafficOn=true;

ctrl.showTraffic(); //初始化加载路况
//$('#tcWrap').css({"top":"34px","right":"10px"});		//
$('#tcBtn').hide();


map.setMapStyle({
  styleJson:[
          {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                              "color": "#021019"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#147a92"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#0b3d51"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "all",
                    "stylers": {
                              "color": "#000000",
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                              "color": "#08304b"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#08304b"
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -70
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry.fill",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#857f7f"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#000000"
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "all",
                    "stylers": {
                              "color": "#cc0000",
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#062032"
                    }
          },
          {
                    "featureType": "boundary",
                    "elementType": "all",
                    "stylers": {
                              "color": "#1e1c1c"
                    }
          },
          {
                    "featureType": "manmade",
                    "elementType": "all",
                    "stylers": {
                              "color": "#022338"
                    }
          },
          {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "labels",
                    "stylers": {
                              "visibility": "off"
                    }
          }
]
});


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
