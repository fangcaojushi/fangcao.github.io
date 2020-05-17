$(function () {
    $('#pianqu2').highcharts({
         chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            backgroundColor: 'rgba(8,23,47,0)',
            plotShadow: false,
          
        },
        title: {
            text: '2.1万 <br/>三凤桥',
//			text: null,
            align: 'center',
            verticalAlign: 'middle',
            style:{color:'#ff3d0f',fontWeight: 'bold',}
            //y: 50
        },
        colors: [ '#ff3d0f','#1d2838', '#ff0000', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        tooltip: {
			enabled:false,
            pointFormat: '{series.name}: <b>{point.y}台</b>'
        },
         credits: {
		  enabled: false
	  },
        legend: {
            align: 'left',
           verticalAlign: 'middle',
            layout: 'vertical',
            labelFormat:"{name}:  {y}台",
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
            pie: {
           	 	borderColor: "",//去边框
            		shadow: false,		//去阴影
                dataLabels: {
                    enabled: false,
                    distance: -10,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -120,
                endAngle: 120,
                center: ['50%', '50%'],
                
                showInLegend: false
            }
        },
        series: [{
        	color:'',
            type: 'pie',
            name: '设备数量',
            innerSize: '80%',
            data: [
                ['在线',   1000],
                ['离线',   400],  
            ]
        }]
    });
});
