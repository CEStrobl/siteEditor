let cl = console.log;

let titleimg = document.getElementById("titleimg");
let titleA = document.getElementById("titleA");
let titleB = document.getElementById("titleB");

let body1img = document.getElementById("body1img");
let body1a = document.getElementById("body1a");
let body1b = document.getElementById("body1b");

let body2img = document.getElementById("body2img");
let body2a = document.getElementById("body2a");
let body2b = document.getElementById("body2b");

let body3img = document.getElementById("body3img");
let body3a = document.getElementById("body3a");
let body3b = document.getElementById("body3b");

let footerimg = document.getElementById("footerimg");
let footerA = document.getElementById("footerA");
let footerB = document.getElementById("footerB");

let title = [titleA, titleB];
let titleActive = [true, false];

let body1 = [body1a, body1b];
let body1Active = [true, false];

let body2 = [body2a, body2b];
let body2Active = [true, false];

let body3 = [body3a, body3b];
let body3Active = [true, false];

let footer = [titleA, titleB];
let footerActive = [true, false];

cl(title[0])

function toggleSel(optionCategory) {
	// given the option category, that will correspond to an array with
	// the two options. which ever one is active, make it inactive.
	// and whichever is active, disable it.

	let ops = [];
	let active = [];

	// get the arrays

	switch (optionCategory) {
		case "title":
			ops = title;
			active = titleActive;
			break;
		case "body1":
			ops = body1;
			active = body1Active;
			break;
		case "body2":
			ops = body2;
			active = body2Active;
			break;
		case "body3":
			ops = body3;
			active = body3Active;
			break;
		case "footer":
			ops = footer;
			active = footerActive;
			break;	
		default:
			console.log("Error: Option Category not found in toggleSel()");
			break;
	}

	console.log (ops, active)
	// get the two properties

	let curActive;
	let curInactive;

	let newActive = [];

	if (active[0] == true) {
		curActive = ops[0];
		curInactive = ops[1];

		curActive.className = "button green";
		curInactive.className = "button blueActive";

		newActive = [false, true];

	} else {
		curInactive = ops[0];
		curActive = ops[1];

		curInactive.className = "button blue";
		curActive.className = "button greenActive";

		newActive = [true, false];
	}


	// set active array back 
	
	switch (optionCategory) {
		case "title":
			titleActive = newActive;
			break;
		case "body1":
			body1Active = newActive;
			break;
		case "body2":
			body2Active = newActive;
			break;
		case "body3":
			body3Active = newActive;
			break;
		case "footer":
			footerActive = newActive;
			break;	
		default:
			console.log("Error: Option Category not found in toggleSel()");
			break;
	}



}

function activeImg() {
	// based on the selections, change the images
}
