

let time = document.getElementById("result");


function updateclock(){
const current = new Date();
let hour = current.getHours();
let meridiem = hour>=12 ? "PM" : "AM";
hour = hour % 12 || 12;
hour = hour.toString().padStart(2,"0");
const minu = current.getMinutes().toString().padStart(2,"0");
const sec = current.getSeconds().toString().padStart(2,"0");;
time.textContent = hour+":"+minu+":"+sec+" "+meridiem;
}
  
  
setInterval(updateclock, 1000);

