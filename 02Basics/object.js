
//laterals
//object.create() constructor /**
const sym01 = Symbol('mySymbol1');
let jsUser = {
    name : "Utkarsh",
    [sym01] : "This is a symbol property",
    "last name" : "Kushwaha",
    course : "JavaScript",
    isActive : true,
    location : "Ghazizbad"
}

// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser.last ,name); // using quotes for space in key give ERROR
// SO THATS WHY WE USE BRACKET NOTATION

// console.log(jsUser["last name"]); // correct way using bracket notation
// console.log(jsUser["location"]);

// console.log(jsUser["sym01"]); //output UNDEFINWD type Undefined  accessing symbol property using bracket notation
// console.log( jsUser["sym01"]); //output UNDEFINWD type Undefined  accessing symbol property using bracket notation
// console.log( typeof jsUser[sym01]); // type String This is a symbol property  accessing symbol property using variable
// console.log(typeof keys[0]);
// console.log(typeof jsUser.sym01) ;

// jsUser.greeting = function(){
//     console.log(`Hello there! ${this.name}`);
// }
// console.log(jsUser.greeting);
// console.log(jsUser.greeting());

// console.log(Object.keys(jsUser)); // get all keys of object in array form
// const allKeys = Reflect.ownKeys(jsUser); // get all keys including symbol keys
// console.log(allKeys.length); // 6
// jsUser.isActive = false; // updating existing key value
// console.log(jsUser); // false
// Object.freeze(jsUser); // freeze the object
// jsUser.course = "Python"; // trying to update after freezing
// console.log(jsUser); // still JavaScript
jsUser.greeting = function(){
    console.log(`Hello there! ${this.name}`);
}
console.log(jsUser); // no greeting method added
console.log(jsUser.greeting); // undefined
console.log(jsUser.greeting()); // error jsUser.greeting is not a function

//Some Methods of object
// console.log(Object.keys(jsUser)); // get all keys of object in array form
// const allKeys = Reflect.ownKeys(jsUser); // get all keys including symbol keys
// console.log(allKeys.length); // 6
// console.log(Object.values(jsUser)); // get all values of object in array form
// console.log(Object.entries(jsUser)); // get all entries of object in array form as [key,value] pairs
// console.log(jsUser.hasOwnProperty("name")); // true
// console.log(jsUser.hasOwnProperty("nonExistingKey")); // false
// console.log(jsUser.isPrototypeOf(jsUser)); // false
// const newUser = Object.assign({}, jsUser); // shallow copy of object
// console.log(newUser);