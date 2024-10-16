// // promises :- it represents the future events . technically there are objects. by default promisis are in pending states . promises state :- pending , fullfilled , reject.
// // 1 :- how to create promises. it has two callback - resolve and reject 
// let p = new Promise((resolve,reject) => {
//     let like = true;
//     setTimeout(() => {
//         if(like){
//             resolve("yeah , she likes you");
//         }else{
//             reject("naah!! ,your ugly");
//         }
        
//     }, 2000)
// });
// // // 1.2.1
// // p.then((value) => {
// //     console.log(value);
// // }),(err) => {
// //     console.log("rejected");
// // };




// p.then( (pro) => {
//     console.log(pro);
// }).catch((er) => {
//     console.log("rejected" + er);
// });    



// 2. promise chaining :- 
// let p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("resolve is working after 2 sec ");
//     }, 2000);
// });

    p1.then((value) => {
    console.log(value);
    let p2 = new Primese((resolve,reject) => {
        setTimeout(() =>{
            resolve("promise 2 working");
        }, 2000);
    });
    return p2;
})
.then((value) => {
    console.log("workdone!");
})

.then((value) => {
    console.log("ok now done");
})

// 3. promise inside a function



//  create a function with name downloadmovies which has url a argument . create a promise if url is not mp4-> reject else mp4-> resolve: