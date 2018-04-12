function init() {
  var greenPlanet = document.getElementById("greenPlanet");
  setTimeout(function() {
    greenPlanet.setAttribute("class", "redtext");
    greenPlanet.innerHTML = "Red Alert: hit by phaser fire!";
  }, 5000);
}
window.onload = init;
