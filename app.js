const apiKey = "84dc4240bb164c5b2bea3df507df0911" ; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric" ;

// getting city name as input 
var searchBox = document.querySelector(".card__search input") ;
var searchBtn = document.querySelector(".card__search button") ;
var weatherIcon = document.querySelector(".weather__icon");


// api call 
async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`)
 
 //checking for invalid city names. 
    if(response.status = 404){
        document.querySelector(".card__error").classList.add("hidden") ;
    }

    var data = await response.json() ; 
    console.log(data)  ;
 
 // changing elements in HTML doc. when function is called
    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
 // changing images according to weather conditions.  
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./assets/clouds.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./assets/drizzle.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./assets/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./assets/rain.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./assets/mist.png"
    }
 // showing the rest of block by removing the class .hidden 
    document.querySelector(".weather").classList.remove("hidden") ;
}

// adding event-listener to searchButton 
searchBtn.addEventListener("click",()=>{
        // API function call 
    checkWeather(searchBox.value) ; 
})

// the previous event "touch" isn't possible on mobile so.. 
searchBtn.addEventListener("touchstart",()=>{
        // API function call 
    checkWeather(searchBox.value) ; 
})
