var header, vid, captionArray, touchToStart;
var currentTime = 5;
var frameTime = 7;
var fadeTime = 1.5;

window.onload = function() {
    header = document.getElementsByTagName('header')[0];
    vid = document.getElementById("introVideo");
    body = document.getElementsByTagName('body')[0];
    touchToStart = document.getElementById('touchToStart');
    
    captionArray = [];
    
    touchToStart.addEventListener('click', clickStart);
    
    for (var i = 0; i < body.getElementsByTagName('p').length; i++) {
        captionArray.push(body.getElementsByTagName('p')[i]);
        TweenMax.to(captionArray[i], fadeTime, {opacity:1, delay:currentTime += fadeTime});
        TweenMax.to(captionArray[i], fadeTime, {opacity:0, delay:currentTime += frameTime});
    }
    
    vid.play();
    vid.onended = function() {
        vid.pause();
        //hide touchToStartBtn
        TweenMax.to(header, 2, {top:'-75px', ease:Power3.easeOut});
        TweenMax.to(vid, fadeTime, {opacity:0, onComplete:function(){
            window.location.href = 'index.php';
        }});
    }
}

function clickStart() {
    window.location.href = '04-logins.php';
}