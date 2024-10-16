
// 1. simplle function
// function first(){
//     console.log("This is The First Function");
// }
// function second(){
//     console.log("this is second function ");
// }
// // function calling 
// first();
// second();



// // 2 .function call back 

// function first(){
//     console.log("This is The First Function");
// }
// function second(call){
//     console.log("this is second function ");
//     call(); 
// }
// // function calling 
// second(first);

// 3.synchronous : 
// console.log("stated");
// function myfunc(){
//     console.log("myfunc working");

// }

// myfunc();
// console.log("Ends");


//  set timeout : this function execute after a specific delay . 
// 1. call back function , 2. delay
// console.log("image searching");
// for(let i = 0; i <= 1000;i++){
//     console.log("loop is running");
// }
// setTimeout(() => {
// console.log("image rendered");
// }, 2000);
// console.log("work done");

// clearTimeout


// console.log("image searching");
// for(let i = 0; i <= 1000;i++){
//     console.log("loop is running");
// }
// let a = setTimeout(() => {
// console.log("image rendered");
// }, 2000);
// clearTimeout(a);
// console.log("Work Done");


// set interval 
// console.log("image searching");
// for(let i = 0; i <= 1000;i++){
//     console.log("loop is running");
// }
// let a = setInterval(() => {
// console.log("image rendered");
// }, 2000);
// clearInterval(a);
// console.log("Work Done");



// set interval :
// let count = 0;
// var a = setInterval(() => {
//     count++
//     console.log(`Message ${count}: ghar k niche aja geedi chaliye`);
//     if(count >= 3){
//         clearInterval(a);
//         console.log("execution stop");
//     }
// });

