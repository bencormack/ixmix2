var frame01, keyInfo, mainCopy, backBtn, leftArrow, rightArrow, captionPanel;
var frame01Paragraphs = [];

window.onload = function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    
    frame01 = document.getElementById('frame01');
    keyInfo = document.getElementById('keyInfo');
    mainCopy = document.getElementById('mainCopy');
    backBtn = document.getElementById('backBtn');
    leftArrow = document.getElementById('leftArrow');
    rightArrow = document.getElementById('rightArrow');
    captionPanel = document.getElementById('captionPanel');
    
    for (var i = 0; i < 3; i++) {
        frame01Paragraphs.push(captionPanel.getElementsByTagName('p')[i]);
    }
    
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
    TweenMax.to([backBtn, leftArrow, rightArrow], 1, {opacity:1, delay:currentTime += stutterTime, onComplete:function(){
                                backBtn.addEventListener('click', backBtnClick);
                                leftArrow.addEventListener('click', leftArrowClick);
                                rightArrow.addEventListener('click', rightArrowClick);
                            }});
    
    for (var i = 0; i < frame01Paragraphs.length; i++) {
        TweenMax.set(frame01Paragraphs[i], {x:-1000, opacity:1});
        TweenMax.to(frame01Paragraphs[i], 1, {x:'5%', delay:currentTime += stutterTime, ease:Power3.easeOut});
    }
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

function leftArrowClick() {
    console.log('leftArrowClick');
}

function rightArrowClick() {
    console.log('rightArrowClick');
}

function landscapeMode() {
    return ((window.innerWidth < 600) ? true : false);
}