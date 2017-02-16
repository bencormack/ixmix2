var socialBtns = [];
var formInputFields = [];
var frame03Paragraphs = [];
var header, frame01, celebArrow, ixArrow;

window.onload = function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    
    header = document.getElementsByTagName('header')[0];
    frame01 = document.getElementById('frame01');
    celebArrow = document.getElementById('celebArrow');
    ixArrow = document.getElementById('ixArrow');
    
    for (var i = 0; i < 3; i++) {
        frame03Paragraphs.push(frame01.getElementsByTagName('p')[i]);
        socialBtns.push(document.getElementsByClassName('mixBtn')[i]);
        document.getElementsByClassName('mixBtn')[i].addEventListener('click', socialBtnClick);
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
    TweenMax.to([celebArrow, ixArrow], 1, {width:'50px', delay:1, ease:Power3.easeOut});
}


function socialBtnClick(e) {
    var curentTime = 0;
    var stutterTime = .1;
    var input = e.target;
    
    if (input.className.indexOf('arrow') < 0) {
        while (socialBtns.indexOf(input) < 0) {
            input = input.parentElement;
        }
        
        TweenMax.to(input, 1, {top:'100%', ease:Power3.easeIn});
        TweenMax.to([celebArrow, ixArrow], .5, {width:'0px', ease:Power3.easeIn});
        
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
                            window.location.href = '10-personProfile.php?id=100';
                            break;
                        case 'ibmIxBtn':
                            window.location.href = '10-personProfile.php?id=100';
                            break;
                        case 'ixExperiencesBtn':
                            window.location.href = '09-ixExperiences.php';
                            break;
                    }
                }});
            } else {
                TweenMax.to(frame03Paragraphs[i], 1, {x:-1000, delay:curentTime += stutterTime, ease:Power3.easeIn});
            }
        }
    } else {
        if (input.className.indexOf('leftArrow') < 0) {
            console.log('SHOW NEXT CELEB');
        }
        if (input.className.indexOf('rightArrow') < 0) {
            console.log('SHOW PREVIOUS CELEB');
        }
    }
}

function landscapeMode() {
    return ((window.innerWidth < 600) ? true : false);
}