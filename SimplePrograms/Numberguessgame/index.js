

let hidden = document.getElementById("hidden");
let button = document.getElementById("Btn");
let result = document.getElementById("result");

button.onclick = function(){
    let random = Math.trunc(Math.random() * (100) + 1);
    let guess = document.getElementById("mynum");

    hidden.textContent = random
    if(guess.value == random){
        result.textContent = "Congrats you have guessed successfully🎉!!"
    }else{
        result.textContent = "Opps the guess is wrong😅!"
    }

}
