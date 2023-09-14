'use strict';

const inputText = document.querySelector(".input-field input");
const inputBtn = document.querySelector(".input-field button");
const listToDo = document.querySelector("ul");

// Save task
const saveData = function() {
  localStorage.setItem('data', listToDo.innerHTML)
}
const showTask = function(){
  listToDo.innerHTML = localStorage.getItem("data");
}

//add Work
const addWork = function () {
  if(!inputText.value) alert("You must write something!!!");
  else {
    const yourWork = document.createElement("li");
    yourWork.innerHTML = inputText.value;
    listToDo.appendChild(yourWork);
    const span = document.createElement('span');
    span.innerHTML = "\u00d7";
    yourWork.appendChild(span);
    saveData();
  }
  inputText.value = '';
}
document.addEventListener('keydown', function(e){
  if(e.key === 'Enter') addWork();
});
listToDo.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveData();
  }
  else if(e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
})
showTask();