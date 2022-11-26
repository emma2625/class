const wordSpace = document.querySelector('#wordSpace');
const counter = document.querySelector('#counter');

wordSpace.focus();
// 
wordSpace.addEventListener('keyup',(e)=>{
    let numWords = wordSpace.value.trim();
        numWords = numWords.split(' ');
        counter.innerText = numWords.length
});


const passInput = document.querySelector('#pass');
const toggleBtn = document.querySelector('#toggle');

toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('fa-eye');
    toggleBtn.classList.toggle('fa-eye-slash');

    if (passInput.type === 'password') {
        passInput.type = 'text';
    }else{
        passInput.type = 'password'
    }
})