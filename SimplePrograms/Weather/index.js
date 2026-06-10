

let city = document.getElementById("city");
let button = document.getElementById("Btn");
      let cityDisplay = document.querySelector(".cityDisplay");
      let tempDisplay = document.querySelector(".tempDisplay");
      let HumidDisplay = document.querySelector(".HumidDisplay");
      let emojiDisplay = document.querySelector(".emojiDisplay");
      let errorDisplay = document.querySelector(".errorDisplay");
      let descpDisplay = document.querySelector(".descpDisplay");
      let APIkey = "cf3f6547a58473207987f8a36454912c";


button.addEventListener("click", async (event)=>{
  event.preventDefault();
    let search = city.value;
    if(search){
      errorDisplay.textContent = "";
      try{
      let weatherobject = await fetchWeather(search);
      displayWeather(weatherobject);
      } catch (error){
        console.error(error);
        errorDisplay.textContent = error;
      }
      

    }else{
      errorShow();
    }
})

function displayWeather(obj){
  let celsius = (obj.main.temp - 273.15);
    tempDisplay.textContent = `Temperature:${celsius.toFixed(1)}°C`;
    cityDisplay.textContent = `City:${obj.name}`;
    HumidDisplay.textContent = `Humidity:${obj.main.humidity}%`;
    emojiDisplay.textContent = `${getweatherEmoji(obj.weather[0].id,obj.weather[0].icon)}`;
    descpDisplay.textContent = `${obj.weather[0].main}`;
}

async function fetchWeather(city){
   let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`);
   if(!response.ok){
    throw new Error("Unable to accept request");
   }
   let object = await response.json();
   console.log(object);
  return object;
}

function errorShow(){
  errorDisplay.textContent = "Please enter a valid city!";
}

function getweatherEmoji(id,sun){
    sun = sun.charAt(sun.length-1);
    let emoji = '';
  switch(true){
    case id>=200 && id<300:
      return '⛈️';
      case id>=300 && id<400:
      return '🌧️';
      case id>=500 && id<600:
      return '☔';
      case id>=600 && id<700:
      return '❄️';
      case id>=700 && id<800:
      return '༄';
      case id>=800 && id<900:
        sun === "d" ? emoji =  '☀️' : emoji =  '🌚';
        return emoji; 
  }
}