
let button = document.getElementById("Btn");
const result = document.getElementById("result")
let passlength= document.getElementById("mypass");
let uppmode = document.getElementById("upp");
let lowmode = document.getElementById("low");
let nummode = document.getElementById("num");
let symmode = document.getElementById("sym");
let password;

function generatepass(passlength,uppmode,lowmode,nummode,symmode){

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_";
  let passspace="";
  let password="";

  passspace += uppmode ? uppercase : "";
  passspace += lowmode? lowercase : "";
   passspace += nummode? numbers : "";
    passspace += symmode? symbols : "";

  if(passspace==""){
    console.log("Please select at least one condition");
  }


  for(let i=0;i<passlength;i++){
    let ranindex = Math.trunc((Math.random()*passspace.length));
    password += passspace[ranindex];
  }
  return password;
}


function convert(){
  let pp = Number(passlength.value);
  let up = false;
  let low = false;
  let num = false;
  let sym = false;
  
  if(uppmode.checked){
    up= true;
  }
    if(lowmode.checked){
    low= true;
  }
    if(nummode.checked){
    num= true;
  }
    if(symmode.checked){
     sym= true;
  }
  password = generatepass(pp,up,low,num,sym)
  result.textContent = password
}

console.log(password)
