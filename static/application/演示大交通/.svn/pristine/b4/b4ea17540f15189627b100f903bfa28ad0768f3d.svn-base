$(function () {
    var chart;
    
    $(document).ready(function () {
    	
    	// Build the chart
		
        $('#jiaotongshijian').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
				backgroundColor: null,
				options3d: {
                enabled: true,
                alpha: 15,
                beta: 0
            }
            },
			colors: ['#23ac38', '#FF3D0F','#1f4eb0', '#F7B516', '#24CBE5', '#DDDF00', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
			legend: {
//				  floating:true,
				  align: 'right',
				  verticalAlign: 'middle',
				  layout: 'vertical',
				  labelFormat:"{name}:  {y}件",
				  itemStyle : {
					  'fontSize' : '12px', color: '#aabad5', width:'120px',
				  },
				  itemHoverStyle: {
					  color: '#FF0000'
				  },
				  itemHiddenStyle: {
					  color: '#666'
				  }
				  
			  },
			  credits: {
				  enabled: false
			  },
            title: {
                text: null
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
					 depth: 15,
					 innerSize: '70%',
                    dataLabels: {
                        enabled: false
                    },
					borderColor: false,
                    showInLegend: true
                }
            },
			
            series: [{
                type: 'pie',
                name: '能源所占比例',
                data: [
					['拥堵',  435],
					['缓慢',  610],
                    ['事故',  320],
                    ['其他',   306],
                    ['施工管制', 356], 
                ]
            }]
        });
    });
    
});				// JavaScript Document