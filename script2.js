let cl = console.log;


function updateImg(id, img) {

	var target = document.getElementById(id);

	target.src = "img/" + img + ".png";
}

let op1 = document.getElementById("op1")
let op2 = document.getElementById("op2")
let op3 = document.getElementById("op3")
let op4 = document.getElementById("op4")
let op5 = document.getElementById("op5")

function hideOptions() {
	op1.style.display = "none";
	op2.style.display = "none";
	op3.style.display = "none";
	op4.style.display = "none";
	op5.style.display = "none";
}

function showOptions() {
	op1.style.display = "block";
	op2.style.display = "block";
	op3.style.display = "block";
	op4.style.display = "block";
	op5.style.display = "block";
}