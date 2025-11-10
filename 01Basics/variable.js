// Scope	Function-scoped	Block-scoped	Block-scoped
// Re-declaration	✅ Yes	❌ No	❌ No
// Re-assignment	✅ Yes	✅ Yes	❌ No
// Hoisting behavior	Yes (undefined)	Yes (but TDZ*)	Yes (but TDZ*)
// Must initialize?	❌ No	❌ No	✅ Yes

// let a = 10; // Function-scoped variable
// console.log(a++);
// console.log(a);
// let b =20;
// console.log(++b);
// console.log(b);

// let num = 10;
// let newnum = num++;
// console.log(newnum);
// newnum = newnum + 1;
// console.log(newnum);


                // WAY TO WRITTING IDENTIFIER

// Camel case
// let fullName = "John Doe";
// snake case

// let full_name = "John Doe";
// pascal case

// let FullName = "John Doe";
// let a = 23;
// typeof(Boolean);
// console.log(`hello World ${a}, this is how JS laterals work`);