window.onload = displayTime;

function randomNumberGenerator(num) {
  return randomNumber = Math.floor(Math.random() * num) + 1;
}

function displayTime(){
  var elt = document.getElementById("clock");
  var now = new Date();
  elt.innerHTML = now.toLocaleTimeString();
  setTimeout(displayTime, 1000);
  //setInterval(displayTime,1000);
}

function myFunction() {
  var rand1 = randomNumberGenerator(6);
  var rand2 = randomNumberGenerator(6);

  var player1 = 'dice' + rand1 + '.png';
  var player2 = 'dice' + rand2 + '.png';


  /*var image1 = document.querySelectorAll("img")[0];
  var image2 = document.querySelectorAll("img")[1];*/
  var image1 = document.images[0];
  var image2 = document.images[1];

  image1.setAttribute("src", "images/" + player1);
  image2.setAttribute("src", "images/" + player2);

  if (rand1 > rand2) {
    document.querySelector("h1").innerHTML = "Player1 Wins..!"
    document.images[0].style.transform = "scaleY(1.5)";
    document.images[0].style.transform = "none";
  } else if (rand2 > rand1) {
    document.querySelector("h1").innerHTML = "Player2 Wins..!"
    document.images[1].style.transform = "scaleX(1.5)";
    document.images[1].style.transition = "all 2s";
  } else {
    document.querySelector("h1").innerHTML = "Draw..!"
  }

}
