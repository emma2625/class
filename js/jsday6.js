/* The DOM */


// console.log(document);

// const element = document.getElementById('two');

// const element2 = document.getElementsByClassName("one");
// const element3 = document.getElementsByTagName("h1");
// console.log(element3);

const element = document.querySelector(".one");
// const element = document.querySelectorAll("#two");


element.style.backgroundColor = "green";
element.style.padding = "10px";
element.style.borderRadius = "10px";
element.style.height = '200px';
// console.log(element.style);


const cardElement = document.querySelector('.card');
const image = document.querySelector('.cardImage');

cardElement.style.width = "300px";
cardElement.style.margin = "10px auto";
cardElement.style.backgroundColor = "rgba(0,0,0,0.3)";
cardElement.style.padding = "10px";
cardElement.style.borderRadius = "10px";
cardElement.style.height = "300px";
// cardElement.style.display = "flex";
// cardElement.style.justifyContent = "center";
// cardElement.style.alignItems = "center";
cardElement.style.display = "grid";
cardElement.style.placeItems = "center";
cardElement.style.boxShadow = "0 10px 20px 0 black";
cardElement.style.fontFamily = "Cursive";
cardElement.style.textShadow = "-10px 10px 5px white";