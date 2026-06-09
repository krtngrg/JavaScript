const button=document.querySelector("#btn2");
const yesbutton=document.querySelector("#btn1");
const reply=document.querySelector("#answer");
let span = document.querySelector("#love");

let emoji= 0;
yesbutton.addEventListener('click',()=>{
    if(emoji == 0){
        reply.innerHTML = "<h1>I knew you'd say yes. 😳</h1>";
        emoji =1; 
    }else{
        reply.innerHTML = "<h1>  Now it's just a matter of picking a time and place.. 😊</h1>"; 
        emoji=0;   
    }
});

yesbutton.addEventListener('mouseover',()=>{
    span.style.fontSize =  "40px";
    span.style.transition = ".5s";
});

yesbutton.addEventListener('mouseout',()=>{
    span.style.fontSize =  "24px";
    span.style.transition = ".5s";
});

[("mouseover")].forEach(function (type) {
button.addEventListener(type, function (e) {
    
    const top = getRandomNum(window.innerHeight - this.offsetHeight); 
    const left = getRandomNum(window.innerWidth - this.offsetWidth);

    console.log(`calculated top:${top} left:${left}`); 

    moveElement(this, left, top);

setTimeout(()=>{
    const rect = this.getBoundingClientRect();
    console.log(`Viewport top:${rect.top} left:${rect.left}`);
},2000);

});
}); 

const moveElement = (element, x, y) => {
    anime({
        targets: element,
        left: `${x}px`,
        top: `${y}px`,
        easing: "easeOutElastic(1, .5)"
    });
};
    
    const getRandomNum = (num) => { 
           return Math.floor(Math.random() * num);
    }

