var menu;
var a;
var menuItem;
var body;

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    menu.style.left = getXY(event)[0] + 'px';
    menu.style.top = getXY(event)[1] + 'px';
    menu.style.display = 'inline';
    return false;
}, false);

document.addEventListener('click', function() {
	if(menu.style.display != 'none'){
		menu.style.display = 'none';
	}
	return false;
}, false)

window.onload = function() {

	document.write

	//body style
	body = document.body;
	body.style.margin = '0';
	body.style.padding = '0';

	//menu style
	menu = document.getElementById('menu');
	menu.style.color = "white";
	menu.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
	menu.style.paddingBottom = "20px";
	menu.style.position = "absolute";
	menu.style.width = '16%';
	menu.style.paddingTop = '20px';
	menu.style.display = 'none';

	//a tag style
	a = document.getElementsByTagName('a');
	for (i = 0, len = a.length; i < len; i++) {
		a[i].style.color = "inherit";
		a[i].style.textDecoration = "none";
	}
	//menu item style
	menuItem = document.getElementsByClassName('menuItem');
	for (i = 0, len = menuItem.length; i < len; i++) {
		menuItem[i].style.width = "89%";
		menuItem[i].style.paddingTop = '5px';
		menuItem[i].style.paddingBottom = '5px';
		menuItem[i].style.paddingLeft = '10%';
	}
}

function onMouseOver(pos) {
	pos--;
	menuItem[pos].style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
}
function onMouseOff(pos) {
	pos--;
	menuItem[pos].style.backgroundColor = 'transparent';
}
function getXY(event){
	var x = event.clientX;
	var y = event.clientY;
	return [x, y];
}