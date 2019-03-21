var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("list");
var li = document.getElementsByClassName("item");

function inputLength(){
  return input.value.length;
}

function createListElement(){
  var newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(input.value));
  newLi.className = "item";
  var b = newLi.appendChild(document.createElement("button"));
  b.innerHTML = "×";
  // var hr = newLi.appendChild(document.createElement("hr"));
  ul.appendChild(newLi);
  input.value = "";
}

function addItemAfterClick(){
  if(inputLength()>0){
    createListElement();
  }
}

function addItemAfterKeyPress(event){
  if(inputLength()>0 && event.which === 13){
    createListElement();
  }
}

ul.addEventListener("click", function(e){
  if(e.target && e.target.nodeName == "LI"){
    e.target.classList.toggle("done");
  } else if(e.target && e.target.nodeName == "BUTTON"){
    e.target.parentNode.remove();
  }
});


button.addEventListener("click", addItemAfterClick);

input.addEventListener("keypress", addItemAfterKeyPress);
