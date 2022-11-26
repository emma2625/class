// const clicked = document.querySelector('#clicker');
// let num = 1;
// clicked.addEventListener('dblclick',()=>{
//     alert('You just clicked '+ num++)
// })

const toggler = document.querySelector('#toggle')
const navItems = document.querySelector('.nav-items');

toggler.addEventListener('click',()=>{
    navItems.classList.toggle('show')
})