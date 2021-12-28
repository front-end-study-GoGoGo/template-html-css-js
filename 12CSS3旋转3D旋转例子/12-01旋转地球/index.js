function initiate() {
  var TO_RADIANS = Math.PI/180;
	var canvas = document.getElementById("mainstage");
	var context = canvas.getContext("2d");
  canvas.width = document.getElementById("canvasContainer").clientWidth;
  canvas.height = document.getElementById("canvasContainer").clientHeight;
  var bubbleArray = [];
  setUpArray(bubbleArray);
	main();
	var then = Date.now();
  function main() {
	  var now = Date.now();
	  var delta = now - then;
	  update();
	  render();
	  then = now;
	  requestAnimationFrame(main);
	};
  function setUpArray(array) {
    let startColors = [
      "rgba(218,104,11,1)", // orange
      //"rgba(45,0,0,1)", // deep deep red
      //"rgba(226,13,23,1)", // red
      //"rgba(143,7,7,1)", // deep red
      "rgba(255,246,76,1)", // yellow
      "rgba(255,246,76,1)", // yellow
      //"rgba(255,255,255,1)", // white
    ];
    let endColors = [
      "rgba(218,104,11,0)", // orange
      //"rgba(45,0,0,0)", // deep deep red
      //"rgba(226,13,23,0)", // red
      //"rgba(143,7,7,0)", // deep red
      "rgba(255,246,76,0)", // yellow
      "rgba(255,246,76,0)", // yellow
      //"rgba(255,255,255,0)", // white
    ]
    for(y=0;y<150;y++) {
      var angle = Math.round(Math.random() * 360);
      var targetAngle = Math.round(Math.random() * 360);
      var init = new Date();
      var colorPick = Math.floor(Math.random() * startColors.length);
      var object = {
        id:y,
        initiation:0,
        speed:Math.random(),
        angle:angle,
        targetAngle: targetAngle,
        innerSize:Math.random() + 1,
        outerSize:Math.random() * 20 + 2,
        x:Math.floor(Math.random() * canvas.width),
        y:Math.floor(Math.random() *canvas.height),
        color:startColors[colorPick],
        endColor:endColors[colorPick],
      }
      array.push(object);
    }
  }

  function update() {
    for(y=0;y<bubbleArray.length;y++) {
      if(bubbleArray[y].x < -25 || bubbleArray[y].x > canvas.width + 25 ||
         bubbleArray[y].y < -25 || bubbleArray[y].y > canvas.height + 25) 
        {
         bubbleArray[y].x = Math.floor(Math.random() * canvas.width);
         bubbleArray[y].y = Math.floor(Math.random() * canvas.height);
         bubbleArray[y].innerSize = Math.random() + 1,
         bubbleArray[y].outerSize = Math.random() * 20 + 3,
         bubbleArray[y].initiation = 0.20;
         bubbleArray[y].angle = Math.round(Math.random() * 360);
         bubbleArray[y].targetAngle = Math.round(Math.random() * 360);
        }
        else {
           bubbleArray[y].angle += Math.random() * .50 - 0.25;
        }
        bubbleArray[y].x -= bubbleArray[y].speed * Math.cos(bubbleArray[y].angle * TO_RADIANS);
		    bubbleArray[y].y += bubbleArray[y].speed * Math.sin(bubbleArray[y].angle * TO_RADIANS);
        if(bubbleArray[y].initiation > 0.15) {
           bubbleArray[y].initiation -= 0.03;
        }
        else {
        bubbleArray[y].initiation -= 0.0001;
        }
      } 
  }
  
  function render() {
    context.clearRect(0,0,canvas.width,canvas.height);
    for(y=0;y<bubbleArray.length;y++) {
      renderEntity(bubbleArray[y]);
    }
  }

  function renderEntity(object) {
  context.strokeStyle="transparent";
  context.beginPath();
  var opacity = object.initiation;
  var gradient = context.createRadialGradient(object.x, object.y, object.innerSize, object.x, object.y, object.outerSize);
  gradient.addColorStop(0.000, object.color);
  gradient.addColorStop(1.000, object.endColor);
  context.fillStyle = gradient;
  context.arc(object.x,object.y, 25, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  }
}
initiate();

doStars();

function doStars() {
  let width = document.body.clientWidth;
  let height = document.body.clientHeight;
  for(y=0;y<200;y++) {
    var star = document.createElement('div');
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.zIndex = "-1";
    star.style.backgroundColor = "rgba(255,255,255,1)";
    star.style.borderRadius = "180px";
    star.style.position = "absolute";
    star.style.opacity = 0.5;
    star.style.zIndex = -10000;
    star.style.left = Math.floor(Math.random() * width) + 'px';
    star.style.top = Math.floor(Math.random() * height) + 'px';
    if( y < 100 ) {
    star.style.animation = "starShine";
    star.style.animationIterationCount = "infinite"
    star.style.animationTimingFunction = "linear";
    star.style.animationDuration = Math.floor(Math.random() * 5 + 5) + "s";
      }
    document.body.append(star);
  }
}

document.body.addEventListener("click", function(){shootingStar()});

function shootingStar() {
  let width = document.body.clientWidth;
  let height = document.body.clientHeight;
  let star = document.createElement('div');
  let starId = "star" + new Date().getTime();
  star.id = starId;
  let starSparkle = document.createElement('div');
  let starTail = document.createElement('div');
  starTail.className = "starTail";
  starSparkle.className = "starSpearhead";
  starTail.style.width = "1px";
  starTail.style.height = "35px";
  starTail.style.zIndex = "-1";
  starTail.style.background = "radial-gradient(circle at top center, rgba(255,255,255,1) 0%, rgba(2,0,36,0) 85%)";
  starTail.style.borderRadius = "180px";
  star.style.position = "absolute";
  star.style.opacity = 0;
  star.style.zIndex = -10000;
  star.style.left = Math.floor(Math.random() * width) + 'px';
  star.style.top = Math.floor(Math.random() * height) + 'px';
  let rotation = Math.floor(Math.random() * 4) + 1;
  starTail.style.transform = "rotate(" + (45 + ((rotation * 90)))  + "deg)";
  star.style.animation = "shootingStarAnimation" + rotation;
  star.style.animationIterationCount = 1; //"infinite";
  star.style.animationTimingFunction = "linear";
  star.style.animationDuration = Math.floor(Math.random() * 2 + 1) + "s";
  document.body.append(star);
  document.getElementById(starId).append(starSparkle);
  document.getElementById(starId).append(starTail);
};

function shootingStarsFire() {
  setTimeout(function(){ shootingStar(); shootingStarsFire() }, (Math.random() * 500) + 1000 );
}

shootingStarsFire();