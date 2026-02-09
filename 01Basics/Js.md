### when the object is deined the large memory is occupied and each key value pair is take as primitive value and store in memory acessing method if  think []
```js
NaN : whose value to be seen is node defined ||  Typeof() Number
Undefined : variable initilize but not Defined ||  Typeof() Undefined ||
Null : Explicityl defined || typeof() object
console.log(undefined === undefined) // true
console.log(null === null) // true
console.log(undefined === null) // false
console.log(typeof NaN) // number
console.log(NaN === NaN) // false
console.log(NaN !== NaN) // true
```
```js
let a = 10
let b = a
console.log(a) // 10
console.log(b) // 10
a = 20 
console.log(a) // 20
console.log(b) // 10
var obj1 = { name: 'Alice' }
var obj2 = obj1
console.log(obj1) // { name: 'Alice' }
console.log(obj2) // { name: 'Alice' }
obj1.name = 'Bob'
console.log(obj1) // { name: 'Bob' }
console.log(obj2) // { name: 'Bob' }
because it is the primitive type and primitive typr is call by value
and why obje is change is because of object is refrence type;
```

###Let / Const / Var

```js
let x = 5 // block scope
x = 10
let x = 15 // SyntaxError: Identifier 'x' has already been declared 
console.log(x) // 10
const y = 15 // block scope, cannot be reassigned
// y = 20 // TypeError: Assignment to constant variable.
console.log(y) // 15
var z = 25 //local scope
z = 30
var z = 35 // No error, var allows redeclaration
console.log(z) // 35 local scope
{
    let p = 5
    const q = 6
    var r = 7
}
console.log(p) // ❌ error
console.log(q) // ❌ error
console.log(r) // ✔ 7 //var block को ignore करता है
//इसका scope global(या function) होता है

```

### Comparission
```js
const val = Number(true) // 1
 console.log(val) // 1
 const val2 = Number(false) // 0
 console.log(val2) // 0
 const val3 = Number('') // 0
 console.log(val3) // 0
 const val4 = Number('hello') // NaN
console.log(val4) // NaN
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(NaN)) // NaN
console.log(null == false) // false
console.log(null == true)// false
console.log(null == 0) // false
console.log(null == '') // false
console.log(null == undefined) // true
console.log(undefined == null) // true
console.log(undefined == false) // false
console.log(undefined == true) // false
console.log(undefined == 0) /// false
console.log(undefined == '') // false
```
