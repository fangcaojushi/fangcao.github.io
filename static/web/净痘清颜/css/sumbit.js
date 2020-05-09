

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
		alert("�绰����Ϊ��");
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
	var check = /^\D[a-z0-9\-_\u0391-\uFFE5]{1,19}$/;//���ģ�Сд��ĸ�����֣�_��-���ҵ�һλ����������
	
	var uname = trim(document.getElementById("yourName").value);
	var flag = check.test(uname);
	if (uname.length>20 || uname.length<2)
	{
		alert("�û��������ǳ���2-20λ���ַ�");
		document.getElementById("yourName").focus();
		return false;
	}
	if(!flag)
	{
		alert("�û�������Ϊ���ֻ�����ĸ �����пո� ");
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
		alert("��ѡ�񶩹�������");
		document.getElementById("quantity").focus();
		return false;
	}
	return true;
}
function check_address(){
	var address = document.getElementById("address").value;
	if (address.length>150 || address.length<2)
	{
		alert("��ַ�����ǳ���2-150λ���ַ�");
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
		alert("�������ֻ����룡");
  		document.getElementById("phone").focus();
		return false;
	}
	return true;
}
