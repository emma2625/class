// DATE CONSTRUCTOR & INTERVALS

let enter = prompt("Y-m-d")
const now = new Date();
const old = new Date(enter)
console.log(now,old);
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDay();
let date = now.getDate();

let hr = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();


let oldTimeStamp = old.getTime();
let newTimeStamp = now.getTime();

let timeStamp = newTimeStamp - oldTimeStamp

sec = Math.floor(timeStamp /1000);
min = Math.floor(sec /60);
hr = Math.floor(min /60);
day = Math.floor(hr /24);
let weeks = Math.floor(day /7);
month = Math.floor(weeks/4);
year = Math.floor(day / 365);


console.log("Milliseconds",timeStamp);
console.log("Seconds",sec);
console.log("Minutes",min);
console.log("Hours",hr);
console.log("Days",day);
console.log("Weeks",weeks);
console.log("Month",month);
console.log("Years",year);