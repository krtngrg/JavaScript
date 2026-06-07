

document.getElementById("Btn").onclick = function(){
    let value1 = Math.ceil(Math.random() * 6);
    document.getElementById("myLabel1").textContent = value1

    let value2 = Math.ceil(Math.random() * 6);
    document.getElementById("myLabel2").textContent = value2

    let value3 = Math.ceil(Math.random() * 6);
    document.getElementById("myLabel3").textContent = value3
}
