const white_keys = document.querySelectorAll('.btn-outline-dark');
const display = document.querySelector('#screen');
const clearAll = document.querySelector('#clear');
const backSpace = document.querySelector('#del');
const equalTo = document.querySelector('#equal');
const powOf = document.querySelector('#pow');

 
white_keys.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.innerText == '.'){
            display.innerText += btn.innerText;
        }
        else if (display.innerText === '0') {
            display.innerText = btn.innerText;
        }
        else if(display.innerText.length > 25){
            display.innerText = display.innerText;
        }
        else{
            display.innerText += btn.innerText;
        }
    })
})

// console.log(white_keys) 36;

clearAll.addEventListener('click',()=>{
    display.innerText = '0';
})


backSpace.addEventListener('click',()=>{
    display.innerText = display.innerText.slice(0,-1);

    if (display.innerText.length < 1) {
        display.innerText = '0'
    }
})
equalTo.addEventListener('click',()=>{
   try {
    display.innerText = eval(display.innerText)
   } catch (error) {
    display.innerText = 'Syntax Error'
   }
})
powOf.addEventListener('click',()=>{
    display.innerText =  Math.pow(Number(display.innerText),2)
   if (display.innerText === 'NaN' ) {
        display.innerText = 'Syntax Error'
   }
})