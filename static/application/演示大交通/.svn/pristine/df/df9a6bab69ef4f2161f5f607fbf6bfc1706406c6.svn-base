$(function () {
	var shishi_data1=new Array(30);
				var shishi_data2=new Array(30);
				var shishi_data3=new Array(30);
				var basic_data=[1.1, 2.8, 4.1, 4.3, 4.8, 4.5, 3.8, 4.6, 7.6, 8.1, 8.0, 6.1, 7.1, 6.4, 6.1, 6.4, 6.7, 8.0, 8.1, 6.7, 7.1, 4.8, 4.3, 3.4];
				var mydate = new Date();
				var t='更新时间： '+mydate.toLocaleString();
				var h=mydate.getHours();
				//alert('当前为 '+h+'  点');
				var temp1,temp2,temp3;
				$("#time").text(t);
				var buchang=1;
				var legend_status=true;
				var round_W=$('#canvas_round').width();
				if(round_W<=480)
				{
					buchang=2;
					legend_status=false;
				}
				for(var i=0;i<24;i++){
					if(i<=h){
						temp1=(Math.random()*1+0.8).toPrecision(2)-0.8;
						temp2=(Math.random()*1+1).toPrecision(2)-1;
						temp3=(Math.random()*1+0.6).toPrecision(2)-0.6;
						shishi_data1[i]=temp1+basic_data[i];
						shishi_data2[i]=temp2+basic_data[i];
						shishi_data3[i]=temp3+basic_data[i];
					}
					else{
						shishi_data1[i]='null';
						shishi_data2[i]='null';
						shishi_data3[i]='null'
					}
					
				};
				//alert(buchang);
    $('#canvas_round').highcharts({
        chart: {
            type: 'line',
			backgroundColor: 'rgba(0,0,0,0)'
        },
		credits: {
	        enabled: false    //不显示highcharts.com声明
	    },
       title: {
            text: '交通拥堵指数',
			align: 'left',
			 style: {
                color: '#3485ff',
				fontSize:'16px',
                fontWeight: 'bold'
            }
        },
      
		xAxis: {
            categories: ['1', '2', '3', '4', '5', '6','7', '8', '9','10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23','24'],
            lineWidth: 1,
            lineColor: "rgba(255,255,255,0.4)",
            tickWidth: 0,
//         	tickColor: "rgba(102,102,101,0.6)",
           	labels: {
           		style:{"color": "#999999"},
                step: buchang,
                y:15
            }
        },
	    yAxis: {
	   	 	categories: ['1', '2', '3', '4', '5', '6','7', '8', '9','10'],
            title: {
                text: ''
            },
			labels: {
				style:{"color": "#999999"},
                step: 2
            },
			floor: 0,
			ceiling:10,
			lineWidth: 1,
            lineColor: "rgba(102,102,101,0.6)",
            tickWidth: 0,
//         	tickColor: "rgba(102,102,101,0.6)",
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            plotBands: [{ // Light air
                from: 0,
                to: 2,
                color: '#008000',
                label: {
                    text: '畅通',
                    style: {
                        color: '#fff'
                    }
                }
            }, { // Light breeze
                from: 2,
                to: 4,
                color: '#99cc00',
                label: {
                    text: '基本畅通',
                    style: {
                        color: '#fff'
                    }
                }
            }, { // Gentle breeze
                from:4,
                to: 6,
                color: '#fed102',
                label: {
                    text: '缓行',
                    style: {
                        color: '#fff'
                    }
                }
            }, { // Moderate breeze
                from: 6,
                to: 8,
                color: '#fe9900',
                label: {
                    text: '较拥堵',
                    style: {
                        color: '#fff'
                    }
                }
            }, { // Fresh breeze
                from: 8,
                to: 10,
                color: '#fe0000',
                label: {
                    text: '拥堵',
                    style: {
                        color: '#fff'
                    }
                }
            }]
        },
        tooltip: {
        		 shared: true,
            pointFormat: '{series.name}:{point.y:.1f}<br/>'
        },
        plotOptions: {
            spline: {
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 24 * 3600 * 1000, // one hour
//            pointStart: Date.UTC(2016, 11, 1, 0, 0, 0)
            }
        },
		legend: {
            enabled:legend_status,
			align: 'right',
            verticalAlign: 'top',
           /* x: -10,
            y: 50,*/
            floating: true,
			itemStyle: {
                color: '#666666',
				fontSize:'12px'
                
            }
        },
        series: [
		 
        {
            name: '全市',
			lineWidth: 3,
			color: 'rgba(4,1,251,1)',
            data: shishi_data2

        },
        {
            name: '主干网',
			lineWidth: 3,
			color: 'rgba(44,191,81,1)',
            data: shishi_data3

       },
		{
            name: '中心城市',
			lineWidth: 3,
			color: 'rgba(4,220,251,1)',
            data: shishi_data1

        }, 
		{
            name: '平均指数',
			lineWidth: 1,
			color: 'rgba(199,110,6,1)',
            data: basic_data
        }
		
		],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
});// JavaScript Document