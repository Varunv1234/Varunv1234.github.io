/*
var student = "Varun";
var age = 13;
var isEnrolled = false;
var testscore1 = 105;
var testscore2 = 100;
var avgscore = (testscore1 + testscore2)/2;
console.log("Test Average: " + avgscore);
console.log("student:" + student)
var roster = ["Bowen", "Ariel", "Noah K", "Diego"];
student = roster[0]
console.log("Student: " + student)
roster.push("Varun");
console.log(roster);
roster[5]= "Addie";
*/


/*
var dayofweek = prompt("What is today?");
var weekab = prompt("What Week Is It");
if (dayofweek == "Monday" || dayofweek == "Wednesday") {
	alert("Go to design");
	
} 
else if(dayofweek == "Tuesday" || dayofweek == "Friday") {
	alert("Go to Lakeshore");
}
else if (dayofweek == "Thursday"){
	alert("Go to Programming");
}

else {
	alert("Go Home")
}

*/

/*
var giftcard = 100;
while (giftcard >= 0) {
	console.log("You have a balance of: $" + giftcard);
	giftcard = giftcard - 10;
	if (giftcard == 50) {
		console.log("$50 left")
	}
}
console.log("you are broke");


for (var giftcard = 0; giftcard <= 100; giftcard++) {
	console.log("You have a balance of: $" + giftcard);
	if (giftcard == 50) {
		console.log("You Have Money")
	}
	}
*/

/*
function addTwoNumbers(x,y) {
	if (x==0){
		return("try again")
	}
	else  {
	return x+y;
}
}

var answer = addTwoNumbers(2,4);
console.log(answer)

var answer2 = addTwoNumbers(90,100);
console.log(answer2)

var num1 = prompt("number1") 
var num2 = prompt("number2") 

var answer3 = addTwoNumbers(num1,num2);
alert(answer3)
*/

/*
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good Evening!';

} else if (hourNow > 12) {
	greeting = 'Good afternoon';
}else if (hourNow > 0) {
	greeting = 'Good morning';
} else {
	greeting = 'welcome';
}

document.write('<h1>' + hourNow + ", " + greeting + '</h1>');3

var modelS = {
	make: "Tesla",
	model: "ModelS",
	cost: 70000,
	preowned: false,
	miles: 0,
	finalCost: function(discount) {
		this.cost = this.cost - (this.cost * (discount/100))
		return this.cost;
	}
}

var updatedMiles = modelS.miles + 1000;



var house1 = {
	country: "U.S.",
	zipCode: 60601,
	yearBuilt: 2022,
	squareFeat: 10000,
	demand: 5,
	price: 10000000,
	markup: function() {
		var markup = 1 + (this.demand/100);
		return markup;

	},
	finalprice: function(markup) {
		finalprice2 = this.price * markup;
		return finalprice2;
	}

};

console.log(house1.markup());
console.log(house1.zipCode);

var markup = house1.markup();
console.log(house1.finalprice(markup));
*/

window.onload = function() {
	//var greeting
	//var element = dcument.getElementById("intro");

	var button = document.querySelector("button");
	button.addEventListener("click", addText);

	//document.write('<h1>' + greeting + '</h1>');
	//element.insertAdjacentHTML("afterbegin", "<h1>" + greeting + "</h1>");

	function addText() {
		var textField = document.getElementById("textfield");
		var msg = "<h1> This text was added! </h1>";
		textField.innerHTML = msg;
	}
}


window.addEventListener("keydown", event => {
    if (event.key == " ") {
      location.replace("bio.html")
    }
  });
