function MyFunction()
{
	// ...
	return false;
};
function searchMusic(formObj)
{
	var fieldsets = formObj.querySelectorAll('fieldset');
	var kinds = [];
	for(i = 0; i < fieldsets[0].children.length; ++i)
	{
		var input = fieldsets[0].children[i].querySelector('input[type="checkbox"]');
		if(!input.checked)
			continue;
		kinds.push(input.name);
	}
	var categories = [];
	for(i = 0; i < fieldsets[1].children.length; ++i)
	{
		var input = fieldsets[1].children[i].querySelector('input[type="checkbox"]');
		if(!input.checked)
			continue;
		categories.push(input.name);
	}
	alert(kinds + '\n' + categories); // work
	
	var maincontent = document.getElementById('maincontent');
	var filename = 'zoryana.json';
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
			allMusic = JSON.parse(xhttp.responseText);
			maincontent.innerHTML = '<h1>Found</h1>';
			for(i = 0; i < allMusic.length; ++i)
			{
				if((kinds === [] || kinds.indexOf(allMusic[i].kind) > -1) &&
					(categories === [] || categories.indexOf(allMusic[i].categorie) > -1))
					maincontent.innerHTML += '<div style="display:block;">' + allMusic[i].name + '<br/>'+ '<iframe src="' + allMusic[i].url + '">'+ '</iframe>'+ '</div>';
			}
	    }
	};
	xhttp.open("GET", filename, true);
	xhttp.send();
	/*
	for(i = 0; i < inputCheckBoxes.length; ++i) {
		inputCheckBoxes[i];
	};
	//*/
	return false;
};
function loadList(checkboxList)
{
	var inputCheckBoxes = checkboxList.querySelectorAll('input[type="checkbox"]');
	var i = 0;
	while(i < inputCheckBoxes.length) {
		inputCheckBoxes[i].addEventListener('change', function()
			{
				var inputInnerCheckBoxes = checkboxList.querySelectorAll('input[type="checkbox"]');
				//alert(this.name + ' changed'); // work
				for(j = 0; j < inputInnerCheckBoxes.length; ++j)
				{
					//if(this === inputInnerCheckBoxes[j]) continue;
					inputInnerCheckBoxes[j].checked = (this === inputInnerCheckBoxes[j]);
				}
			});
		++i;
	};
};

function loadContent()
{
	loadList(document.getElementById('checkboxList'));
	loadList(document.getElementById('checkboxList2'));
	//loadHeader();
	//loadCarousel();
    loadFooter();
	
	loadIframe('#iframe1', 'zoryana.json');
	//loadIframe('#iframe2', 'zoryana.json');
	//loadIframe('#iframe2', 'ira.json');
};
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
function loadFooter()
{
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


function loadIframe(iframe, filename)
{
	var iframes = document.getElementById("iframes").children;
	var list = [];
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			list = JSON.parse( xhttp.responseText);
			var number1 = Math.random() * (list.length - 1) + 0;
			number1 = parseInt(number1);
			$(iframe).attr('src', list[number1].url);
	    }
	};
	xhttp.open("GET", filename, true);
	xhttp.send();
};
