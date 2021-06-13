//Activity
//Create a program to fetch the API URL provided above.
//Make an AJAX request to the Giphy API and return an Object.

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr.send();

xhr.onload = function(){
	//para que me devuelva un object.
	console.log(JSON.parse(xhr.response));
}


















