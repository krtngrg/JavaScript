
let name;
const front = document.getElementById("fe");
const back = document.getElementById("be");
const male = document.getElementById("male");
const female = document.getElementById("female");
const Button = document.getElementById("Btn");

Button.onclick = function(){
    name = document.getElementById("myname").value;
    console.log(`Name is saved as ${name}`)

    if(front.checked){
        console.log("User knows frontend")
    }

    if(male.checked){
        console.log("User is male")
    }else{
        console.log("User is female")
    }

}
