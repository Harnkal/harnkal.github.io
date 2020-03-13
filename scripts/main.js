let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/image2.webp') {
		myImage.setAttribute('src', 'images/image.jfif');
	} else {
		myImage.setAttribute('src', 'images/image2.webp');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(text = 'Please enter your name.') {
	let myName = prompt(text);
	if(myName === null) {
		myName = localStorage.getItem('name');
	}
	if(!myName) {
		setUserName(text = 'Please enter your name.\nYou must provide a value');
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'AI is cool, ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'AI is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}