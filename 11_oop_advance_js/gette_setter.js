class user{
    constructor(email, passward){
        this.email = email;
        this.passward = passward; // Maximum call stack size exceeded

    }
    get passward()
    { 
        // return this._passward.toUpperCase();
        return `${this._passward}utkarsh`
    }
    set passward(passward){ // race start both of them due to this call stack fill error occur
        this._passward = passward; 
    }
}
// check what is erro come if we make new variable for setter and note change in getter previous remains then error
let utkarsh = new user("utkarsh@123", "abc");
console.log(utkarsh.passward); // ⚠ Interview Trap Question

//Q: Is _property private in JavaScript?
//No, underscore is only a convention. JavaScript privacy is achieved using #privateFields.
// 🎯 Interview-Perfect Answer (Memorize)

// In JavaScript, a property defined with getter and setter is an accessor property, not a data property.
// The actual value is stored in a separate variable like _passward.
// Both are connected only through getter and setter logic.
// console.log(Object.getOwnPropertyDescriptor(utkarsh.__proto__, "passward"));
