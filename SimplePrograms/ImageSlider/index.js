
let icons = document.querySelectorAll(".slides img");
let index = 0;
let intervalId = null;
function initSlider(){
 intervalId =  setInterval(nextslide,1000);
}

initSlider();

function nextslide(){
  index++;
  showslide();
}

function prevslide(){
  clearInterval(intervalId);
  index--;
  showslide();
}

function showslide(){
  console.log(`collections of icon:${icons.length}`);
  if(index >= icons.length){
    index = 0;
  } else if(index < 0){
    index = icons.length -1;
  }
   console.log(`current index:${index}`)
  icons.forEach((icon)=>{
    icon.classList.remove("visible");
  });

  icons[index].classList.add("visible");
}