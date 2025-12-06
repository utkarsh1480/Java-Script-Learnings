let form = document.querySelector('form');
let body = document.querySelector('body');
let arr = new Array();
form.addEventListener('submit', (e) =>{
  e.preventDefault();
  let input = parseInt(document.querySelector('.guessField').value);
  let Display = document.querySelector('.lowOrHi');
 
  let randomNumber = Math.floor(Math.random() *10 +1);
  if(isNaN(input)){
    Display.textContent = "Please Enter a Valid Number";
    console.log("Invalid Input");
    return;
  }
    if(input < 1 || input > 10){
        Display.textContent = "Please Enter a Number Between 1 to 10";
        return;
  }
  
  if(input == randomNumber){
    Display.textContent = "Right Guess Game Over!"
    console.log("Right Guess");
  } else if(input > randomNumber) {
    Display.textContent = "Guess Lower Number";
      console.log("Guess lesser number");
  } else{
    Display.textContent = "Guess Higher Number";
    console.log("Guess Higher Number");
  }
  console.log(randomNumber);
let remain = calculateRemaning();
   endGame(remain, input, randomNumber);
   Previous_Guses(input);
   


})
// calculation of guses and modification
function calculateRemaning(){
let guess_remaning = document.querySelector('.lastResult');
let remaning =  parseInt(guess_remaning.innerHTML);
if(remaning == 0){
  guess_remaning.innerHTML = "No Remaning Guses Avilable";
  return;
}
remaning = remaning - 1;
 guess_remaning.innerHTML = remaning;
 return remaning;
}
// calculation of Previous Guses

function Previous_Guses(input){
  let guses = document.querySelector('.guesses'); // prevoius gusses select
 
  arr.push(input);
  guses.innerHTML = arr;
}
//End of the Game
function endGame(remain, input, ramdomNumber){
    if(remain == 0 || ramdomNumber == input){
    body.innerHTML = `<h1>Game Over</h1>
    <p>The Number was ${ramdomNumber}</p>
    <button class="reset">Reset Game</button>`;
    let reset = document.querySelector('.reset');
    reset.style.Height = "50px";
    reset.style.Width = "150px";
    reset.style.marginTop = "20px";
    reset.style.marginLeft = "auto";
    reset.style.padding = "10px";
    reset.style.fontSize = "20px";
    reset.addEventListener('click', () => {
      location.reload();
    });

}
}
