

let result = document.getElementById("result");
const start = document.getElementById("startBtn");
const stop = document.getElementById("stopBtn");
const reset = document.getElementById("resetBtn");



let time = new Date();
time.setHours(0, 0, 0, 0);
 DisplayTime(time);
let intervalId = null;

start.onclick = function(){
    if(intervalId === null){
         intervalId = setInterval(()=>{
        time.setMilliseconds(time.getMilliseconds()+1);
        DisplayTime(time);
        }
,1);
        console.log("intervalId: "+intervalId);
    }
    }


stop.onclick = function(){
    clearInterval(intervalId);
    console.log("intervalId: "+intervalId+" stopped");
    intervalId = null;
}

reset.onclick = function(){
    clearInterval(intervalId);
     
    time = resetTime(time);
    DisplayTime(time);
    intervalId = null;
}

function DisplayTime(time){

let hour = time.getHours().toString().padStart(2,"0");
let Seconds = time.getSeconds().toString().padStart(2,"0");
let minute = time.getMinutes().toString().padStart(2,"0");
let ms = time.getMilliseconds().toString().padStart(2,"0");

result.textContent = `${hour}:${minute}:${Seconds}:${ms}`;

}


function resetTime(time){
    time.setHours(0, 0, 0, 0);
    return time;
}