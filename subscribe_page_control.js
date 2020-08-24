var id = ""; //user_id
window.onload = getData;

function mySubscribe()
{
	var data = {"id" : id};
	
	$.ajax({
		async: false,   
		url:"subscribe.php",
		type:"post",
		data : data,
		dataType:"json",
		cache:false, 
		success:function(response){ 
		if (response.server_response.flag == 1)
		{
			alert("Subscribe Success!");
			window.location.href = "http://localhost/web_hw/subscribe_web.html";
		}
		else
		{
			alert("Subscribe Failed.");
		}
		},
		error:function(err){
			alert("Ajax failure.");
		}
	});
};

function getData()
{
	id=getCookie("id");
	
	var data = {"id" : id};
	
	$.ajax({
		async: false,   
		url:"subscribe_page.php",
		type:"post",
		data : data,
		dataType:"json",
		cache:false, 
		success:function(response){ 
		if (response.server_response.flag == 1)
		{
			if (response.server_response.subscribe == 1)
			{
				document.getElementById("yt_video").style.display="";
			}
			else if (response.server_response.subscribe == 0)
			{
				document.getElementById("btn_sub").style.display="";
			}
			
		}
		else
		{
			alert("Error: No such id.");
		}
		},
		error:function(err){
			alert("Ajax failure.");
		}
	});
};

function getCookie(cname)
{
    var ss = document.cookie; 
	console.log(ss);          //id=xx
    var name = cname + "=";   //id=
    var ca = document.cookie.split(';');
	console.log(ca); //ca[0]存id=xx
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
		console.log(c);   //id=xx
        if (c.indexOf(name)==0){
		return c.substring(name.length,c.length);} //索引位置從 0 開始，頭取尾不取
    }
        return "";
};