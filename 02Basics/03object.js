const obj = new Object() // Using the Object constructor singlten object
// console.log(obj);
const obj2 = {} // Using object literal syntax - more common way
obj2.name = "Utkarsh"
obj2.age = 21
obj2.course = "JavaScript"
// console.log(obj2);
obj2.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
}
console.log(obj2);
const tinderUser = {
    name :{
        UserName:{
            first_Name : "Utkarsh",
            last_Name : "Kushwaha"
        }
    },
    age : 21,
    isLoggedIn : false,

}
console.log(tinderUser.name.UserName.first_Name)
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
console.log(arr1.concat(arr2));
let string1 = "Hello ";
let string2 = "World!";
console.log(string1.concat(string2));
