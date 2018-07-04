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
			document.body.innerHTML += '';
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

	window.location.href = "../WEB/user.html";
	return true;
};


function onRegister(){
	var str = document.getElementById('regemail').value;
	var patt = new RegExp('^(https?\:\/\/)?([\da-z\.\-]+)\@[a-z]+\.([a-z\.]{2,6})$');
	var res = patt.test(str);
	
	var password1=document.getElementById("regpass");
	var password2 = document.getElementById("confirmpass");
	if(password1.value !== password2.value){
		alert("Невірно введено пароль");
		return false
	}
	var user = {};
	if(res == true){
		user.username = document.getElementById("username").value;
		user.email = document.getElementById("regemail").value;
		if(document.getElementById("Male").checked)
		{
			user.sex = 'male';
		}
		if(document.getElementById("Female").checked)
		{
			user.sex = 'female';
		}
		user.password = document.getElementById("regpass").value;

		localStorage.setItem("user", JSON.stringify(user));
		document.body.innerHTML += '';

		window.location.href = "../WEB/user.html";
		return true;
	}
	else{
		alert("Введені дані не коректні");
	}
	return false;
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