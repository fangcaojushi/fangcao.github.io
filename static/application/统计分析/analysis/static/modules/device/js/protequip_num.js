$(function() {
	var hwf_city = echarts.init(document.getElementById("equip_num")),
	deviceopt = {
		   color: ['#a6cb5f', '#ED5565','#5facdb', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#54b68d', '#6AF9C4'],
		    title : {
		        text: '',
		        subtext: ''
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c}"
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    legend: {
		          data : ['大兴项目','秦皇岛项目','合川项目','万盛项目','乌鲁木齐项目']
		    },
		    calculable : true,
		    series : [
		        {
		            name:'所属设备数',
		            type:'funnel',
		            x: '10%',
		            y: 60,
		            //x2: 80,
		            y2: 60,
		            width: '80%',
		            // height: {totalHeight} - y - y2,
		            min: 0,
		            max: 300,          
		            sort : 'descending', // 'ascending', 'descending'
		            gap : 4,
		            itemStyle: {
		                normal: {
		                    // color: 各异,
		                    borderColor: '#fff',
		                    borderWidth: 1,
		                    label: {
		                        show: true,
		                        position: 'inside'
		                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
		                    },
		                    labelLine: {
		                        show: false,
		                        length: 10,
		                        lineStyle: {
		                            // color: 各异,
		                            width: 1,
		                            type: 'solid'
		                        }
		                    }
		                },
		                emphasis: {
		                    // color: 各异,
		                    borderColor: 'red',
		                    borderWidth: 1,
		                    label: {
		                        show: true,
		                        formatter: '{b}',
		                        textStyle:{
		                            fontSize:18
		                        }
		                    },
		                    labelLine: {
		                        show: true
		                    }
		                }
		            },
		            data:[
		                {value:160, name:'大兴项目'},
		                {value:140, name:'秦皇岛项目'},
		                {value:120, name:'合川项目'},
		                {value:180, name:'万盛项目'},
		                {value:100, name:'乌鲁木齐项目'}
		            ]
		        }
		    ]
		};                    
	hwf_city.setOption(deviceopt), $(window).resize(hwf_city.resize);
})