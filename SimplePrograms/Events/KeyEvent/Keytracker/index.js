const screen = document.querySelector(".space");


document.addEventListener("keydown",(event)=>{
screen.textContent = `Key pressed : ${event.key}`;
})