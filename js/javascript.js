var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function navFunction() {
  var x = document.getElementById("myNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//https://stackoverflow.com/questions/28266651/change-header-background-colour-when-page-scrolls
jQuery(window).on('scroll', function() {
  if(jQuery(window).scrollTop() > 80) {
      // jQuery('#header').css('background-color', 'white');
      jQuery('#header').css('-webkit-box-shadow', '4px 4px 16px 0px rgba(0,0,0,0.26)');
      jQuery('#header').css(' box-shadow', '4px 4px 16px 0px rgba(0,0,0,0.26)');
  } else {
    //  jQuery('#header').css('background-color', 'white');
     jQuery('#header').css('-webkit-box-shadow', '0px 0px 0px 0px rgba(0,0,0)');
     jQuery('#header').css(' box-shadow', '0px 0px 0px 0px rgba(0,0,0)');
  }
});
//https://codepen.io/sarahwfox/pen/pNrYGb

// ]]>


var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex4-1].style.display = "block";  
}





var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex3-1].style.display = "block";  
}



var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "block";  
}




var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// https://webdesign.tutsplus.com/tutorials/how-to-hide-reveal-a-sticky-header-on-scroll-with-javascript--cms-33756
// https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
