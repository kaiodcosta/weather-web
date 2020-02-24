$(document).ready(function() {
  var appid = "2575f65267f3ba480f38e4dcc7d70a02";
  $(".button").click(function() {
    var cityName = $(".input").val();
    var apiPath = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid="+appid;
    $.getJSON(apiPath, function(data) {
      console.log(data);
      
      $(".description").text("Description: "+data.weather[0].description);
      $(".weather").text("Weather: "+data.weather[0].main);
      $(".tem").text("Temperature: "+data.main.temp+"°C");
      $(".pressure").text("Pressure: "+data.main.pressure+"hpa");
      $(".humidity").text("Humidity: "+data.main.humidity+"%");
      $(".visibility").text("Visibility: "+data.visibility+"m");
      $(".wind-speed").text("Wind speed: "+data.wind.speed+"km/h")
    });
  });
});