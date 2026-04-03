// ================= TASK 1 =================
// Variables
var company = "My Startup";
let year = 2026;
const founder = "Rahamath";

console.log("Company:", company);
console.log("Year:", year);
console.log("Founder:", founder);

// ================= TASK 2 =================
// Normal Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const subtract = (a, b) => a - b;

console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(10, 4));

// ================= TASK 3 =================
// Built-in functions
alert("Welcome to our Startup Website!");

let userName = prompt("Enter your name:");
console.log("User Name:", userName);

// ================= TASK 4 =================
// HTML Manipulation
const para = document.getElementById("para");

document.getElementById("changeBtn").addEventListener("click", () => {
  para.textContent = "Text has been changed!";
});

document.getElementById("addBtn").addEventListener("click", () => {
  para.textContent += " + Extra content added";
});

document.getElementById("removeBtn").addEventListener("click", () => {
  para.textContent = "";
});

// ================= TASK 5 =================
// Styling
const styleText = document.getElementById("styleText");

document.getElementById("styleBtn").addEventListener("click", () => {
  styleText.style.color = "white";
  styleText.style.backgroundColor = "green";
  styleText.style.fontSize = "30px";
});

// Toggle Style
let toggle = false;

document.getElementById("toggleBtn").addEventListener("click", () => {
  if (!toggle) {
    styleText.style.color = "black";
    styleText.style.backgroundColor = "yellow";
  } else {
    styleText.style.color = "white";
    styleText.style.backgroundColor = "green";
  }
  toggle = !toggle;
});

// ================= TASK 6 =================
// Events
const box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "orange";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "lightblue";
});

// Form submit event
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Submitted");
});

// ================= TASK 7 =================
// Interactive Webpage

// Greeting
if (userName) {
  document.getElementById("greet").textContent =
    "Hello " + userName + ", welcome to our website!";
}

// Form validation
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill all fields!");
  } else {
    alert("Form submitted successfully!");
  }
});

// Print Page
document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});
