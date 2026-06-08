
let screen = document.getElementById("result");
let calculatemode = true;

function appendtoscreen(icon){
    if(calculatemode == true){
    screen.textContent = screen.textContent + icon;
    console.log(screen.textContent)
    }else{
        screen.textContent = "";
        calculatemode = true;
    }
}

function evaluateExp(){

    try{
         screen.textContent = eval(screen.textContent);
    }
    catch(error){
            screen.textContent = "Enter a valid expression";
            calculatemode = false;
    }
    
}

let string = "hello".slice(0,"hello".length-1);
console.log(string);

function clearscreen(){
    screen.textContent = "";
}

function clearicon(){
    let temp = screen.textContent;
    screen.textContent = temp.slice(0,temp.length-1);
}