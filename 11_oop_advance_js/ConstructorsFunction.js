function user (name, email, age, address){
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = address;
    // this.greetUser = function(){
    //     console.log(`Hello, ${this.name}! Welcome back.`);
    // }
    return this; //likhen ya nhi it bydefault return this hi karta hai
}
// console.log(user("Utkarsh", "utkarsh@example.com", 25, "123 Main St")); 
// console.log(typeof user()); // function
const userOne =  new user("Utkarsh", "utkarsh@example.com", 25, "123 Main St");

const userTwo = new  user("John", "john@example.com", 30, "456 Oak Ave");
console.log(userOne.constructor);
//onsole.log(userTwo);

//when we write new the a new object is created and this keyword point to that object
//because of new keyword a coinstructor is created
//in step 3 this keyword pack all keywords
//in step 4 the object is returned from the function
//so basically constructor function is a blue print for creating multiple objects