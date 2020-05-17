/**************************拥堵持续时间*******************************************************/
	 $(function(){
		 var degA,		//上午拥堵的X0值
		 	 degB,		//上午拥堵的y0值
			 degC,		//下午拥堵的X0值
			 degD,		//下午拥堵的y0值
			 patho=new Array(10);
		 for(var i=1; i<10; i++)
		 {
		 	degA=Math.random()*(80-30)+30;
			degB=Math.random()*(30-10)+10;
			degC=Math.random()*(210-190)+190;
			degD=Math.random()*(190-150)+150;
			patho[i] = document.getElementById("shanxing"+(i+1));
			//patho[i]=$("#shanxing"+(i+1));
			if(i%2==0){
				chixuyongduzhishu(degA,degB,patho[i]);
			}
			else{
				chixuyongduzhishu(degC,degD,patho[i]);
			}
		 }
		
		 });
	function chixuyongduzhishu(deg1,deg2,path){
			var r,		//圆心坐标
				rr,		//圆半径
				x0,		//圆弧的坐标
				y0,
				x1,
				y1;
			r=76;
			rr=r-14;
			x0 = r+rr*Math.cos(deg1*Math.PI/180); 
	 		y0 = r+rr*Math.sin(deg1*Math.PI/180); 
			x1 = r+rr*Math.cos(deg2*Math.PI/180); 
	 		y1 = r+rr*Math.sin(deg2*Math.PI/180); 
		
			var descriptions = ['M', r, r, 'L', x0,y0, 'A', rr, rr, 0, 0,0, x1, y1, 'z'];
			path.setAttribute('d', descriptions.join(' '));
	}