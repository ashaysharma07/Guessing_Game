let Randomvalue = Math.floor((Math.random() * 100) + 1);

const Submit = document.querySelector("#subt")
const Userinput = document.querySelector("#guessField")
const guesses = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const Startover = document.querySelector(".result")

const p = document.createElement("p")

let prevguess = []
let numguess = 1

let playgame = true ;

if(playgame){
    Submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(Userinput.value)
        console.log(guess)
        validateguess(guess) 
    })
}

function validateguess(guess){
  if(isNaN(guess)){
    alert("Please Enter a valid Number")
  } else if ( guess < 1){
    alert("Please Enter a Number greater than 1 ")
  }else if( guess > 100 ){
    alert("Please Enter a Number less than 100 ")
  }else {
    prevguess.push(guess)
    if (numguess === 11){
        displayguess(guess)
        displaymessage(`Game Over random number was ${Randomvalue}`)
        endgame()
    }
    else{
        displayguess(guess)
        checkguess(guess)
    }
  }
}

function checkguess(guess){
 if(guess == Randomvalue){
    displaymessage(`You Guessed It Right`)
    endgame()
 } else if (guess < Randomvalue) {
    displaymessage(`Number Too low`)
 } else if (guess > Randomvalue) {
    displaymessage(`Number Too high`)
 }
}

function displayguess(guess){
  Userinput.value = ""
  guesses.innerHTML += `${guess}, `
  numguess++;
  remaining.innerHTML = `${11 - numguess}`
  if(remaining.innerHTML < 0){
    remaining.innerHTML = `0`
  }

}

function displaymessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
   Userinput.value = ''
   Userinput.setAttribute("disabled" , '')
   p.classList.add("button")
   p.classList.add("submit")
   p.innerHTML = `<h2 id = "newgame"> Start New Game </h2> `
   Startover.appendChild(p)
   playgame = false
   newgame()
}

function newgame(){
   const newgame =  document.querySelector("#newgame")
   newgame.addEventListener("click", function(e){
    Randomvalue = Math.floor((Math.random() * 100) + 1);
    prevguess = []
    numguess = 1
    Userinput.removeAttribute("disabled")
    guesses.innerHTML = ''
    remaining.innerHTML = `${11 - numguess}`
    Startover.removeChild(p)
    playgame = true
   })
   
}

