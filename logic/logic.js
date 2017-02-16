var socialBtns = [];
var formInputFields = [];
var frame03Paragraphs = [];
var header, frame01, frame02, frame03, bgImage, tts1, tts2;

window.onload = function() {
    header = document.getElementsByTagName('header')[0];
    frame01 = document.getElementById('frame01');
    frame02 = document.getElementById('frame02');
    frame03 = document.getElementById('frame03');
    bgImage = document.getElementById('bgImage');
    tts1 = document.getElementById('tts1');
    tts2 = document.getElementById('tts2');
    tts1.addEventListener('click', hideFrame01);
    tts2.addEventListener('click', hideFrame02);
    
    header.style.top = '-75px';
    TweenMax.to(header, 2, {top:0, ease:Power3.easeOut});
    
    for (var i = 0; i < 3; i++) {
        frame03Paragraphs.push(frame03.getElementsByTagName('p')[i]);
        socialBtns.push(document.getElementsByClassName('socialBtn')[i]);
        document.getElementsByClassName('socialBtn')[i].addEventListener('click', socialBtnClick);
    }
    
    formInputFields = document.getElementsByTagName('input');
    for (j in document.getElementsByTagName('input')) {
        if (document.getElementsByTagName('input')[j].nodeType != undefined) {
            document.getElementsByTagName('input')[j].addEventListener('focus', removeValueFromFormField);
            document.getElementsByTagName('input')[j].addEventListener('blur', addValueToFormField);
        }
    }
    
    frame01.style.display = 'block';
    TweenMax.to([bgImage, frame01], .5, {opacity:1});
}

/* ---------- FRAME ANIMATIONS ---------- */

function hideFrame01() {
    TweenMax.to([frame01], .5, {opacity:0, onComplete:showFrame02});
}

function showFrame02() {
    frame01.style.display = 'none';
    frame02.style.display = 'block';
    TweenMax.to(frame02, .5, {opacity:1});
}

function hideFrame02() {
    TweenMax.to(frame02, .5, {opacity:0, onComplete:showFrame03});
}

function showFrame03() {
    frame02.style.display = 'none';
    TweenMax.to(bgImage, .5, {opacity:0});
    frame03.style.display = 'block';
    TweenMax.to(frame03, .5, {opacity:1});
    var curentTime = 0;
    var stutterTime = .1;
    
    console.log(landscapeMode());
    
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
    var input = e.target;
    while (socialBtns.indexOf(input) < 0) {
        input = input.parentElement;
    }
    
    for (var i = 0; i < 3; i++) {
        if (socialBtns[i].id == input.id) {
            TweenMax.to(input, 1, {width:'100%', left:0, ease:Bounce.easeOut});
            TweenMax.to(input.getElementsByTagName('h2')[0], .5, {opacity:0});
            TweenMax.to(input.getElementsByTagName('img')[0], 1, {top:'30%', scale:.8, transformOrigin:'50% 50%', ease:Bounce.easeOut});
            input.getElementsByTagName('form')[0].style.display = 'block';
            TweenMax.to(input.getElementsByTagName('form')[0], 1, {opacity:1, delay:1});
            input.style.zIndex = '10';
        } else {
            TweenMax.to(socialBtns[i], .5, {opacity:0});
            socialBtns[i].style.zIndex = '2';
        }
    }
    
    for (var i = 0; i < 3; i++) {
        document.getElementsByClassName('socialBtn')[i].removeEventListener('click', socialBtnClick);
    }
}

function removeValueFromFormField(e) {
    if (e.target['value'] == e.target['defaultValue']) {
        e.target.style.color = '#000';
        e.target['value'] = '';
    }
}

function addValueToFormField(e) {
    if (e.target['value'] == '') {
        e.target.style.color = '#777';
        e.target['value'] = e.target['defaultValue'];
    }
}

function landscapeMode() {
    return ((window.innerWidth < 600) ? true : false);
}