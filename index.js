$(document).ready(function(){
  $.get("https://swapi.co/api/planets", function(data){
    data.results.forEach(planet => {
      if (planet.climate.includes("temperate")) {
        console.log(planet.name);
      }
    })
  })
})
