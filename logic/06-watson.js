var c = document.getElementById('circleCanvas');
var ctx = c.getContext('2d');
var animationDirection = 'forward';
var currentPercentage = 1;
var gradient1;
var renPercentageText = document.getElementById('renPercentageText');
var realPercentageText = document.getElementById('realPercentageText');
var tts1 = document.getElementById('tts1');
var tts2 = document.getElementById('tts2');

window.onresize = redrawCanvas;
redrawCanvas();
intervalCircleDraw();

window.onload = function() {
    animateDial(realistPercentage);
}

function animateDial(targetValue) {
    tts2.style.display = "block";
    tts2.style.opacity = .3;
    TweenMax.set([c, renagadeText, realistText, tts1, tts2], {scale:.8, opacity:0, transformOrigin:'50% 50%'});
    TweenMax.to(c, 2, {scale:1, opacity:1, ease:Power1.easeOut, delay:1, transformOrigin:'50% 50%'});
    TweenMax.to([renagadeText, realistText, tts1, tts2], 1, {scale:1, opacity:1, ease:Power1.easeOut, delay:1, transformOrigin:'50% 50%'});
    TweenMax.to(this, 7.5, {currentPercentage:targetValue, onUpdate:intervalCircleDraw, ease:Power1.easeInOut});
}

function intervalCircleDraw() {
    if (animationDirection == 'forward' && currentPercentage < 100) {
        drawCircles(currentPercentage);
    } else {
        if (currentPercentage > 2) {
            animationDirection = 'backward';
        } else {
            animationDirection = 'forward';
        }
        drawCircles(currentPercentage);
    }
}

function redrawCanvas() {
    c.width = window.innerWidth * .5;
    c.height = window.innerHeight * .5;
    drawCircles(currentPercentage);
}

function drawCircles(input) {
    var percentage = input;
    if (percentage > 100) { percentage = 100; };
    if (percentage < 0) { percentage = 0; };
    var startEnd = ((percentage / 50) * Math.PI) / 2;
    var circleDiameter;
    var circleLineWidth;
    var centerPoint;

    if (percentage > 100) { percentage = 100; };
    if (percentage < 0) { percentage = 0; };

    realPercentageText.innerHTML = Math.round(percentage) + '%';
    renPercentageText.innerHTML = (100 - Math.round(percentage)) + '%';

    if (c.width < c.height) {
        circleLineWidth = c.width * .08;
        circleDiameter = c.width * .9;
        centerPoint = c.width / 2;
    } else {
        circleLineWidth = c.height * .08;
        circleDiameter = c.height * .9;
        centerPoint = c.height / 2;
    }
    circleRadius = circleDiameter / 2;

    ctx.clearRect(0, 0, c.width, c.height);

    gradient1 = ctx.createLinearGradient(0, 0, circleDiameter, 0);
    gradient1.addColorStop('0', "#00AC99");
    gradient1.addColorStop('1', "#005E51");
    gradient2 = ctx.createLinearGradient(0, 0, circleDiameter, 0);
    gradient2.addColorStop('0', "#9CF4DF");
    gradient2.addColorStop('1', "#A7FAE6");

    ctx.beginPath();
    ctx.lineWidth = circleLineWidth;
    ctx.strokeStyle = gradient1;
    ctx.lineCap = 'round';
    ctx.arc(c.width / 2, c.height / 2, circleRadius, 45 + startEnd, 45 + (2 * Math.PI) - startEnd);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = circleLineWidth;
    ctx.strokeStyle = gradient2;
    ctx.lineCap = 'round';
    ctx.arc(c.width / 2, c.height / 2, circleRadius, 45 - startEnd, 45 + startEnd);
    ctx.stroke();
    
    TweenMax.set(c, {left:(window.innerWidth - c.width) / 2, top:75 + (((window.innerHeight - 75) - c.height) / 2)});
}
