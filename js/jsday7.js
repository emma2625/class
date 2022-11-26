
const img = document.querySelector('#image');

/* ATTRIBUTES OF AN ELEMENT */ 
let attr = img.getAttribute("data-name");

img.setAttribute('src',`images/person.jpeg`);
img.setAttribute('style',"height: 200px; width:200px;");
img.removeAttribute('src');
console.log(attr);

// HTML CONTENTS

const myCard = document.querySelector('.card');

console.log(myCard.innerText);
console.log(myCard.innerHTML);
console.log(myCard.textContent);

myCard.innerText = "<h1>Hello People</h1>";
myCard.innerHTML = "<h1>Hello People</h1>";
myCard.innerHTML += "<h1>Hello Class</h1>";

// CLASSLIST

console.log(myCard.classList);

myCard.classList.add('smile')
myCard.classList.remove('smile')
myCard.classList.toggle('smile')