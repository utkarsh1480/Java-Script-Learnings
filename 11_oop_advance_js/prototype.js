let herose = "Utkarsh     "
//console.log(hero.finalLenght())
//after inheritance come here 
String.prototype.finalLenght = function() {
      console.log(this);
    console.log(`The Final lenght is ${this.trim().length}`)
  
}
herose.finalLenght();

"RAJ".finalLenght();

let heros = ["spiderman", "ironman", "thor"];


let heroPower = {
    thor : "hammer",
    ironMan : "slingy",

    getSpiderPower : function(){
    console.log(`this is power of thor ${this.iron}`);
    
    }
}
Object.prototype.utkarsh = function(){
    console.log("My name is Utkarsh");
    
}
Array.prototype.heyutkarsh = function(){
    console.log("Hey Utkars");
}
// heroPower.utkarsh();
// heros.utkarsh();

heros.heyutkarsh();
// heroPower.heyutkarsh();

//inheritance 

const teacher = {
    makeVideo : "true",
    
}

const teachingAssintent = {
    isAvilable : "False"
} 

const tsSupport = {
 makeAssesment : "true",
 __proto__: teachingAssintent
}
// teacher.__proto__ = user


//new approach
Object.setPrototypeOf(teachingAssintent, teacher)