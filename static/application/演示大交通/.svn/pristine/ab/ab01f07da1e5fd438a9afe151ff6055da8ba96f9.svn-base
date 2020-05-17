$(function () {
    $('#yydw').highcharts({
        chart: {
            type: 'bar',
           plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
				backgroundColor: 'rgba(8,23,47,0.3)',
				options3d: {
	                enabled: true,
	                alpha:5,
	                beta: 3,
	            }
        },
        title: {
            text: null
        },
        credits: {
		  enabled: false
	  },
        xAxis: {
            categories: ['中兴智能交通','运通客运公司', '百利宝公司','祥云通公司','畅达通公司'],
            gridLineColor: 'rgba(102,102,101,0.3)',
            gridLineWidth: 1,
            labels: {
                style: {
                    color: '#aabad5'
                }
            }
        },
        yAxis: {
//          min: 0,
            title: {
                text: '设备状态数量/台'
            },
            gridLineColor: 'rgba(102,102,101,0.3)',
            gridLineWidth: 1,
        },
        legend:{
			enabled:true,
			align: 'right',
            verticalAlign: 'top',
            y:-10,
            floating: true,
            itemStyle : {
				  'fontSize' : '12px', color: '#aabad5'
			  },
			  itemHoverStyle: {
				  color: '#FF0000'
			  },
			  itemHiddenStyle: {
				  color: '#666'
			  }
		},
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [
        {
            name: '离线',
            data: [12, 22, 39,30,11],
            color:'#676767'
        },
         {
            name: '故障',
            data: [27, 14,19,34,91],
            color:'#ff0000'
        }, 
        {
            name: '在线',
            data: [ 1955,1505, 582,321,299],
            color:'#23AC38'
        },
        ]
    });
});