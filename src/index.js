// console.log("Hello from src/index.js!");

// ////////
// Select DOM elements
// ////////

// with its ID
document.querySelector("#arnaud");
// with its type
// console.log(document.querySelector("h2"));
// with its class
const group = document.querySelector(".group");
console.log(group);
// by nest selection
// console.log(group.querySelector("ul"));

// select multiple elements
// console.log(document.querySelectorAll(".card"));

// ////////
// Modify the DOM
// ////////

// add an HTML element (Fast)
const ul = group.querySelector("ul");
ul.insertAdjacentHTML("beforeend", "<li>Fast</li>");
// same but more complex
const reliefMembers = document.querySelector("#relief ul");
reliefMembers.insertAdjacentHTML("beforeend",
  `<li>
    <img src="https://res.cloudinary.com/wagon/image/upload/c_fill,g_face,h_200,w_200/v1579046615/nlludtztekkxomrnnpnn.jpg" alt="">
    <p>Will</p>
  </li>`);
// change the element style
group.style.backgroundColor = "red";
// add a class to the element
group.classList.add("text-white");
// remove it
group.classList.remove("text-white");
// add it when not exist, remove when exist
group.classList.toggle("text-white");

// Read/Write for inputs
const email = document.getElementById("email");
// console.log(email.value);
email.value = "Changed!";

// Read/Write element content (Text and HTML)
const teamName = document.querySelector("#relief h3");
console.log(teamName);
console.log(teamName.innerText);
console.log(teamName.innerHTML);
teamName.innerText = "This is <em> italic </em>";

// ////////
// Add event listeners
// ////////

// 1. Select Arnaud's picture
// const arnaud = document.querySelector("#arnaud");
// // 2. Listen to a click
// arnaud.addEventListener("click", (event) => {
//   // 3. Modify the DOM
//   console.log(event.currentTarget);
//   event.currentTarget.classList.toggle("selected");
// });

// 1. Select all pictures
const images = document.querySelectorAll(".card img");

// 2. Listen to a click
images.forEach((image) => {
  image.addEventListener("click", (event) => {
    // 3. Modify the DOM
    // debugger
    event.currentTarget.classList.toggle("selected");
  });
});
