```JS
// const userData = {
//     name : "Utkarsh",
//     age : 24,
//     greet : function(){
//         console.log(" this is greet function");
//     },
//     hello : function(name){
//         console.log(name)+ this.greet() + userData.value;
//     },
//     value : () =>{
//         console.log("Hello")
//     }
// }
// // userData.value();
// userData.hello("utkars");

let input1 = document.getElementById('key');
let input2 = document.getElementById('value');
let btn = document.getElementById('btn');
let data = {
    name: "utkarsh",
    age: 25,
   
}


let h1 = document.getElementById('h1');


btn.addEventListener('click', ()=>{
    let key = input1.value;
    let value = input2.value;
    data[key] = value;
    let list = document.getElementById('list');
    let html = '';

    for (let key in data) {
        html += `<li>${key} : ${data[key]}</li>`;
    }

    list.innerHTML = html;
});

```
