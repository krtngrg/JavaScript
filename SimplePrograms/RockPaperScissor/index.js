

let items = document.querySelectorAll(".item");
let array = ["rock","paper","scissor"];
let emoji = ['🗿', '📄','✂️']
let display = document.getElementById("result");
let you = document.getElementById("you");
let comp= document.getElementById("comp");
let scorecard = document.querySelector(".left");

let score = 0;

items.forEach((item)=>{
  let label = document.createElement("label");
  label.textContent = item.id;
  item.append(label);
})

items.forEach((item)=>{
  item.addEventListener("mouseover",()=>{
    item.firstChild.style.color = "red";
    item.firstChild.style.fontSize = "20px";
  })
})

items.forEach((item)=>{
  item.addEventListener("mouseout",()=>{
    item.firstChild.style.color = "black";
    item.firstChild.style.fontSize = "15px";
  })
})


items.forEach((item)=>{
  item.addEventListener("click",()=>{
    let element = item.firstChild.textContent;
    let randomindex = Math.trunc(Math.random() * 3);
    let computerpick = array[randomindex];

    you.textContent = emoji[array.indexOf(element)];
    comp.textContent = emoji[array.indexOf(computerpick)];
    let result = fight(element,computerpick);
    
    switch(result){
      case 0:
        score += 0;
      display.textContent = "It's a draw";
      break;

      case 1:
        score += 10;
        display.textContent= "Congrats you won";
        break;

        case 2:
          score -= 10;
          display.textContent= "Opps you lost";
    }
    display.style.visibility = "visible";
   scorecard.textContent = `Score: ${score}pts`
  })
})


let fight = (you,computer)=>
{
  if(you === computer){
    return 0;
  }
  
  let index;
  
  switch(you){
    case "rock":
      index = computer==="paper"? 2 : 1;
      break;
      case "paper":
      index = computer==="scissor"? 2 : 1;
      break;
      case "scissor":
      index = computer==="rock"? 2 : 1;
      break;
  }

  return index;
  
}

