function showForm(obj)
{
	document.getElementById("reg-form").setAttribute("style", "display:none;");
	document.getElementById("login-form").setAttribute("style", "display:none;");
	document.location.href = 'content/electro1.html';	
	//
	var attrBlock = document.createAttribute("style");
	attrBlock.value = "display:block;";
	document.getElementById(obj.getAttribute("href").substring(1)).setAttributeNode(attrBlock);
	//
	//alert(obj.getAttribute("href"));
	//
	return true;
};



function CheckPassword(inputtxt)  
{  
document.location.href = 'content/electro1.html';
}
