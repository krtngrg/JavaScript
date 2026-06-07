


let seconds = 7265;

// easier to interpret
let hour = Math.trunc(seconds/(60 * 60));
let minute = Math.trunc((seconds%(60*60))/60);
let second = Math.trunc((seconds%(60*60))%60);

console.log(`${hour}:${minute}:${second}`);



// shorter version
// let hour = Math.trunc(seconds / 3600);
// let minute = Math.trunc(seconds / 60) % 60;
// let second = seconds % 60;

// console.log(`${hour}:${minute}:${second}`);