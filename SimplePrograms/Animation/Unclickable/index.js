  let button = document.getElementById("noBtn");

  button.addEventListener("click",(event)=>{
    console.log(button.offsetHeight,button.offsetWidth);
    button.style.height = `${button.offsetHeight+10}px`;
    button.style.width = `${button.offsetWidth+10}px`;
    console.log(button.offsetHeight,button.offsetWidth);
  })

  button.addEventListener("mouseover",(event)=>{

    console.dir(window);
    let ycord = Math.trunc(Math.random()*(window.innerHeight - button.offsetHeight));
    let xcord = Math.trunc(Math.random()*(window.innerWidth - button.offsetWidth));

    button.style.left = `${xcord}px`;
    button.style.top =`${ycord}px`;
  })


  //this one is without animation