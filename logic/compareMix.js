var socialBtns = [];
var formInputFields = [];
var frame03Paragraphs = [];
var header, frame01;

window.onload = function() {
    header = document.getElementsByTagName('header')[0];
    frame01 = document.getElementById('frame01');
    
    for (var i = 0; i < 3; i++) {
        frame03Paragraphs.push(frame01.getElementsByTagName('p')[i]);
        socialBtns.push(document.getElementsByClassName('socialBtn')[i]);
        document.getElementsByClassName('socialBtn')[i].addEventListener('click', socialBtnClick);
    }
    
    showFrame01();
}

function showFrame01() {
    frame01.style.display = 'block';
    TweenMax.to(frame01, .5, {opacity:1});
    var curentTime = 0;
    var stutterTime = .1;
    
    for (socialBtn in socialBtns) {
        if (!landscapeMode()) {
            TweenMax.set(socialBtns[socialBtn], {top:'100%'});
            TweenMax.to(socialBtns[socialBtn], 1, {top:'0', delay:curentTime += stutterTime, ease:Power3.easeOut});
        } else {
            TweenMax.set(socialBtns[socialBtn], {left:'-100%'});
            TweenMax.to(socialBtns[socialBtn], 1, {left:'0', delay:curentTime += stutterTime, ease:Power3.easeOut});
        }
    }
    for (var i = 0; i < frame03Paragraphs.length; i++) {
        TweenMax.set(frame03Paragraphs[i], {x:-1000});
        TweenMax.to(frame03Paragraphs[i], 1, {x:'5%', delay:curentTime += stutterTime, ease:Power3.easeOut});
    }
}


function socialBtnClick(e) {
    var curentTime = 0;
    var stutterTime = .1;
    var input = e.target;
    
    while (socialBtns.indexOf(input) < 0) {
        input = input.parentElement;
    }
    
    console.log('input.id = ' + input.id);
    
    TweenMax.to(input, 1, {top:'100%', ease:Power3.easeIn});
    
    for (socialBtn in socialBtns) {
        if (!landscapeMode()) {
            if (input.id != socialBtns[socialBtn].id) {
                TweenMax.to(socialBtns[socialBtn], 1, {top:'100%', delay:curentTime += stutterTime, ease:Power3.easeIn});
            }
        } else {
            TweenMax.to(socialBtns[socialBtn], 1, {left:'-100%', delay:curentTime += stutterTime, ease:Power3.easeIn});
        }
    }
    for (var i = 0; i < frame03Paragraphs.length; i++) {
        if (i == (frame03Paragraphs.length - 1)) {
            TweenMax.to(frame03Paragraphs[i], 1, {x:-1000, delay:curentTime += stutterTime, ease:Power3.easeIn, onComplete:function() {
                switch (input.id) {
                    case 'celebrititesBtn':
                        window.location.href = 'compareMix.html';//'celebrityMix.html';
                        break;
                    case 'ibmIxBtn':
                        window.location.href = 'compareMix.html';
                        break;
                    case 'ixExperiencesBtn':
                        window.location.href = 'compareMix.html';
                        break;
                }
            }});
        } else {
            TweenMax.to(frame03Paragraphs[i], 1, {x:-1000, delay:curentTime += stutterTime, ease:Power3.easeIn});
        }
    }
}

function landscapeMode() {
    return ((window.innerWidth < 600) ? true : false);
}