/* Carousel configuration */

$(document).ready(function(){
  $(".slick-list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

/* Hide navigation bar as user scrolls
x = a variable to store how far the user has scrolled
y = a variable that stores the value of the .scrollTop() property of this
z = a variable that stores the height of the navbar
*/

var x = 0;

$(window).scroll(function(){
  var y = $(this).scrollTop();

  if (y - x > 50) {
    var z = $(".navbar").css("height");
    $(".navbar").animate({top: "-50px"}, 150);
    x = y;
  } else if (x - y > 50) {
    $(".navbar").animate({top: "0px"}, 150);
    x = y;
  };
});
