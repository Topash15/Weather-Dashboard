var api = "api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}"

var city = "Orlando"
var state = "Florida"

//input city
//output city name, date, an icon representation of weather conditions,
    // the temperature, the humidity, the wind speed, and the UV index
    //5 day forecast
    //save to search history

var getWeather = function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+","+state+"&units=imperial&appid=4651d3abbd657b19aee9b7e8774d2624"
    ).then(function(response){
        console.log(response.json())
    })
}

getWeather();