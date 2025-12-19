// function based syntex
function User (email , passward){
    this._email = email;
    this.passward = passward;
    Object.defineProperty(this, 'email', {     // actuall it is getterans setter
    get : function(){
        return this._email
    },
    set : function(val){
      this._email = val
    }
    })

    
}
const chai = new User("cha@gami.com", "123");
console.log(chai);
console.log(chai.email);


// -------------------OR--------------------function User (email , passward){
//     this._email = email;     // ✅ store value
//     this.passward = passward;

//     Object.defineProperty(this, 'email', {
//       get : function(){
//         return this._email;
//       },
//       set : function(val){
//         this._email = val;
//       }
//     });
// }

// const chai = new User("cha@gami.com", "123");
// console.log(chai.email); // cha@gami.com
// The original "cha@gami.com" value is lost

// Getter returns this._email

// But _email was never set
// 🔑 KEY RULE (MEMORIZE)

// Never assign to a property before defining its getter/setter.

//                                          imp 
//🔥 Interview-Perfect Explanation

// Object.defineProperty replaces the existing property descriptor.
// If a value is assigned before defining a getter/setter, that value is lost unless stored separately.

