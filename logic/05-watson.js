var header, vid, realistPcText, renegadePcText, renegadeText, popup, xBtn, nextText;
var currentTime = 0;
var frameTime = 3;
var fadeTime = 2;
var stutterTime = .5;

window.onload = function() {
    header = document.getElementsByTagName('header')[0];
    vid = document.getElementById("introVideo");
    body = document.getElementsByTagName('body')[0];
    realistPcText = document.getElementById('realistPcText');
    renegadePcText = document.getElementById('renegadePcText');
    renegadeText = document.getElementById('renegadeText');
    labelContainerOuter = document.getElementById('labelContainerOuter');
    popup = document.getElementById('popup');
    xBtn = document.getElementById('xBtn');
    nextText = document.getElementById('nextText');
    
    nextText.addEventListener('click', nextPage);
    
    frameTime -= (fadeTime / 2);
    
    TweenMax.to(renegadeText, fadeTime, {opacity:1, delay:currentTime += fadeTime});
    TweenMax.to(renegadeText, fadeTime, {opacity:0, delay:currentTime += frameTime});
    
    //TODO - fade in "your mix"
    TweenMax.to(realistPcText, fadeTime, {opacity:1, delay:currentTime += fadeTime});
    TweenMax.to(renegadePcText, fadeTime, {opacity:1, delay:currentTime += stutterTime});
    
    TweenMax.to([realistPcText, renegadePcText, vid], (fadeTime / 2), {opacity:.2, delay:currentTime += frameTime});
    TweenMax.to(popup, fadeTime / 2, {opacity:1, delay:currentTime, onStart:function(){
        popup.style.display = 'block';
        xBtn.addEventListener('click', closePopup);
    }});
    
    vid.play();
    vid.onended = function() {
        vid.pause();
    }
    
    scaleLabels();
    
    window.onresize = scaleLabels;
        
    function scaleLabels() {
        if ((1080 / 1920) > (window.innerHeight / window.innerWidth)) {
            TweenMax.set(labelContainerOuter, {scale:(window.innerWidth / 1920), transformOrigin:'960px 540px'});
        } else {
            TweenMax.set(labelContainerOuter, {scale:(window.innerHeight / 1080), transformOrigin:'960px 540px'});
        }
        
    }
}

function closePopup() {
    console.log('closePopup');
    xBtn.removeEventListener('click', closePopup);
    TweenMax.to(popup, fadeTime / 2, {opacity:0, onComplete:function(){
        popup.style.display = 'none';
        nextText.style.display = 'block';
        TweenMax.to(nextText, fadeTime / 2, {opacity:1});
    }});
    TweenMax.to([realistPcText, renegadePcText, vid], (fadeTime / 2), {opacity:1});
}

function nextPage() {
    TweenMax.to([vid, realistPcText, renegadePcText, nextText], (fadeTime / 2), {opacity:0, onComplete:function(){
        window.location.href = '06-watson.php';
    }})
}