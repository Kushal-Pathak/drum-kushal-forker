for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener(
    "click",
    function () {
      var audio = new Audio("sounds/" + i + ".mp3");
      audio.play();
    }
  );
}

document.addEventListener("keypress", function (e) {
    if(e.key === 'w'){
        var audio = new Audio("sounds/0.mp3");
        audio.play();
    }
    if(e.key === 'a'){
        var audio = new Audio("sounds/1.mp3");
        audio.play();
    }
    if(e.key === 's'){
        var audio = new Audio("sounds/2.mp3");
        audio.play();
    }
    if(e.key === 'd'){
        var audio = new Audio("sounds/3.mp3");
        audio.play();
    }
    if(e.key === 'j'){
        var audio = new Audio("sounds/4.mp3");
        audio.play();
    }
    if(e.key === 'k'){
        var audio = new Audio("sounds/5.mp3");
        audio.play();
    }
    if(e.key === 'l'){
        var audio = new Audio("sounds/6.mp3");
        audio.play();
    }

});
