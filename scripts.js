var min = 1;
var max= 255;

function getRandomNumber() {
  return Math.floor( Math.random() * max) + min;
}

$('.random').on('click', function() {
  var numberone =getRandomNumber();
  var numbertwo = getRandomNumber();
  var numberthree =getRandomNumber();
  var randomColor = 'rgb('+ numberone + ',' + numbertwo + ',' + numberthree +')';
  $('body').css("background-color", randomColor);
});

$('.reset').on('click', function() {
  $('body').css("background-color", "#FFFFFF");
});
