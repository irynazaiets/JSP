
/*function loadCarousel()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			var div = document.createElement("div");
			div.innerHTML = xhttp.responseText;
			div.setAttribute("class", "container");
			document.getElementsByTagName("body")[0].appendChild(div);
		}
	};
	xhttp.open("GET", "container.html", true);
	xhttp.send();
};*/

function loadFooter() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			var footer = document.createElement("footer");
			footer.innerHTML = xhttp.responseText;
			footer.setAttribute("class", "page-footer");
			document.getElementsByTagName("body")[0].appendChild(footer);
		}
	};
	xhttp.open("GET", "footer.html", true);
	xhttp.send();
};

function loadIframe(iframe, filename) {
	var iframes = document.getElementById("iframes").children;
	var list = [];
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			list = JSON.parse(xhttp.responseText);
			var number1 = Math.random() * (list.length - 1) + 0;
			number1 = parseInt(number1);
			iframe = document.getElementById(iframe.substring(1))
			iframe.setAttribute("src", list[number1].url);
			//$(iframe).attr('src', list[number1].url);
		}
	};
	xhttp.open("GET", filename, true);
	xhttp.send();
};

function loadContent() {
	//loadHeader();
	//loadCarousel();
	loadFooter();
	loadIframe('#iframe1', 'zoryana.json');
	////loadIframe('#iframe2', 'zoryana.json');
	loadIframe('#iframe2', 'ira.json');

};

function searchMusic()
{
	document.getElementById('field').remove();

	var searchInputNode = document.getElementById('search');
	var searchText = searchInputNode.value;
	var results = [];

	var maincontent = document.getElementById('iframes');
	maincontent.removeAttribute('style');
	var allMusic = [];
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 404) {
			maincontent.innerHTML = '<h1>Not Found ' + filename + '</h1>';
		}
		if (this.readyState == 4 && this.status == 403) {
			maincontent.innerHTML = '<h1>Forbidden ' + filename + '</h1>';
		}
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			allMusic = allMusic.concat(JSON.parse(xhttp.responseText));
		}
	};
	var filename = 'zoryana.json';
	xhttp.open("GET", filename, false);
	xhttp.send();
	var filename = 'ira.json';
	xhttp.open("GET", filename, false);
	xhttp.send();
	
	if(allMusic == null || allMusic.length <= 0)
		return false;
	for(i = 0; i < allMusic.length; ++i)
	{
		if(allMusic[i].name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
		{
			results.push(allMusic[i]);
		}
	}
	if(results.length > 0)
	{
		maincontent.innerHTML = '<h1>' + results.length + ' records found :</h1>';
		for(i = 0; i < results.length; ++i)
		{
			maincontent.innerHTML += '<div><p>' + results[i].name + '</p>'
				+ '<iframe id="iframe' + i + '" src="' + results[i].url + '"></iframe></div>';
		}
	}
	else
	{
		maincontent.innerHTML = '<h1>No records</h1>';
	}
	return false;
};


$(document).ready(function() {
	$('.parallax').parallax();
});

//
function onLogin() {
	var email = document.getElementById("login-email").value;
	var pass = document.getElementById("login-pass").value;
	var user = null;

	var usersArray = null;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			usersArray = JSON.parse(this.responseText);
		}
	};
	xhr.open("GET", "users.json", false);
	xhr.send();
	if (!usersArray) return false;
	for (i = 0; i < usersArray.length; ++i) {
		if (usersArray[i].email == email) {
			user = usersArray[i];
			document.body.innerHTML += user.email + "<br/>";
			break;
		}
	}
	if (user == null) {
		alert("User not found.");
		return false;
	}
	if (user.password != pass) {
		alert("Pass incorect.");
		return false;
	}

	localStorage.setItem("user", JSON.stringify(user));

	window.location = "user.html";
	return true;
};
/* */
