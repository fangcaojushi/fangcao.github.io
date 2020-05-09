
/*增加礼品*/ 
 function show(id,chk){
	 var ele=document.getElementById(id);
	/*alert(chk);*/
	 if(chk=="show")
	 	ele.style.display='block';
	 else
	 	ele.style.display='none';
	 
	 }
/*积分对换*/	 
function show_user(name,state){
	 var ele0=document.getElementById(name);
	 var  ele1=document.getElementById(name+'_def');	
	/*alert(chk);*/
	 if(state=="0")
	 	{
		ele0.style.display='block';
		ele1.style.display='none';
		}
	 if(state=="1")
		 {		
	 	ele0.style.display='none';
		ele1.style.display='block';
		}
	 }
