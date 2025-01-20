// callback function
// function doSomething(task, callback) {
//     console.log(`Doing ${task}...`);
    
//     // Simulate task completion
//     setTimeout(() => {
//       console.log(`${task} done!`);
//       callback(); // Call the callback when the task is done
//     },1000); 
// }
// // Use the function
// doSomething('baking a cake', () => {
//     console.log('Cake is ready! Time to eat!');
// });
  

// function doSomething(src){
//     return new Promise(function(resolve,reject){
//         let script = document.createElement('script');
//         script.src = src;
    
//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error(`Script load error for ${src}`));
    
//         document.head.append(script);
//     })
// }
// let promises = doSomething("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
// promises
//     .then((result)=>console.log(`${result.src} is loaded!`))
//     .catch((error)=>console.log(error));




// promises
// console.log("\"promise\"");
// let promise = new Promise(function(resolve,reject){
//     setTimeout(() =>{
//         if(true){
//             resolve('done');
//         }else{
//             reject(new Error("Whoops!"));
//         }
//     },1000);
// })
// promise
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))
//     .finally(()=>console.log('final task'));


// Promise chaining
console.log("\"Promise chaining\"");
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); 
})
// .then take result from previous .then and pass it to next .then
    .then((result) => { 
      console.log(result); 
      return result * 2;
    })
    .then((result) => { 
      console.log(result); 
      return result * 2;
    })
    .then((result) => {
      console.log(result); 
      return result * 2;
    });
  


// Promise API
console.log("\"Promise API\"");
let promise1 = Promise.resolve(10); 
// let promise2 = Promise.reject("Error in promise2"); 
let promise2 = new Promise((resolve) =>setTimeout(() => resolve(20), 1000)); 
let promise3 = new Promise((resolve) => setTimeout(() => resolve(30), 2000)); 

// Promise.all([promise1, promise2, promise3])

// Promise.allSettled([promise1, promise2, promise3])
Promise.race([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log("One of the promises failed:", error);
  });






