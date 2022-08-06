  var count = 50;
  var count2 = 50;

window.onkeydown = function () {
  console.log(event.keyCode);
  var character1 = document.getElementById("character");
  var character2 = document.getElementById("character2");

  if (event.keyCode === 39) {
    character1.src = "zato-tauntz2.gif";
    if (count <= 1100) {
      count = count + 50;
      character1.style.left = count + "px";
      setTimeout(function () {
        character1.src = "zato-tauntz2.gif";
      }, 100);
    } 
  }
  if (event.keyCode === 37) {
    character1.src = "zato-tauntz2.gif";
    if (50 <= count) {
      count = count - 50;
      character1.style.left = count + "px";
    setTimeout(function () {
      character1.src = "zato-tauntz2.gif";
    }, 100);
    }
  }
  if (event.keyCode === 17) {
    character1.src = "zato-executor2.gif";
    setTimeout(function () {
      character1.src = "zato-tauntz2.gif";
    }, 1300);
  }
  if (event.keyCode === 38) {
    character1.src = "zato-demonfly2.gif";
    setTimeout(function () {
      character1.src = "zato-tauntz2.gif";
    }, 1000);
  }
  // character two start 

  if (event.keyCode === 65) {
    character2.src = "originalzero-cp2.gif";
    if (50 <= count2) {
      count2 = count2 - 50;
      character2.style.right = count2 + "px";
      setTimeout(function () {
        character2.src = "originalzero-cp2.gif";
      }, 100);
    }
  }
  if (event.keyCode === 68) {
    character2.src = "originalzero-cp2.gif";
    if (count2 <= 1100) {
      count2 = count2 + 50;
      character2.style.right = count2 + "px";
      setTimeout(function () {
        character2.src = "originalzero-cp2.gif";
      }, 100);
    }
  }
  if (event.keyCode === 70) {
    character2.src = "original-zero-sc.gif";
    setTimeout(function () {
      character2.src = "originalzero-cp2.gif";
    }, 600);
  }
  if (event.keyCode === 87) {
    character2.src = "originalzero-cloak.gif";
    setTimeout(function () {
      character2.src = "originalzero-cp2.gif";
    }, 1300);
  }
};