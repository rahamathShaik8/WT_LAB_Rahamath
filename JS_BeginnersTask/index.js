function changeText(){
document.getElementById("hello").innerText = "JavaScript Changed This";
}

function addText(){
document.getElementById("para").innerText += " Added Text";
}

function removeText(){
document.getElementById("para").innerText = "";
}

function changeStyle(){
let x = document.getElementById("title");
x.style.color = "blue";
x.style.backgroundColor = "lightgray";
}

let flag = false;
function toggleStyle(){
let b = document.getElementById("button5");

if(flag == false){
b.style.color = "white";
b.style.backgroundColor = "black";
flag = true;
}
else{
b.style.color = "black";
b.style.backgroundColor = "lightblue";
flag = false;
}
}

function changingStyle(){
document.getElementById("title").style.fontSize = "40px";
}

let t = true;
function togglingStyle(){
let a = document.getElementById("title");

if(t){
a.style.fontSize = "20px";
t = false;
}
else{
a.style.fontSize = "35px";
t = true;
}
}

function buttonClicked(){
document.getElementById("text").innerText = "Button Clicked";
}

function mouseOver(){
document.getElementById("box").style.backgroundColor = "orange";
}

function mouseOut(){
document.getElementById("box").style.backgroundColor = "lightblue";
}

function formSubmit(e){
e.preventDefault();
document.getElementById("greeting").innerText = "Form Submitted";
}

function validateForm(e){
e.preventDefault();

let n = document.getElementById("name").value;
let em = document.getElementById("email").value;

if(n == "" || em == ""){
alert("Fill all fields");
}
else{
alert("Submitted Successfully");
}
}

function printPage(){
window.print();
}
