
let imgdiv = document.getElementById("myimg");
let field,input;

document.getElementById("Btn").onclick = function(){
    field = document.getElementById("mynum");
    input = field.value;

if(input>5){
    field.value = 5;
    input=5;
}else if(input<1){
    field.value = 1;
    input=1;
}

    const imgAvalue = [];
    for(let i=0;i<input;i++){
         let random = String(Math.ceil(Math.random() * 6));
    
          imgAvalue.push(`<img src="dice_imgs/${random}.png" width="200" height="200">`)
          imgAvalue.push(random);
    }
  
    imgdiv.innerHTML = imgAvalue.join(' ');

}


