let num = 1;

// for(let i = 0; i < 10; i++){
   

// }

// while(num <= 5){
//     console.log(num++);
// }

const phoneNumbers = [
    "09142536253",
    "09142536726",
    "09142536097",
    "09142536654",
    "09142536754",
];

console.log(phoneNumbers);

let type = prompt("Enter Number Or All");

let message = prompt("Enter Message");
if (type.toLowerCase()  == 'all') {
    phoneNumbers.forEach((value,index)=>{
            // console.log(value,index);
            // let rem = index % 2;
            // if ( rem === 0) {
            //     console.log(rem,value, `You won! $ 1,000`);
            // }else{
            //     console.log(rem,value, `You Lost! $ 1,000`);
            // }

            console.log(value,message);
    });
}else{
    if (phoneNumbers.includes(type)) {
        console.log(type,message);
    }else{
        alert('This phone number does not exist')
    }
}
