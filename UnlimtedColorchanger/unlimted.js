
function randomColor(){
  let color = "#";
  const hex = "0123456789ABCDEF";
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId;
const StartchangeColor = function(){
if(!intervalId){ // corner cases
  intervalId = setInterval(changeColor, 2000); 
}
  function changeColor(){
    document.body.style.backgroundColor = randomColor();
  }
  
};

// document.querySelector("#start").addEventListener("click", StartchangeColor);  //give erro why color not change why

const StopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null; // freeup memory
};
document.querySelector('#start').addEventListener('click',StartchangeColor);
document.querySelector('#stop').addEventListener('click', StopChangingColor);
