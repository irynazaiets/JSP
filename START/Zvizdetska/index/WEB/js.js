function showForm(obj)
{
	document.getElementById("reg-form").setAttribute("style", "display:none;");
	document.getElementById("login-form").setAttribute("style", "display:none;");
	//
	var attrBlock = document.createAttribute("style");
	attrBlock.value = "display:block;";
	document.getElementById(obj.getAttribute("href").substring(1)).setAttributeNode(attrBlock);
	//
	//alert(obj.getAttribute("href"));
	//
	return true;
};

function onLogin(){
	var email = document.getElementById("login-email").value;
	var pass = document.getElementById("login-pass").value;
	var user = null;

	var usersArray = null;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	    if(this.readyState == 4 && this.status == 200) {
	        usersArray = JSON.parse(this.responseText);
	    }
	};
	xhr.open("GET", "users.json", false);
	xhr.send();
	if(!usersArray) return false;
	for(i = 0; i < usersArray.length; ++i)
	{
		if(usersArray[i].email == email)
		{
			user = usersArray[i];
			document.body.innerHTML += user.email + "<br/>";
			break;
		}
	}
	if(user == null)
	{
		alert("User not found.");
		return false;
	}
	if(user.password != pass)
	{
		alert("Pass incorect.");
		return false;
	}

	localStorage.setItem("user", JSON.stringify(user));

	window.location = "WEB/user.html";
	return true;
};

function onLoad()
{
	var jsonUser = localStorage.getItem("user");
	var user = JSON.parse(jsonUser);
	if(jsonUser == null) return;
	document.getElementById("username").innerText = user.username;
	document.getElementById("email").innerText = user.email;
	document.getElementById("sex").innerText = user.sex;



};

function play(obj)
{
	var href = obj.getAttribute("href");
	var iframe = document.createElement("iframe");
	iframe.src = href;

	//obj.parent.appendChild(iframe);

	return false;
};
//-------------------------
