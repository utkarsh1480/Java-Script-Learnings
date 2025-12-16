function setUserNmae(userName){
    //dbcall to set user name
    this.userName = userName;
}
function creatUser(username,age ,code){
    setUserNmae.call(this,username);
    this.age = age;
    this.code = code;

}
let user1 = new creatUser("utkarsh", 25, "JS001");
console.log(user1);