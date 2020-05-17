$(function() {
	var hwf_city = echarts.init(document.getElementById("hwf_city")),
	hwf_cityopt = {
		title: {
			text: ""
		},
		tooltip: {
			trigger: ""
		},
		legend: {
			data:['本周','上周']
		},
		grid: {
			x: 40,
			x2: 40,
			y2: 24
		},
		calculable: !0,
		xAxis: [{
			type: "category",
			data: ["违法总数/起","电警抓拍/起","两客一危/起","教育纠正/起","警告/起","罚款处罚/起"]
		}],
		yAxis: {},
		series: [{
            name: '本周',
            type: 'bar',
            barMaxWidth:40,
            label: {
                normal: {
                    show: true,
                    position:"top"
                }
            },
            itemStyle: {
		      normal: {
		        color: '#a8c95f'
		      }
		    },
            data: [4933, 3663, 175, 3810,600,4000]
        },
        {
            name: '上周',
            type: 'bar',
            barMaxWidth:40,
            label: {
                normal: {
                    show: true,
                    position:"top"
                }
            },
            itemStyle: {
		      normal: {
		        color: '#58b4ef'
		      }
		    },
            data: [3998, 3110, 134, 3707,500,3300]
        }]
	};
	hwf_city.setOption(hwf_cityopt), $(window).resize(hwf_city.resize);
})