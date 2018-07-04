
function getJSONObject(file_url)
{
	var myObj = null;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myObj = JSON.parse(this.responseText);
		}
	};
	xhttp.open("GET", file_url, false);
	xhttp.send();
	return myObj;
};
