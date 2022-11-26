// const numbers = [21,33,"Hello World",true,'sam'];

// // console.log(numbers);

// // console.log(numbers[3]);

// // numbers[3] = false;

// // console.log(numbers.length);

// // console.log(
// //     numbers.slice(2,3)
// //     );
    
// // console.log(numbers);
// // numbers.push(34)
// // numbers.push("John")
// // console.log(numbers);

// // numbers.pop()
// // let popped = numbers.pop()
// // console.log(numbers,popped);


// console.log(numbers);

// numbers.unshift("John");
// numbers.unshift("sam");

// console.log(numbers);

// console.log(numbers.indexOf('sam'));


// const people = [
//     "john",
//     'jack',
//     'jill'
// ]

// console.log(people);

// console.log(people.includes('jill'));

// let newString = people.toString();
// newString = people.join(', ');
// console.log(newString);

// // newString = "This is a string value";
// // console.log(newString);
// // newString = newString.split(' ')
// // console.log(newString);

// const equipment = "eraser,pencil,bag,book,calculator,maths set";

// console.log(equipment);

// let eqArray = equipment.split(',');

// console.log(eqArray);

function greet(name,message) {
    alert(`Good Morning ${name}, ${message}`);
}


const greetAft = ()=>{
    alert(`Good Afternoon`);
}


let enter  = prompt('Enter Name')
greet(enter,`Welcome to earlycode`)
