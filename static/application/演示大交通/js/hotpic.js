//历史数据的热力图

  var map = new BMap.Map("hot_pic");          // 创建地图实例

//  var point = new BMap.Point(116.419812,39.920836);
	var point = new BMap.Point(120.347065,31.563187);
    map.centerAndZoom(point, 16);             // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(); // 允许滚轮缩放
	var bottom_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	map.addControl(bottom_left_control);        
	map.addControl(top_left_navigation);   
	var  mapStyle ={ 
        features: ["road", "building","water","land"],//隐藏地图上的poi
        style : "midnight"  //设置地图风格为高端黑
    }
	map.setMapStyle(mapStyle);
  
    var points =[
    //  var point = new BMap.Point(116.419812,39.920836);
    {"lng":120.343766,"lat":31.558864,"count":100},
	{"lng":120.343954,"lat":31.555174,"count":100},
	{"lng":120.235438,"lat":31.542503,"count":100},
    {"lng":120.358261,"lat":83.921984,"count":100},
    {"lng":120.333332,"lat":223.916532,"count":100},
    {"lng":120.359787,"lat":45.930658,"count":100},
    {"lng":120.358455,"lat":31.560921,"count":41000},
    {"lng":120.358843,"lat":31.555516,"count":100},
    {"lng":120.33546,"lat":31.558503,"count":46},
    {"lng":120.333289,"lat":31.559989,"count":38},
    {"lng":120.358162,"lat":31.555051,"count":80},
    {"lng":120.332039,"lat":31.55782,"count":11},
    {"lng":120.35387,"lat":31.557253,"count":74},
    {"lng":120.35773,"lat":31.559426,"count":42},
    {"lng":120.331107,"lat":31.556445,"count":24},
    {"lng":120.357521,"lat":31.557943,"count":27},
    {"lng":120.359812,"lat":31.560836,"count":23},
    {"lng":120.330682,"lat":31.55463,"count":60},
    {"lng":120.355424,"lat":31.564675,"count":68},
    {"lng":120.359242,"lat":31.554509,"count":15},
    {"lng":120.332766,"lat":31.561408,"count":25},
    {"lng":120.331674,"lat":31.564396,"count":81},
    {"lng":120.337268,"lat":31.56267,"count":1},
    {"lng":120.357721,"lat":31.560034,"count":51},
    {"lng":120.352456,"lat":31.56667,"count":7},
    {"lng":120.330432,"lat":31.559114,"count":71},
    {"lng":120.335013,"lat":31.561611,"count":35},
    {"lng":120.358733,"lat":39.931037,"count":22},
    {"lng":120.359336,"lat":39.931134,"count":4},
    {"lng":120.353557,"lat":31.563254,"count":65},
    {"lng":120.358367,"lat":31.56943,"count":83},
    {"lng":120.334312,"lat":31.559621,"count":100},
    {"lng":120.333874,"lat":31.559447,"count":87},
    {"lng":120.334225,"lat":31.563091,"count":32},
    {"lng":120.357801,"lat":31.561854,"count":44},
    {"lng":120.357129,"lat":31.568227,"count":21},
    {"lng":120.336426,"lat":31.562286,"count":80},
    {"lng":120.331597,"lat":31.55948,"count":32},
    {"lng":120.333895,"lat":31.560787,"count":26},
    {"lng":120.333563,"lat":31.561197,"count":17},
    {"lng":120.357982,"lat":31.562547,"count":17},
    {"lng":120.336126,"lat":31.561938,"count":25},
    {"lng":120.33326,"lat":31.555782,"count":100},
    {"lng":120.359239,"lat":31.556759,"count":39},
    {"lng":120.357185,"lat":31.569123,"count":11},
    {"lng":120.357237,"lat":31.567518,"count":9},
    {"lng":120.357784,"lat":31.555754,"count":47},
    {"lng":120.330193,"lat":31.557061,"count":52},
    {"lng":120.332735,"lat":31.555619,"count":100},
    {"lng":120.358495,"lat":31.555958,"count":46},
    {"lng":120.356292,"lat":39.931166,"count":92},
    {"lng":120.359916,"lat":31.564055,"count":68},
    {"lng":120.33189,"lat":31.561308,"count":11},
    {"lng":120.353765,"lat":31.569376,"count":3},
    {"lng":120.358232,"lat":31.560348,"count":50},
    {"lng":120.357554,"lat":39.930511,"count":15},
    {"lng":120.358568,"lat":31.558161,"count":23},
    {"lng":120.353461,"lat":31.566306,"count":76},
    {"lng":120.33232,"lat":31.56161,"count":73},
    {"lng":120.3574,"lat":31.568616,"count":6},
    {"lng":120.334679,"lat":31.555499,"count":21},
    {"lng":120.33171,"lat":31.555738,"count":29},
    {"lng":120.357836,"lat":31.556998,"count":99},
    {"lng":120.330755,"lat":31.568001,"count":10},
    {"lng":120.354077,"lat":39.930655,"count":14},
    {"lng":120.336092,"lat":31.562995,"count":16},
    {"lng":120.35535,"lat":39.931054,"count":15},
    {"lng":120.353022,"lat":31.561895,"count":13},
    {"lng":120.355551,"lat":31.553373,"count":17},
    {"lng":120.331191,"lat":31.566572,"count":1},
    {"lng":120.359612,"lat":31.557119,"count":9},
    {"lng":120.358237,"lat":31.561337,"count":54},
    {"lng":120.333776,"lat":31.561919,"count":26},
    {"lng":120.357694,"lat":31.56536,"count":17},
    {"lng":120.355377,"lat":31.554137,"count":19},
    {"lng":120.357434,"lat":31.554394,"count":43},
    {"lng":120.33588,"lat":31.562622,"count":27},
    {"lng":120.358345,"lat":31.559467,"count":8},
    {"lng":120.336883,"lat":31.557171,"count":3},
    {"lng":120.333877,"lat":31.556659,"count":34},
    {"lng":120.355712,"lat":31.555613,"count":14},
    {"lng":120.359869,"lat":39.931416,"count":12},
    {"lng":120.356956,"lat":31.565377,"count":11},
    {"lng":120.33066,"lat":31.565017,"count":38},
    {"lng":120.356244,"lat":31.560215,"count":91},
    {"lng":120.35929,"lat":31.555908,"count":84},
    {"lng":120.332116,"lat":31.559658,"count":21},
    {"lng":120.3583,"lat":31.565015,"count":65},
    {"lng":120.331969,"lat":31.553527,"count":3},
    {"lng":120.332936,"lat":31.561854,"count":24},
    {"lng":120.35905,"lat":31.569217,"count":62},
    {"lng":120.334579,"lat":31.554987,"count":57},
    {"lng":120.33076,"lat":31.555251,"count":70},
    {"lng":120.335867,"lat":31.558989,"count":8}
    ];
   
    if(!isSupportCanvas()){
    	alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
    }
	//详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
	//参数说明如下:
	/* visible 热力图是否显示,默认为true
     * opacity 热力的透明度,1-100
     * radius 势力图的每个点的半径大小   
     * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
     *	{
			.2:'rgb(0, 255, 255)',
			.5:'rgb(0, 110, 255)',
			.8:'rgb(100, 0, 255)'
		}
		其中 key 表示插值的位置, 0~1. 
		    value 为颜色值. 
     */
	heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
	map.addOverlay(heatmapOverlay);
	heatmapOverlay.setDataSet({data:points,max:100});
	
	//closeHeatmap();
    function setGradient(){
     	var gradient = {};
     	var colors = document.querySelectorAll("input[type='color']");
     	colors = [].slice.call(colors,1);
     	colors.forEach(function(ele){
			gradient[ele.getAttribute("data-key")] = ele.value; 
     	});
        heatmapOverlay.setOptions({"gradient":gradient});
    }
	//判断浏览区是否支持canvas
    function isSupportCanvas(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }