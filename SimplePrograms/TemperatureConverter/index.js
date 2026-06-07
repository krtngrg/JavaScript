

let input;
let button = document.getElementById("Btn");
let celsius = document.getElementById("cel");
let fahrenheit = document.getElementById("fah");
let result = document.getElementById("result");

 function convert(){
   input = document.getElementById("mytemp");

   if(celsius.checked){
    let temp = Number(input.value)
    temp = (temp * 9/5)+ 32;
   result.textContent = temp+ "°F";
   }else if(fahrenheit.checked){
     let temp = Number(input.value)
    temp = (temp-32)*5/9;
   result.textContent = temp+ "℃";
   }else{
    result.textContent = "Select mode first";
   }


}

