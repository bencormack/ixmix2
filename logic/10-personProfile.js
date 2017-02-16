var frame01, keyInfo, mainCopy, backBtn;

window.onload = function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    
    frame01 = document.getElementById('frame01');
    keyInfo = document.getElementById('keyInfo');
    mainCopy = document.getElementById('mainCopy');
    backBtn = document.getElementById('backBtn');
    
    showFrame01();
}

function showFrame01() {
    TweenMax.to(frame01, 1, {top:0, ease:Power2.easeOut, onComplete:fadeInText});
}

function fadeInText() {
    var currentTime = 0;
    var stutterTime = .05;
    TweenMax.to(keyInfo, 1, {opacity:1});
    for (child in mainCopy.childNodes) {
        if (mainCopy.childNodes[child].nodeType == 1) {
            TweenMax.to(mainCopy.childNodes[child], 1, {opacity:1, delay:currentTime += stutterTime});
        }
    }
    TweenMax.to(backBtn, 1, {opacity:1, delay:currentTime += stutterTime, onComplete:function(){
                                backBtn.addEventListener('click', backBtnClick);
                            }});
}

function backBtnClick() {
    var currentTime = 0;
    var stutterTime = .025;
    TweenMax.to(keyInfo, .5, {opacity:0});
    for (child in mainCopy.childNodes) {
        if (mainCopy.childNodes[child].nodeType == 1) {
            TweenMax.to(mainCopy.childNodes[child], .5, {opacity:0, delay:currentTime += stutterTime});
        }
    }
    TweenMax.to(backBtn, .5, {opacity:0, delay:currentTime += stutterTime, onStart:function(){
        TweenMax.to(frame01, .75, {top:'100%', ease:Power2.easeIn, onComplete:fadeInText, delay:.2, onComplete:function() {
            window.location.href = '07-compareMix.php';
        }});
    }});
}

function landscapeMode() {
    return ((window.innerWidth < 600) ? true : false);
}