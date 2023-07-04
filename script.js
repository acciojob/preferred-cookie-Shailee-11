//your JS code here. If required.
// Get the form and its elements
const form = document.querySelector('form');
const fontSizeInput = document.querySelector('#fontsize');
const colorInput = document.querySelector('#color');

// Set the initial values for font size and color
let fontSize = window.localStorage.getItem('fontSize');
let color = window.localStorage.getItem('color');

// If the user has previously stored preferences, update the UI
if (fontSize) {
	document.body.style.fontSize = `${fontSize}px`;
	fontSizeInput.value = fontSize;
}
if (color) {
	document.body.style.color = color;
	colorInput.value = color;
}

// Add a submit event listener to the form
form.addEventListener('submit', e => {
	e.preventDefault();

	// Get the user's selected font
