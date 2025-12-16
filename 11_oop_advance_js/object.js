function MultiplyBy5(number) {
    this.num = number
    return number * 5;
}
// MultiplyBy5.power = 2;
// console.log(MultiplyBy5(10)); // 50
// console.log(MultiplyBy5.power); // 2
// console.log(MultiplyBy5.prototype); //{} here prototype refers to properties means this object if the function have properties it will be shown here

// Functions are first-class citizens in JavaScript
// This means that functions can have properties and methods just like objects
//One-line interview killer 💥

//JavaScript uses prototypes instead of classes for inheritance, where objects inherit properties from other objects via the prototype chain.

// Every function in JavaScript has a prototype property that is used to build the prototype chain for objects created using that function as a constructor.
function createUser(name , age){
    this.name = name;
    this.age = age;
}
createUser.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
createUser.prototype.IncreseAge = function(){
    this.age += 1;
}

const user1 = new createUser("Utkarsh", 25);
const user2 = new  createUser("John", 30);
user1.greet(); // Hello, my name is Utkarsh and I am 25 years old.

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
