class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    encryptedPassword(){
        return `${this.name}12345`
    }
    changeName(newName){
        this.name = newName;
        return this.name.toUpperCase();
    }
}

const chai = new user("Chai", "chai@123");
console.log(chai);
console.log(chai.encryptedPassword());
console.log(chai.changeName("Utkarsh"));

//behind the scene
function User(name, email){
    this.name = name;
    this.email = email;
}

User.prototype.encryptedPassword = function(){
    return `${this.name}12345`
}