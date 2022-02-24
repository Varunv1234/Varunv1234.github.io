window.onload = function() {


let button = document.querySelector("#b");
  button.addEventListener('click', addText);

function addText() {
  var textField = document.getElementById("h11");
  var abc = "<h1> 1234 </h1>";
  textField.innerHTML = abc;
}

}

