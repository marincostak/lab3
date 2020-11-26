var container = document.getElementById('container');
var stick = document.getElementById('sick');

let menuOpen = false;
container.onclick = function() 
{
	if (!menuOpen){
	stick.classList.add('open');
	menuOpen = true;
	 }
	 else {
	 stick.classList.remove('open');
	 menuOpen = false;
	 }
}