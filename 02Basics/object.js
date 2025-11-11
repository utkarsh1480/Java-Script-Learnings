
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

jsUser.greeting = function(){
    console.log(`Hello there! ${this.name}`);
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

