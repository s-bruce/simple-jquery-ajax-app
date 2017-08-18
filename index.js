$(document).ready(function(){
  $.get("https://swapi.co/api/planets", function(data){
    data.results.forEach(planet => {
      if (planet.climate.includes("temperate")) {
        let newDiv = $("<div class='planet'></div>").appendTo("#content-div")
        newDiv.text(planet.name)
      }
    })
  })
})
