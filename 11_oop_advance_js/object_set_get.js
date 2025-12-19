const User =  {
  _email: 'hedj@.com',
  passward: '12345', 

  get email(){
    return this._email;

  }, 
  set email(value){
    this._email = value;

  }
}
const tea = Object.create(User); // factory function by default null 
console.log(tea.email);
