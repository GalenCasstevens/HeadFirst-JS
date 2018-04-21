window.onload = init;

function init() {
  var images = document.getElementsByTagName("img");
  for(var i = 0; i < images.length; i++) {
    // images[i].onclick = showAnswer;
    images[i].onmouseover = showAnswer;
  }
}

function showAnswer(eventObj) {
  // var image = document.getElementById("zero");
  // image.src = "./img/zero.jpg";

    var image = eventObj.target;

    var name = image.id;
    name = "./img/" + name + ".jpg";
    console.log(name);
    image.src = name;

    setTimeout(reblur, 2000, image);
}

function reblur(image) {
  var name = image.id;
  name = "./img/" + name + "blur.jpg";
  image.src = name;
}
