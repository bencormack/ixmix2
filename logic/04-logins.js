var socialBtns = [];
var formInputFields = [];
var frame03Paragraphs = [];
var header, frame03;
var currentSaturationPercentage = 100;
var btnsToDesaturate = [];
var buttonClicked = false;
var targetMobileBtnHeight;
var errorPopup;

window.onload = function() {
    errorPopup = document.getElementById('errorPopup');
    
    if (errorPopup != null) {
        errorPopup.addEventListener('click', function() {
            errorPopup.style.display = 'none';
        });
    }
    
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    
    window.onresize = windowResize;
        
    header = document.getElementsByTagName('header')[0];
    frame03 = document.getElementById('frame03');
    
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
    
    showFrame03();
}

function onLoad() {
    try {
        IN.User.logout();
    } catch (err) {
        console.log(err);
    }
}

/* ---------- FRAME ANIMATIONS ---------- */

function showFrame03() {
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
    buttonClicked = input;
    if (input.id == 'linkedinBtn') {
        console.log('Navigate to linkedin external login');
        window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77acpguxdc2nig&redirect_uri=https%3A%2F%2Fixrenegade-realist.mybluemix.net%2FLinkedIn&state=987654321';
        return;
    } else {
        for (var i = 0; i < 3; i++) {
            if (socialBtns[i].id == input.id) {
                TweenMax.to(input.getElementsByTagName('h2')[0], .5, {opacity:0});
                TweenMax.to(input.getElementsByTagName('img')[0], 1, {top:'100px', scale:.8, transformOrigin:'50% 50%', ease:Bounce.easeOut});
                input.getElementsByTagName('form')[0].style.display = 'block';
                targetMobileBtnHeight = 200 + input.getElementsByTagName('form')[0].clientHeight;
                if (window.innerWidth > 600) {
                    TweenMax.to(input, 1, {width:'100%', left:0, ease:Bounce.easeOut});
                } else {
                    TweenMax.to(input, 1, {width:'100%', height:targetMobileBtnHeight, left:0, ease:Bounce.easeOut});
                }
                TweenMax.to(input.getElementsByTagName('form')[0], 1, {opacity:1, delay:1});
                input.style.zIndex = '10';
            } else {
                btnsToDesaturate.push(socialBtns[i]);
                socialBtns[i].style.zIndex = '2';
            }
        }

        TweenMax.to(this, 1, {currentSaturationPercentage:0, onUpdate:updateSaturation, ease:Power1.easeInOut});

        for (var i = 0; i < 3; i++) {
            document.getElementsByClassName('socialBtn')[i].removeEventListener('click', socialBtnClick);
        }
    }
}

function updateSaturation() {
    TweenMax.set(btnsToDesaturate, {filter:'grayscale(' + currentSaturationPercentage + '%)'})
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

function windowResize() {
    if (buttonClicked) {
        if (window.innerWidth > 600) {
            TweenMax.set(buttonClicked, {height:'100%'});
        } else {
            TweenMax.set(buttonClicked, {height:targetMobileBtnHeight});
        }
    }
    
}