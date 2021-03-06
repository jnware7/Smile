$(".user-img").hide().delay(500)
$(".user-img").slideDown( "slow" )

$(".home-quote").delay(500).fadeOut(5000);
$(".loader").delay(10).fadeOut(2000)



$(".user-welcome").hide()
$(".user-welcome").delay(500).fadeIn(4000);

$(".home-quote2").hide()
$(".home-author2").hide()
$(".copyright").hide()

$(".home-quote2").delay(5000).fadeIn(5000);
$(".home-author2").delay(5000).fadeIn(5000);
$(".copyright").delay(6000).fadeIn(5000);

// const like = document.getElementById('heart-like')
//
// like.addEventListener('click', function() {
//   const quoteId = document
//     .getElementById('quote-id')
//     .innerText
//
//   const headers = new Headers({
//     'Content-Type' : 'application/json',
//   })
//
//   const options = {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({ likes: true }),
//   }
//
//   const likesUrl = `/quotes/likes/${parseInt(quoteId)}`
//
//   fetch(likesUrl, options)
//     .then(response => response.json())
//     .then(console.log)
// })

// Bouncing Balls. By Rob Glazebrook
// The balls are randomized in size, color, opacity, and bounce direction. They'll bounce off the walls of their container and generally make a rather pretty show of things.

var ballCount = 35,
    ballMinSize = 40,
    ballMaxSize = 125,
    container = $('.balls');

$(function() {
  initBalls();
  balls = window.setInterval(moveBalls,40); // 24 FPS
  $(window).resize(function() { moveBallsIntoBounds(); });
});

// Random number generator. Takes a minimum, maximum, and a boolean for whether the random number should be an integer.
function rand(min,max,isInt) {
  var min = min || 0,
      max = max || 1,
      isInt = isInt || false,
      num = Math.random()*(max - min) + min;
  return (isInt) ? Math.round(num) : num;
}

// Creates the balls, puts them in the container, and gives them a random size, color, opacity, starting location, and direction/speed of movement.
function initBalls() {
  container.css({'position':'relative'});
  for (i=0;i<ballCount;i++) {
    var newBall = $('<b />').appendTo(container),
        size = rand(ballMinSize,ballMaxSize);
    newBall.css({
      'position':'absolute',
      'width': size+'px',
      'height': size+'px',
      'opacity': rand(.1,.8),
      'background-color': 'rgb('+rand(0,255,true)+','+rand(0,255,true)+','+rand(0,255,true)+')',
      'top': rand(0,container.height()-size),
      'left': rand(0,container.width()-size)
    }).attr({
      'data-dX':rand(-10,10),
      'data-dY':rand(1,10)
    });
  }
}

// Moves the balls based on their direction/speed of movement (saved as a data attribute). If the movement will take them outside of the container, they reverse direction along that axis.
function moveBalls() {
  var maxX = container.width(),
      maxY = container.height();
  $('b',container).each(function(i,b) {
    var ball = $(b),
        pos = ball.position()
        x = pos.left,
        y = pos.top,
        dX = parseFloat(ball.attr('data-dX')),
        dY = parseFloat(ball.attr('data-dY')),
        size = ball.height();
    if(x+dX+size > maxX || x+dX < 0) ball.attr('data-dX',(dX=-dX));
    if(y+dY+size > maxY || y+dY < 0) ball.attr('data-dY',(dY=-dY));
    ball.css({'top':y+dY,'left':x+dX});
  });
}

// Move the balls back within the bounds of the container if the window (ergo, possibly the container) is resized. Because we're positioning from the top/left corners, we only have to worry about the bottom/right sides.
function moveBallsIntoBounds() {
  var maxX = container.width(),
      maxY = container.height();
  $('b',container).each(function(i,b) {
    var ball = $(b),
        pos = ball.position()
        x = pos.left,
        y = pos.top,
        size = ball.height();
    if (x+size > maxX) ball.css({ left: maxX-size+'px' });;
    if (y+size > maxY) ball.css({ top: maxY-size+'px' });;
  });
}
