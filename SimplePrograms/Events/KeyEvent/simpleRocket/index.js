const rocket = document.querySelector(".space");


let x=0;
let y=0;

document.addEventListener("keydown",(event)=>{

  switch(event.key){
    case "ArrowUp":
        y-= 20;
        console.log("move up");
        break;
    case "ArrowLeft":
        x-=20;
        console.log("move left");
        break;
    case "ArrowRight":
        x+=20;
        console.log("move right");
        break;
    case "ArrowDown":
        y+=20;
      console.log("move down");
        break;
  }

  rocket.style.top = `${y}px`;
  rocket.style.left = `${x}px`;
})

document.addEventListener("keyup",(event)=>{

})