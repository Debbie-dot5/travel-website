let showNavBar = document.getElementById('showNavBar');

function togglebtn() {
   showNavBar.classList.toggle("hidemenu");
}





//this is the images  slide 

let i1 = 0;
let images1 = ['africa images/culture.jpg', 'africa images/culture2.jpg', 'africa images/culture3.jpg', 'africa images/culture4.jpg'];
let time1 = 3000;

let i2 = 0;
let images2 = ['africa images/food2.jpg', 'africa images/food4.jpg', 'africa images/food3.jpg',  'africa images/food5.jpg'];
let time2 = 3000;

let i3 = 0;
let images3 = ['africa images/landscape.jpg', 'africa images/landscape2.jpg', 'africa images/landscape3.jpg', 'africa images/landscape4.jpg'];
let time3 = 3000;

// first images slide
function imageSlide1() {
   document.slide1.src = images1[i1];

   if (i1 < images1.length - 1) {
      i1++;
   } else {
      i1 = 0;
   }
}

// second images slide
function imageSlide2() {
   document.slide2.src = images2[i2];

   if (i2 < images2.length - 1) {
      i2++;
   } else {
      i2 = 0;
   }
}

// third images slide
function imageSlide3() {
   document.slide3.src = images3[i3];

   if (i3 < images3.length - 1) {
      i3++;
   } else {
      i3 = 0;
   }
}

function startSlides() {
   imageSlide1();
   imageSlide2();
   imageSlide3();

   setTimeout(startSlides, Math.max(time1, time2, time3));
}

window.onload = startSlides;
