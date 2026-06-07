

const result = document.getElementById("result");
let button = document.getElementById("Btn");
let pack1 = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

// let collection = "";
// pack1.forEach((i)=>collection+= " "+i)
// result.textContent = collection;

let label = pack1.join(" ");
result.textContent = label;

// Fisher-Yates Algorithm
function shuffle(pack){
  for(let i=pack.length-1;i>0;i--){
    let random = Math.trunc(Math.random()*(i+1));
    [pack[i],pack[random]] = [pack[random],pack[i]];
  }
}

button.onclick = function(){
  console.log("shuffling");
  shuffle(pack1);
  let label = pack1.join(" ");
  result.textContent = label;

}
