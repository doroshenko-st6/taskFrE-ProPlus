$('.works-slider').slick({
  dots: true,
  arrows: false
});

$('.project-grig').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="./img/icons/prevarrow.svg" alt="prev"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="./img/icons/nextarrow.svg" alt="next"></button>'
});

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.2),
      zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

let dots = document.querySelector('.slick-dots');


