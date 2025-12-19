// const descreptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descreptor);

// console.log(Math.PI);
const chai = {
    name : "ginger-Chai",
    price : 250,
    isAvilble : true,

    orderchai : function(quantity){
        console.log(`You have ordered ${quantity} ${this.name} chai`);
    }
}
Object.defineProperty(chai , 'name', {
    // writable : false, 
    enumerable : false
})
// for(let [key,value] of chai){ // it will give error as chai is not iterable because either object is iterable or nit depend on situttion 
    // but if you wont then use Object.entries
    for(let [key,value] of Object.entries(chai)){ 
        if(typeof value !== 'function')

    console.log(`${value} : ${key}`);

}
// let decs = Object.getOwnPropertyDescriptor(chai , "name" );
// console.log(decs);
// console.log(chai.name);
// chai.name = "Piyush";
// console.log(chai.name);