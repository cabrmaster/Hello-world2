function test()
{
	window.alert("hello");
}

function Person()
{
	this.Move = function(dir)
	{
		var P1 = document.getElementById("img111");
		P1.style.backgroundColor = "blue";
		var StrLeft = P1.style.left;
		StrLeft = StrLeft.substr(0,StrLeft.length-2);
		var nLeft = parseInt(StrLeft);
		var StrTop = P1.style.top;
		StrTop = StrTop.substr(0,StrTop.length-2);
		var nTop = parseInt(StrTop);

		var StrWidth = P1.style.width;
		StrWidth = StrWidth.substr(0,StrWidth.length-2);
		var nWidth = parseInt(StrWidth);
		var StrHeight = P1.style.height;
		StrHeight = StrHeight.substr(0,StrHeight.length-2);
		var nHeight = parseInt(StrHeight);
		switch(dir)
		{
			case 0:
				P1.style.top = (nTop-nHeight>=0?nTop-nHeight:nTop)+"px";
				break;
			case 1:
				P1.style.left = (nLeft+nWidth<1000?nLeft+nWidth:nLeft)+"px";
				break;
			case 2:
				P1.style.top = (nTop+nHeight<600?nTop+nHeight:nTop)+"px";
				break;
			case 3:
				P1.style.left = (nLeft-nWidth>=0?nLeft-nWidth:nLeft)+"px";
				break;
		}
	}
}

function ShowMemberAndMethod(e)
{
	var StrOut;
	for(var key in e)
	{
		StrOut = StrOut+key+"="+e[key]+"\r\n";
	}
	window.alert(StrOut);
}