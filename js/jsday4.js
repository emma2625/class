/**
 * Conditional Statements
 *  IF, ELse IF, ELse
 * Switch Statements
 *
**/ 

// let age = 12;


// if (age == 18) {
//     console.log("You are allowed to vote");
// }

// else if(age == 17){
//     console.log("You are eligible for a voters card but can't vote yet");
// }
// else if(age == 60){
//     console.log("You are retired from voting");
// }
// else{
//     console.log("You are a minor");
// }

// let product = "tecno";

// switch (product.toLowerCase()){
//     case "iphone" : console.log("Price is #10,000");   
//         break;
//     case "samsung" : console.log("Price is #50,000"); 
//         break;
//     case "nokia" : console.log("Price is #100,000"); 
//         break;
//     case "oppo" : console.log("Price is #5,000"); 
//         break;
//     case "tecno" : console.log("Price is #1,000"); 
//         break;
//     default : console.log("Product not found");
// }


/* OBBJECTS */ 

const user = {
    email: "example@ok.com",
    password: "password",
    name: 'John',
    changeName: function(newName){
        this.name = newName
    },

    authenticate: function(email,password){
        if (this.email === email && this.password === password) {
            alert("Login Successfull");
        }else{
            alert("Incorrect Login Details");
        }
    }
}

console.log(user);

console.log(user.email);
console.log(user.password);

user.password = "Pass2";
user.changeName("Jerry")
console.log(user);

let userEmail = prompt("Enter your email");
let userPass = prompt("Enter your password");


user.authenticate(userEmail,userPass)