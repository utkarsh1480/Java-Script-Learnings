//these use case will give you empty
// const height = document.querySelector('#height');
// const weight = document.querySelector('#weight');

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');
  
  if(height == '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please Enter Valid Height${height}`;
  }
  if(weight == '' || weight< 0 || isNaN(weight)){
    results.innerHTML = `Please Enter Valid weight ${weight}`;
  }
  else{
    let Bmi = (height/(Math.pow(weight,2)/10000)).toFixed(2);
    results.innerHTML = Bmi
  }
})

// btn.addEventListener('submit', function(e){
//   console.log(e.target);
 
// });
