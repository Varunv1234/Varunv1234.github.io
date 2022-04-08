window.onload = function() {


var clickNumber = 2;
var todayDate = new Date();

var countNumber = 7



//console.log(inputObj);
//console.log(inputObj.date);
//console.log(inputObj.priority);
//console.log(inputObj.rank);


// event listeners for all buttons

var enter = document.getElementById("enter");
 enter.addEventListener("click", createItem);

var clear1 = document.getElementById("clear1");
 clear1.addEventListener("click", clear11);

var clear2 = document.getElementById("clear2");
 clear2.addEventListener("click", clear12);

 var clear3 = document.getElementById("clear3");
 clear3.addEventListener("click", clear13);

 var clear4 = document.getElementById("clear4");
 clear4.addEventListener("click", clear14);

var clear5 = document.getElementById("clear5");
 clear5.addEventListener("click", clear15);

var clear6= document.getElementById("clear6");
 clear6.addEventListener("click", clear16);


// function that creates text on to-do list

function createItem() {

//creates object out of inputs
var inputObj = new Object();
inputObj.item = document.getElementById('item').value;
inputObj.date = document.getElementById('date').value;
inputObj.priority = document.getElementById('priority').value;
inputObj.priorityInt = parseInt(inputObj.priority);
inputObj.dateInt = parseInt(inputObj.date);
inputObj.todayDate = todayDate.getDate();;
inputObj.todaydateInt = parseInt(inputObj.todayDate);
inputObj.clickNumber = clickNumber;
inputObj.rank = inputObj.priorityInt/(inputObj.dateInt - inputObj.todaydateInt) * 1/3;


//accounts for already-existing text (currently redundant)
var sevenObj = new Object();
sevenObj.item = document.getElementById('op71').value;
sevenObj.date = document.getElementById('op72').value;
sevenObj.priority = document.getElementById('op73').value;
sevenObj.priorityInt = parseInt(sevenObj.priority);
sevenObj.dateInt = parseInt(sevenObj.date);
sevenObj.todayDate = todayDate.getDate();;
sevenObj.todaydateInt = parseInt(sevenObj.todayDate);
sevenObj.clickNumber = clickNumber;
sevenObj.rank = sevenObj.priorityInt/(sevenObj.dateInt - sevenObj.todaydateInt) * 1/3;

var sixObj = new Object();
sixObj.item = document.getElementById('op61').value;
sixObj.date = document.getElementById('op62').value;
sixObj.priority = document.getElementById('op63').value;
sixObj.priorityInt = parseInt(sixObj.priority);
sixObj.dateInt = parseInt(sixObj.date);
sixObj.todayDate = todayDate.getDate();;
sixObj.todaydateInt = parseInt(sixObj.todayDate);
sixObj.clickNumber = clickNumber;
sixObj.rank = sixObj.priorityInt/(sixObj.dateInt - sixObj.todaydateInt) * 1/3;

var fiveObj = new Object();
fiveObj.item = document.getElementById('op51').value;
fiveObj.date = document.getElementById('op52').value;
fiveObj.priority = document.getElementById('op53').value;
fiveObj.priorityInt = parseInt(fiveObj.priority);
fiveObj.dateInt = parseInt(fiveObj.date);
fiveObj.todayDate = todayDate.getDate();;
fiveObj.todaydateInt = parseInt(fiveObj.todayDate);
fiveObj.clickNumber = clickNumber;
fiveObj.rank = fiveObj.priorityInt/(fiveObj.dateInt - fiveObj.todaydateInt) * 1/3;


var fourObj = new Object();
fourObj.item = document.getElementById('op41').value;
fourObj.date = document.getElementById('op42').value;
fourObj.priority = document.getElementById('op43').value;
fourObj.priorityInt = parseInt(fourObj.priority);
fourObj.dateInt = parseInt(fourObj.date);
fourObj.todayDate = todayDate.getDate();;
fourObj.todaydateInt = parseInt(fourObj.todayDate);
fourObj.clickNumber = clickNumber;
fourObj.rank = fourObj.priorityInt/(fourObj.dateInt - fourObj.todaydateInt) * 1/3;


var threeObj = new Object();
threeObj.item = document.getElementById('op31').value;
threeObj.date = document.getElementById('op32').value;
threeObj.priority = document.getElementById('op33').value;
threeObj.priorityInt = parseInt(threeObj.priority);
threeObj.dateInt = parseInt(threeObj.date);
threeObj.todayDate = todayDate.getDate();;
threeObj.todaydateInt = parseInt(threeObj.todayDate);
threeObj.clickNumber = clickNumber;
threeObj.rank = threeObj.priorityInt/(threeObj.dateInt - threeObj.todaydateInt) * 1/3;

var twoObj = new Object();
twoObj.item = document.getElementById('op21').value;
twoObj.date = document.getElementById('op22').value;
twoObj.priority = document.getElementById('op23').value;
twoObj.priorityInt = parseInt(twoObj.priority);
twoObj.dateInt = parseInt(twoObj.date);
twoObj.todayDate = todayDate.getDate();;
twoObj.todaydateInt = parseInt(twoObj.todayDate);
twoObj.clickNumber = clickNumber;
twoObj.rank = twoObj.priorityInt/(twoObj.dateInt - twoObj.todaydateInt) * 1/3;


//places text on calendar
const dateOp = (inputObj.dateInt) + 5;
console.log(inputObj.dateInt);
console.log(dateOp);
var textField = document.getElementById("c" + dateOp);
  textField.innerHTML = '<h4>' + " " + inputObj.item + " " + inputObj.priority + ' </h4>';

//places text on list, if statements for ranking which doesn't work
var placeNumber = clickNumber
 if (twoObj.rank >= inputObj.rank || twoObj.rank == NaN) {
	return placeNumber = placeNumber + 1;
} else {
	var textField = document.getElementById("op" + placeNumber + "1");
  textField.innerHTML = '<h4>' + inputObj.item + '</h4>';
  var textField2 = document.getElementById("op" + placeNumber + "2");
  textField2.innerHTML = '<h4>' + inputObj.date + '</h4>';
  var textField3 = document.getElementById("op" + placeNumber + "3");
  textField3.innerHTML = '<h4>' + inputObj.priority + '</h4>';
}
 if (threeObj.rank >= inputObj.rank || threeObj.rank == NaN) {
	return placeNumber = placeNumber + 1;
} else {
	var textField = document.getElementById("op" + placeNumber + "1");
  textField.innerHTML = '<h4>' + inputObj.item + '</h4>';
  var textField2 = document.getElementById("op" + placeNumber + "2");
  textField2.innerHTML = '<h4>' + inputObj.date + '</h4>';
  var textField3 = document.getElementById("op" + placeNumber + "3");
  textField3.innerHTML = '<h4>' + inputObj.priority + '</h4>';
}
 if (fourObj.rank >= inputObj.rank || fourObj.rank == NaN) {
	return placeNumber = placeNumber + 1;
} else {
	var textField = document.getElementById("op" + placeNumber + "1");
  textField.innerHTML = '<h4>' + inputObj.item + '</h4>';
  var textField2 = document.getElementById("op" + placeNumber + "2");
  textField2.innerHTML = '<h4>' + inputObj.date + '</h4>';
  var textField3 = document.getElementById("op" + placeNumber + "3");
  textField3.innerHTML = '<h4>' + inputObj.priority + '</h4>';
}
 if (fiveObj.rank >= inputObj.rank || fiveObj.rank == NaN) {
	return placeNumber = placeNumber + 1;
} else {
	var textField = document.getElementById("op" + placeNumber + "1");
  textField.innerHTML = '<h4>' + inputObj.item + '</h4>';
  var textField2 = document.getElementById("op" + placeNumber + "2");
  textField2.innerHTML = '<h4>' + inputObj.date + '</h4>';
  var textField3 = document.getElementById("op" + placeNumber + "3");
  textField3.innerHTML = '<h4>' + inputObj.priority + '</h4>';
}
 if (sixObj.rank >= inputObj.rank || sixObj.rank == NaN) {
	return placeNumber = placeNumber + 1;
} else {
	var textField = document.getElementById("op" + placeNumber + "1");
  textField.innerHTML = '<h4>' + inputObj.item + '</h4>';
  var textField2 = document.getElementById("op" + placeNumber + "2");
  textField2.innerHTML = '<h4>' + inputObj.date + '</h4>';
  var textField3 = document.getElementById("op" + placeNumber + "3");
  textField3.innerHTML = '<h4>' + inputObj.priority + '</h4>';
}
if (sevenObj.rank >= inputObj.rank || sevenObj.rank == NaN) {
	return placeNumber = placeNumber + 1;
} else {
	var textField = document.getElementById("op" + placeNumber + "1");
  textField.innerHTML = '<h4>' + inputObj.item + '</h4>';
  var textField2 = document.getElementById("op" + placeNumber + "2");
  textField2.innerHTML = '<h4>' + inputObj.date + '</h4>';
  var textField3 = document.getElementById("op" + placeNumber + "3");
  textField3.innerHTML = '<h4>' + inputObj.priority + '</h4>';
}


//changes backround color based on priority
if (inputObj.priorityInt == 1) {
	document.getElementById("op" + placeNumber + "1").style.backgroundColor = "rgb(235, 226, 160)";
	document.getElementById("op" + placeNumber + "2").style.backgroundColor = "rgb(235, 226, 160)";
	document.getElementById("op" + placeNumber + "3").style.backgroundColor = "rgb(235, 226, 160)";
	document.getElementById("c" + dateOp).style.backgroundColor = "rgb(235, 226, 160)";

}
if (inputObj.priorityInt == 2) {
	document.getElementById("op" + placeNumber + "1").style.backgroundColor = "rgb(242, 164, 119)";
	document.getElementById("op" + placeNumber + "2").style.backgroundColor = "rgb(242, 164, 119)";
	document.getElementById("op" + placeNumber + "3").style.backgroundColor = "rgb(242, 164, 119)";
	document.getElementById("c" + dateOp).style.backgroundColor = "rgb(242, 164, 119)";
}
if (inputObj.priorityInt == 3) {
	document.getElementById("op" + placeNumber + "1").style.backgroundColor = "rgb(222, 109, 78)";
	document.getElementById("op" + placeNumber + "2").style.backgroundColor = "rgb(222, 109, 78)";
	document.getElementById("op" + placeNumber + "3").style.backgroundColor = "rgb(222, 109, 78)";
	document.getElementById("c" + dateOp).style.backgroundColor = "rgb(222, 109, 78)";
}
if (inputObj.priorityInt == 4) {
	document.getElementById("op" + placeNumber + "1").style.backgroundColor = "rgb(189, 90, 25)";
	document.getElementById("op" + placeNumber + "2").style.backgroundColor = "rgb(189, 90, 25)";
	document.getElementById("op" + placeNumber + "3").style.backgroundColor = "rgb(189, 90, 25)";
	document.getElementById("c" + dateOp).style.backgroundColor = "rgb(189, 90, 25)";
}
if (inputObj.priorityInt == 5) {
	document.getElementById("op" + placeNumber + "1").style.backgroundColor = "rgb(255, 0, 0)";
	document.getElementById("op" + placeNumber + "2").style.backgroundColor = "rgb(255, 0, 0)";
	document.getElementById("op" + placeNumber + "3").style.backgroundColor = "rgb(255, 0, 0)";
	document.getElementById("c" + dateOp).style.backgroundColor = "rgb(255, 0, 0)";
}

//clickNumber accounts for amount of times this function is ran and determines the order of tasks on the list
 return clickNumber = clickNumber + 1;




}

//clears individual tasks
function clear11() {
// replaces text with blank
	var textField = document.getElementById("op21");
  textField.innerHTML = '<h4> </h4>';
  var textField2 = document.getElementById("op22");
  textField2.innerHTML = '<h4> </h4>';
  var textField3 = document.getElementById("op23");
  textField3.innerHTML = '<h4> </h4>';
//  changes backgroundColor to normal
 	document.getElementById("op21").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op22").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op23").style.backgroundColor = "rgba(245, 245, 245, 0.8)";

 	// clickNumber allowsx
 return clickNumber = 2;

}

