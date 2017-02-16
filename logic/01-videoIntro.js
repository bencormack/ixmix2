var header, vid, captionArray, touchToStart;
var currentTime = 0;
var frameTime = 2.25;
var fadeTime = 1.5;

window.onload = function() {
    header = document.getElementsByTagName('header')[0];
    vid = document.getElementById("introVideo");
    body = document.getElementsByTagName('body')[0];
    touchToStart = document.getElementById('touchToStart');
    
    header.style.top = '-75px';
    TweenMax.to(header, 2, {top:0, ease:Power3.easeOut});
    
    touchToStart.addEventListener('click', clickStart);
    
    captionArray = [];
    currentTime -= (fadeTime / 2);
    
    for (var i = 0; i < body.getElementsByTagName('p').length; i++) {
        captionArray.push(body.getElementsByTagName('p')[i]);
        TweenMax.to(captionArray[i], fadeTime, {opacity:1, delay:currentTime += fadeTime});
        TweenMax.to(captionArray[i], fadeTime, {opacity:0, delay:currentTime += frameTime});
    }
    
    vid.play();
    vid.onended = function() {
        vid.pause();
        window.location.href = '03-HowDoYouCompare.php';
    }
}

function clickStart() {
    window.location.href = '04-logins.php';
}