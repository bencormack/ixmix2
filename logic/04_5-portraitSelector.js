var socialBtns = [];
var formInputFields = [];
var frame03Paragraphs = [];
var header, frame03, sophieBtn, janetBtn, jonasBtn, ownPortrait, optionChoose;
var wordCounts = {};

window.onload = function() {
    header = document.getElementsByTagName('header')[0];
    frame03 = document.getElementById('frame03');
    
    sophieBtn = document.getElementById('sophieBtn');
    janetBtn = document.getElementById('janetBtn');
    jonasBtn = document.getElementById('jonasBtn');
    
    ownPortrait = document.getElementById('ownPortrait');
    optionChoose = document.getElementById('optionChoose');
    
    frame03.style.display = 'block';
    frame03.style.opacity = 1;
    
    /*for (var i = 0; i < 3; i++) {
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
    
    showFrame03();*/
}


$("#ownPortraitFormInput").keyup(function() {
    var matches = this.value.match(/\b/g);
    wordCounts[this.id] = matches ? matches.length / 2 : 0;
    var finalCount = 0;
    $.each(wordCounts, function(k, v) {
        finalCount += v;
    });
    $('#wordCountP').html(finalCount);
});

/* ---------- FRAME ANIMATIONS ---------- */

function showFrame03() {
    /*frame03.style.display = 'block';
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
    TweenMax.to([ownPortrait, optionChoose], 1, {opacity:1, delay:curentTime += stutterTime, onStart:function(){
        console.log('start');
    }});*/
}


function socialBtnClick(e) {
    /*var input = e.target;
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
    }*/
}

/*function removeValueFromFormField(e) {
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
}*/