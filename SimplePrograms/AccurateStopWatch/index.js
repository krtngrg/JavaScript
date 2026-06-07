

let result = document.getElementById("result");
const start = document.getElementById("startBtn");
const stop = document.getElementById("stopBtn");
const reset = document.getElementById("resetBtn");

let intervalId = null;
let elapsed = 0;

start.onclick = function(){
    if(intervalId == null){
   starttime = Date.now() - elapsed;
   intervalId =  setInterval(()=>DisplayTime(starttime), 10);
    }
}

stop.onclick = function(){
    clearInterval(intervalId);
    console.log("intervalId: "+intervalId+" stopped");
    intervalId = null;
}

reset.onclick = function(){
    clearInterval(intervalId);
    result.textContent = "00:00:00:00";
    elapsed = 0;
    intervalId = null;
}

function DisplayTime(starttime){
    let current = Date.now();
    elapsed = current - starttime;
    let hour = Math.trunc(elapsed/ (1000 * 60 * 60)).toString().padStart(2,"0");
    let minute = Math.trunc((elapsed/ (1000 * 60)) % 60).toString().padStart(2,"0");
    let Seconds =   Math.trunc((elapsed/ 1000) % 60).toString().padStart(2,"0");
    let ms = Math.trunc(elapsed % 1000 /10).toString().padStart(2,"0");

    result.textContent = `${hour}:${minute}:${Seconds}:${ms}`;

}


