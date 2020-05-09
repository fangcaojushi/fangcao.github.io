

function trim(str)
{  
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
function check_form()
{	
	if(!check_username())
	{
		return false;
	}
	if(!chek_quantity())
	{
		return false;
	}
	if(!check_address())
	{
		return false;
	}

	if(document.getElementById("phone").value =='')
	{
		alert("电话不能为空");
		document.getElementById("phone").focus();
		return false;
	
	}
	else
	{
		
		if(document.getElementById("phone").value !='' )
		{
			if(!check_home_phone())
			{
				return false;
			}
		
		}
	
	}
	return;
}

function check_username(){
	var check = /^\D[a-z0-9\-_\u0391-\uFFE5]{1,19}$/;//中文，小写字母，数字，_，-；且第一位不能是数字
	
	var uname = trim(document.getElementById("yourName").value);
	var flag = check.test(uname);
	if (uname.length>20 || uname.length<2)
	{
		alert("用户名必须是长度2-20位的字符");
		document.getElementById("yourName").focus();
		return false;
	}
	if(!flag)
	{
		alert("用户名必须为汉字或者字母 不得有空格 ");
		document.getElementById("yourName").focus();
		return false;
	}
	
	return true;
}

function chek_quantity()
{
	var quantity = document.getElementById("quantity").value;
	if (quantity.length<=0 || quantity=='')
	{
		alert("请选择订购的数量");
		document.getElementById("quantity").focus();
		return false;
	}
	return true;
}
function check_address(){
	var address = document.getElementById("address").value;
	if (address.length>150 || address.length<2)
	{
		alert("地址必须是长度2-150位的字符");
		document.getElementById("address").focus();
		return false;
	}
	return true;
}

function check_home_phone() 
{
	var home_phone = trim(document.getElementById("phone").value);
	if((home_phone.length <= 0) || (!/[0-9]+$/.test( home_phone )) )
	{
		alert("请输入手机号码！");
  		document.getElementById("phone").focus();
		return false;
	}
	return true;
}
