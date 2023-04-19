//left button

var button = document.getElementById('button-left');

button.onclick = function() {
    var div = document.getElementById('tab-left');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

//right button

var button = document.getElementById('button-right');

button.onclick = function() {
    var div = document.getElementById('tab-right');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};


//slide
//
// var slideIndex = 1;
// showDivs(slideIndex);
//
// function plusDivs(n) {
// showDivs(slideIndex += n);
// }
//
// function showDivs(n) {
// var i;
// var x = document.getElementsByClassName("mySlides");
// if (n > x.length) {slideIndex = 1}
// if (n < 1) {slideIndex = x.length}
// for (i = 0; i < x.length; i++) {
//   x[i].style.display = "none";
// }
// x[slideIndex-1].style.display = "block";
// }
//

//AutoSlide

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

//navbar

function openNavleft() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNavleft() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//navbar right

function openNavright() {
  document.getElementById("mySidebar2").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

function closeNavright() {
  document.getElementById("mySidebar2").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}
