const div = document.getElementById("mybox");


div.addEventListener("click",(event)=>{
    div.textContent = "State : Clicked";
    div.style.background = "lightgreen";
})

div.addEventListener("mouseover",(event)=>{
    div.textContent = "State : Hover";
    div.style.background = "red";
})

div.addEventListener("mouseout",(event)=>{
    div.textContent = "State : Hoverout";
    div.style.background = "lightpink";
})