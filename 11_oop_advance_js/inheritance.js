class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    encryptedPassword(){
        return `${this.name}12345`
    }
}
class teacher extends User{
    constructor(name, email, subject){
        super(name, email); // automatically call parent constructor
        this.subject = subject;
    }
    getDetails(){
        return `Name is ${this.name}, Email is ${this.email} and Subject is ${this.subject}`;
    }
}
const chai = new teacher("Chai", "chai@123", "JavaScript");
const masalachai = new User("masala hai");

console.log(chai.getDetails());
console.log(chai.encryptedPassword()); // inherit method
console.log(chai === masalachai);
console.log(chai instanceof User);

