// let word = "Hello World";

// setTimeout(()=>{
//     console.log(word);
// },5000)

// let num = 1;


// const id = setInterval(()=>{
//     console.log("Total Users Online:",num++);

//     if(num > 10){
//         clearInterval(id)
//     }
// },500);
// const id2 = setInterval(()=>{
//     console.log("Total Users Online:",num++);
//     if(num > 10){
//         clearInterval(id2)
//     }
// },500);

// console.log(id,id2);


const clock = document.querySelector('#clock');


setInterval(()=>{
    const now = new Date();

    let hr,min,sec,amp;
    
    hr = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();
    amp = "AM";
    
    if (hr > 12) {
        hr %= 12
        amp = "PM"
    }
    clock.innerHTML = `
        <span class="text-light ">${hr}</span>
        <span class="text-light ">:</span>
        <span class="text-light ">${min}</span>
        <span class="text-light ">:</span>
        <span class="text-light ">${sec}</span>
        <span class="text-light ">${amp}</span>
    `;
},1000)