const user = { // object literal is literally creating an object using {}
    username : "utkarsh",
    loginCount : 32,
    signedin : true,
    premiumUser : true,
    getuserDetails : function(){
        // return `${this.username} has logged in ${this.loginCount} times`;
        console.log(this)

    },
    
}

const user2 = { // object literal is literally creating an object using {}
    username : "utkarsh",
    loginCount : 32,
    signedin : true,
    premiumUser : true,
    getuserDetails : function(){
        // return `${this.username} has logged in ${this.loginCount} times`;
        console.log(this)

    },
    
}

// console.log(user.username);
console.log(user.getuserDetails());

//this keyword in JavaScript

// const arr[] = [10,20,30,40,50];
// const arr2[] = [60,70,80,90,100];
// const arr3[] = [110,120,130,140,150];
//because in both the cases methods like map and filters are same the how methods called on different arrays
//so how internal methoods determine which array is calling it
//int that case this keyword is used