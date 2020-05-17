 // 百度地图API功能
        var map = new BMap.Map("allmap", {
            enableMapClick: false
        });    // 创建Map实例
        map.centerAndZoom(new BMap.Point(120.347065,31.553187), 12);  // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
/****************单击获取点击的经纬度*******************************
	map.addEventListener("click",function(e) {
		alert(e.point.lng + "," + e.point.lat);
	});
/****************单击获取点击的经纬度*******************************/
	var point = new BMap.Point(120.312139,31.592812);
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);              // 将标注添加到地图中
	var label = new BMap.Label("无锡火车站",{offset:new BMap.Size(-30,20)});
	label.setStyle({
			 color : "red",
			 fontSize : "14px",
			 height : "20px",
			 lineHeight : "20px",
			 fontFamily:"微软雅黑",
			 fontWeight: 'bold',
			 backgroundColor:'none',
			 border:0
		 });
	marker.setLabel(label);
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
// 地图自定义样式
		map.setMapStyle({style:'midnight'});
       var randomCount = 50;

        var node_data = {
            "0":{"x":120.312139, "y":31.592812},
            "1":{"x":121.485124, "y":31.235317},
        };

        var edge_data = [
            {"source":"1", "target":"0"}
        ]
       //var citys = ["北京","天津","上海","重庆","石家庄","太原","呼和浩特","哈尔滨","长春","沈阳","济南","南京","合肥","杭州","南昌","福州","郑州","武汉","长沙","广州","南宁","西安","银川","兰州","西宁","乌鲁木齐","成都","贵阳","昆明","拉萨","海口"];
		  var  citys=["A区","B区","C区"];
        // 构造数据
        for (var i = 1; i < randomCount; i++) {
            var cityCenter = mapv.utilCityCenter.getCenterByCityName(citys[parseInt(Math.random() * citys.length)]);
            node_data[i] = {
               /* x: cityCenter.lng - 5 + Math.random() * 10,
                y: cityCenter.lat - 5 + Math.random() * 10,*/
				 x: cityCenter.lng + Math.random()*0.01,
                y: cityCenter.lat + Math.random()*0.01
            }
            edge_data.push(
               {"source": ~~(i * Math.random()), "target": '0'}
			   //{"source": '1', "target": '0'}
				//{"source": ~~(i ), "target": '0'}
            );
        }

        var fbundling = mapv.utilForceEdgeBundling()
                        .nodes(node_data)
                        .edges(edge_data);

        var results = fbundling();  

        var data = [];
        var timeData = [];

        for (var i = 0; i < results.length; i++) {
           var line = results[i];
            var coordinates = [];
            for (var j = 0; j < line.length;j++) {
                coordinates.push([line[j].x, line[j].y]);
                timeData.push({
                    geometry: {
                        type: 'Point',
                        coordinates: [line[j].x, line[j].y]
                    },
                    count: 1,
                    time: j
                });
            }
            data.push({
                geometry: {
                    type: 'LineString',
                    coordinates: coordinates
                }
            });
        }

        var dataSet = new mapv.DataSet(data);
		

        var options = {
            strokeStyle: 'rgba(55, 50, 250, 0.3)',
            globalCompositeOperation: 'lighter',
            shadowColor: 'rgba(55, 50, 250, 0.5)',
            shadowBlur: 10,
            methods: {
                click: function (item) {
                }
            },
            lineWidth: 1.0,
            draw: 'simple'
        }

        var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);

        var dataSet = new mapv.DataSet(timeData);

        var options = {
            fillStyle: 'rgba(255, 250, 250, 0.9)',
            globalCompositeOperation: 'lighter',
            size: 2,
            animation: {
                type: 'time',
                stepsRange: {
                    start: 0,
                    end: 100
                },
                trails: 1,
                duration: 5,
            },
            draw: 'simple'
        }

        var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);
        
/****************重点区域的数据切换*******************************/
function zhongdianqy_select(qy_bianhao){
	var quyu_arr=new Array(50);
	quyu_arr=[[16, 3.2, 86, 12, 98, 2748, 68, 3, 99],[20, 8.2, 132, 16, 35, 3481, 35, 5, 98],[22, 6.5, 231, 22, 23, 2741, 41, 4, 97],[31, 7.6, 323, 34, 61, 3891, 8, 6, 96]];
		var temp_data,obj_zdyq_data;
		for(var i=0; i<9; i++){
			temp_data=quyu_arr[qy_bianhao][i];
			obj_zdyq_data=$('#zdyq_data'+i);
			obj_zdyq_data.fadeOut(1000);
			obj_zdyq_data.html(temp_data);
			obj_zdyq_data.fadeIn(1000);
			
		}
}
/****************重点区域的当前选中状态*******************************/
$('.qy .td').click(function(){
		var hh=$(this).siblings().find("h6");
		hh.removeClass('activ');
		var hh1=$(this).find("h6");
		hh1.addClass('activ');
 });