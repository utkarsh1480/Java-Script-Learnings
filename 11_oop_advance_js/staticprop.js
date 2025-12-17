class User{
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`usesName is ${this.userName}`)
    }
    static createId(){ // if we don't want to give acess another class  then we use static keyword always thik why not give
        return `123`;
    }
}
// const user = new User("Utkarsh");
// console.log(user.createId());
class teacher extends User {
     constructor(subject, userName){
        super(userName);
        this.subject = subject;
     }
}
const utkarsh = new teacher("Utkarsh");
console.log(utkarsh.logMe());
console.log(utkarsh.createId());// not accesiable