function clear12() {
		var textField = document.getElementById("op31");
  textField.innerHTML = '<h4> </h4>';
  var textField2 = document.getElementById("op32");
  textField2.innerHTML = '<h4> </h4>';
  var textField3 = document.getElementById("op33");
  textField3.innerHTML = '<h4> </h4>';

  document.getElementById("op31").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op32").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op33").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	 return clickNumber = 3;

}

function clear13() {
var textField = document.getElementById("op41");
  textField.innerHTML = '<h4> </h4>';
  var textField2 = document.getElementById("op42");
  textField2.innerHTML = '<h4> </h4>';
  var textField3 = document.getElementById("op43");
  textField3.innerHTML = '<h4> </h4>';
  document.getElementById("op41").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op42").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op43").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	 return clickNumber = 4;

}

function clear14() {
	var textField = document.getElementById("op51");
  textField.innerHTML = '<h4> </h4>';
  var textField2 = document.getElementById("op52");
  textField2.innerHTML = '<h4> </h4>';
  var textField3 = document.getElementById("op53");
  textField3.innerHTML = '<h4> </h4>';
  document.getElementById("op51").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op52").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op53").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	 return clickNumber = 5;

}

function clear15() {
	var textField = document.getElementById("op61");
  textField.innerHTML = '<h4> </h4>';
  var textField2 = document.getElementById("op62");
  textField2.innerHTML = '<h4> </h4>';
  var textField3 = document.getElementById("op63");
  textField3.innerHTML = '<h4> </h4>';
  document.getElementById("op61").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op62").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op63").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	 return clickNumber = 6;

}

