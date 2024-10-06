// var form = document.querySelector("form");

// form.addEventListener("submit",function() {
//     console.log("Form Submitted");
// });




var form1 = document.querySelector("form");

form1.addEventListener("submit", function(event) {
    // var inp = document.querySelector("input");
    // var p = document.querySelector("p");
    // p.innerText = inp.value;
    event.preventDefault();  // Prevent form from redirecting to the action URL
    console.log("Form Submitted");
});