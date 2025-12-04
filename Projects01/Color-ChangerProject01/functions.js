const body = document.querySelector("body");
const button = document.querySelectorAll('.button');

button.forEach(function(el){
  el.addEventListener('click', function(e){
   if(e.target === grey){
     body.style.backgroundColor = e.target.id;
   }
   if(e.target === white){
    body.style.backgroundColor = e.target.id;
  }
  if(e.target === blue){
    body.style.backgroundColor = e.target.id;
  }
  if(e.target === yellow){
    body.style.backgroundColor = e.target.id;
  }
  })
})