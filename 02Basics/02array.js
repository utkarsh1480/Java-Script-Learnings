const marvel = ["thor", "spiderman", "ironman"];
const dc = ["batman", "superman", "flash"];
// marvel.push(dc);
// console.log(marvel); // arrya inside arr comes in output.   [ 'thor', 'spiderman', 'ironman', [ 'batman', 'superman', 'flash' ] ]

// console.log(marvel.concat(dc)); // here array inside array is not there.  [ 'thor', 'spiderman', 'ironman', 'batman', 'superman', 'flash' ]
// console.log(...marvel, ...dc); // using spread operator  thor spiderman ironman batman superman flash
// let arr = [1,2,3,[2,4,5],3,[2,4,[5,6]]];
// let real_one = arr.flat(Infinity);
// console.log(real_one); // [ 1, 2, 3, 2, 4, 5, 3, 2, 4, 5, 6 ]
// console.log(Array.isArray("utkarsh"));
// console.log(Array.from("utkarsh"));
// let a = 122;
// let b = 344;
// let c = 234;
// console.log(Array.of(a, b, c)); // [ 122, 344, 234 ]₹