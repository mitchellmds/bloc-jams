var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(point) {

  var points = [
    "points.style.opacity = 1;",
    "points.style.transform = \"scaleX(1) translateY(0)",
    "points.style.msTransform = \"scaleX(1) translateY(0)",
    "points.style.WebkitTransform = \"scaleX(1) translateY(0)"
  ]
  var forEach = function(points) {
    console.log(points);

  };

  points.forEach(forEach);



  };

  window.onload = function() {
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }

     var sellingPoints = document.getElementsByClassName('selling-points')[0];

     window.addEventListener('scroll', function(event) {
         console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
         if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);
         }
     });
 }