function clear16() {
	var textField = document.getElementById("op71");
  textField.innerHTML = '<h4> </h4>';
  var textField2 = document.getElementById("op72");
  textField2.innerHTML = '<h4> </h4>';
  var textField3 = document.getElementById("op73");
  textField3.innerHTML = '<h4> </h4>';
  document.getElementById("op71").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op72").style.backgroundColor = "rgba(245, 245, 245, 0.8)";
 	document.getElementById("op73").style.backgroundColor = "rgba(245, 245, 245, 0.8)"; 
 	return clickNumber = 7;

}

/*
function up11() {

clear11();

	var sevenObj = new Object();
sevenObj.item = document.getElementById('op71').value;
sevenObj.date = document.getElementById('op72').value;
sevenObj.priority = document.getElementById('op73').value;


var sixObj = new Object();
sixObj.item = document.getElementById('op61').value;
sixObj.date = document.getElementById('op62').value;
sixObj.priority = document.getElementById('op63').value;
sixObj.priorityInt = parseInt(sixObj.priority);
sixObj.dateInt = parseInt(sixObj.date);
sixObj.todayDate = todayDate.getDate();;
sixObj.todaydateInt = parseInt(sixObj.todayDate);
sixObj.clickNumber = clickNumber;
sixObj.rank = sixObj.priorityInt/(sixObj.dateInt - sixObj.todaydateInt) * 1/3;

var fiveObj = new Object();
fiveObj.item = document.getElementById('op51').value;
fiveObj.date = document.getElementById('op52').value;
fiveObj.priority = document.getElementById('op53').value;
fiveObj.priorityInt = parseInt(fiveObj.priority);
fiveObj.dateInt = parseInt(fiveObj.date);
fiveObj.todayDate = todayDate.getDate();;
fiveObj.todaydateInt = parseInt(fiveObj.todayDate);
fiveObj.clickNumber = clickNumber;
fiveObj.rank = fiveObj.priorityInt/(fiveObj.dateInt - fiveObj.todaydateInt) * 1/3;


var fourObj = new Object();
fourObj.item = document.getElementById('op41').value;
fourObj.date = document.getElementById('op42').value;
fourObj.priority = document.getElementById('op43').value;
fourObj.priorityInt = parseInt(fourObj.priority);
fourObj.dateInt = parseInt(fourObj.date);
fourObj.todayDate = todayDate.getDate();;
fourObj.todaydateInt = parseInt(fourObj.todayDate);
fourObj.clickNumber = clickNumber;
fourObj.rank = fourObj.priorityInt/(fourObj.dateInt - fourObj.todaydateInt) * 1/3;


var threeObj = new Object();
threeObj.item = document.getElementById('op31').value;
threeObj.date = document.getElementById('op32').value;
threeObj.priority = document.getElementById('op33').value;
threeObj.priorityInt = parseInt(threeObj.priority);
threeObj.dateInt = parseInt(threeObj.date);
threeObj.todayDate = todayDate.getDate();;
threeObj.todaydateInt = parseInt(threeObj.todayDate);
threeObj.clickNumber = clickNumber;
threeObj.rank = threeObj.priorityInt/(threeObj.dateInt - threeObj.todaydateInt) * 1/3;

var twoObj = new Object();
twoObj.item = document.getElementById('op21').value;
twoObj.date = document.getElementById('op22').value;
twoObj.priority = document.getElementById('op23').value;
twoObj.priorityInt = parseInt(twoObj.priority);
twoObj.dateInt = parseInt(twoObj.date);
twoObj.todayDate = todayDate.getDate();;
twoObj.todaydateInt = parseInt(twoObj.todayDate);
twoObj.clickNumber = clickNumber;
twoObj.rank = twoObj.priorityInt/(twoObj.dateInt - twoObj.todaydateInt) * 1/3;

console.log(sevenObj);
console.log(twoObj);
	var textField = document.getElementById("op21");
  textField.innerHTML = '<h4>' + threeObj.item + '</h4>';
  var textField2 = document.getElementById("op22");
  textField2.innerHTML = '<h4>' + threeObj.date + '</h4>';
  var textField3 = document.getElementById("op23");
  textField3.innerHTML = '<h4>' + threeObj.priority + '</h4>';

  	var textField = document.getElementById("op31");
  textField.innerHTML = '<h4>' + fourObj.item + '</h4>';
  var textField2 = document.getElementById("op32");
  textField2.innerHTML = '<h4>' + fourObj.date + '</h4>';
  var textField3 = document.getElementById("op33");
  textField3.innerHTML = '<h4>' + fourObj.priority + '</h4>';

    	var textField = document.getElementById("op51");
  textField.innerHTML = '<h4>' + sixObj.item + '</h4>';
  var textField2 = document.getElementById("op52");
  textField2.innerHTML = '<h4>' + sixObj.date + '</h4>';
  var textField3 = document.getElementById("op53");
  textField3.innerHTML = '<h4>' + sixObj.priority + '</h4>';

  var textField = document.getElementById("op61");
  textField.innerHTML = '<h4>' + sevenObj.item + '</h4>';
  var textField2 = document.getElementById("op62");
  textField2.innerHTML = '<h4>' + sevenObj.date + '</h4>';
  var textField3 = document.getElementById("op63");
  textField3.innerHTML = '<h4>' + sevenObj.priority + '</h4>';


}
*/
}

