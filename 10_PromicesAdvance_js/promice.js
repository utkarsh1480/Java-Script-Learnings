// promise is used to handle asynchronous operation in js
// promise have three state pending , resolved , rejected
// promise is a js object to which we pass a function having two parameter resolve and reject
// resolve is called when the async operation is successful
// reject is called when the async operation is failed
//Promise ek object hota hai jo batata hai ki
// future me koi kaam complete hoga ya fail hoga



// why we use promise ?
// to avoid callback hell
// to handle async operation more effectively
// to write cleaner codefunction loginUser(username, callback) {
//   setTimeout(() => {
//     console.log("User logged in");
//     callback({ id: 1, username });
//   }, 1000);
// }

// function getUserData(user, callback) {
//   setTimeout(() => {
//     console.log("User data fetched");
//     callback({ ...user, email: "user@gmail.com" });
//   }, 1000);
// }

// function getUserPosts(user, callback) {
//   setTimeout(() => {
//     console.log("User posts fetched");
//     callback(["Post1", "Post2"]);
//   }, 1000);
// }

// // ❌ Callback Hell
// loginUser("utkarsh", (user) => {
//   getUserData(user, (userData) => {
//     getUserPosts(userData, (posts) => {
//       console.log("Final Output:", posts);
//     });
//   });
// });

// ✅ Using Promises to avoid Callback Hell
const promice = new Promise(function(resolve, reject){
    // async task , crypto , network request, file reading, db operations
    setTimeout(function(){
        console.log("Async call is completed");
        resolve();
    },1000)
});

//One-line yaad rakh (Interview)

//setTimeout sirf delay karta hai, jabki Promise async ka completion signal deta hai jisse hum next code ko properly control kar sakte hain.

promice.then(function(){
    console.log("promise Consumed");
    
})
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async tsak2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promise done")
}) 

// One-line interview answer

// resolve Promise ko fulfilled state me le jaata hai aur async operation ke successful completion ka signal deta hai.

// 🔹 Important yaad rakh

// resolve() sirf ek baar call hota hai

// resolve() ke baad Promise lock ho jaata hai

// Uske baad reject() ka koi effect nahi






const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({name:"Utkarsh", email:"utkarsh@gmail.com"})// generally pass object or array you may pass any value
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
});
 
//Fourth Promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name:"Utkarsh", email:"utkarsh@gmail.com"});
        } else{
            reject('ERROR : Something went wrong');
        }
    },1000)
})
promiseFour.then((user) =>{
    console.log(user); 
    return user.name; // where to go this return value
    
}) 
.then((name) =>{
    console.log(name); // chaning when then return something where it go in that case chaning come and mostlybused in accessing data bases
})
.catch(function(error){
    console.log(error);
    
})
.finally(() =>{ // always run
    console.log("The Promise is either Resolved or Rejected");
})
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({UserName : "Utkarsh", UserEmail:"utkarsh@gmail.com"});
        } else{
            reject("ERROR : Something went wrong");
        }
    },1000)
})
async function consumePromiseFive(params) { // async function always return a promise // await only work inside async function // another way to consume promise
    try {
        let response = await promiseFive; // wait until the promise is resolved
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
    
}
consumePromiseFive();
async function getAllUser(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users'); // Fetch always return promise;
        const data = await response.json();
        console.log((data)); 
    } 
    catch(error){
        console.log("E : " ,error);
    }
}
// getAllUser();


// .then and catch method
fetch('https://jsonplaceholder.typicode.com/users') // here is this code reun output is printed at starting why  because of microtask queue or Priority Queue Learn from diagram

.then((response) =>{
    return response.json();
})
.then((user) => console.log(user))
.catch((error) =>{
        console.log(error)
})
