

let value = Number(document.getElementById("myLabel").textContent);

document.getElementById("Btn1").onclick = function(){
    document.getElementById("myLabel").textContent = 0
}
document.getElementById("Btn2").onclick = function(){
    value++;
    document.getElementById("myLabel").textContent = value;
}

document.getElementById("Btn3").onclick = function(){
    value--;
    document.getElementById("myLabel").textContent = value;
}