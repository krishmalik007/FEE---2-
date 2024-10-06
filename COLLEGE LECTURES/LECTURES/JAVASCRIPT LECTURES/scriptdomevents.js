// var btns = document.querySelectorAll("button");


// for(btn of btns) {
//     btn.onclick = myfunc;// on-click event
//     btn.onmouseenter = function() { // on-mouse-enter event
//         console.log("Your mouse is hovering");
//     }
// }

// function myfunc() {
//     console.log("Button Pressed");
// };





// EVENT-LISTNERS
var btns = document.querySelectorAll("button");
for(btn of btns) {
btn.addEventListener("click",myfunc);  
btn.addEventListener("click",hello);    
}
function myfunc() {
    console.log("Button Pressed");
};
function hello() {
    console.log("HELLOoooooo....");
};