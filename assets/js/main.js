/**
 * FelipedelosH
 * 2023
 */

//INTERNAL LINKS
$( ".home-logo" ).on( "click", function() {
    window.location.href = 'index.html';
});

//EXTERNAL LINKS
$( ".btn-external-click" ).on( "click", function() {
    //new tab
});


//GOT TO TOP
$( ".btn-bottom-floating" ).on( "click", function() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, Opera
});


/**
 * Scroll
 */
$(window).scroll(function() {
    hideOfShowBtnFloating();
});



/**
 * hover
 */
$( ".main-society-link-malambo" ).hover(function() {
    $( ".main-society-link-malambo" ).css("color", "#9ed49a");
}).mouseleave(function() {  
    $( ".main-society-link-malambo" ).css("color", "#006369");
});

$( ".main-society-link-tairona" ).hover(function() {
    $( ".main-society-link-tairona" ).css("color", "#9ed49a");
}).mouseleave(function() {  
    $( ".main-society-link-tairona" ).css("color", "#006369");
});

$( ".main-society-link-malalameque" ).hover(function() {
    $( ".main-society-link-malalameque" ).css("color", "#9ed49a");
}).mouseleave(function() {  
    $( ".main-society-link-malalameque" ).css("color", "#006369");
});

$( ".container-ico-contact-direction" ).hover(function() {
    $( ".container-ico-contact-direction" ).css("background-color", "#006369");
}).mouseleave(function() {  
    $( ".container-ico-contact-direction" ).css("background-color", "#eaf6e9");
});

$( ".container-ico-contact-email" ).hover(function() {
    $( ".container-ico-contact-email" ).css("background-color", "#006369");
}).mouseleave(function() {  
    $( ".container-ico-contact-email" ).css("background-color", "#eaf6e9");
});


/**
 * Enter a URL and open in new tab
 * @param {*} url 
 */

function openNewTab(url){
    var win = window.open(url, '_blank');
    win.focus();
}

function openLocalTab(url){
    var win = window.open(url, '_self');
    win.focus();
}

function openHTML(url){
    window.open(url, "_self");
}


function hideOfShowBtnFloating(){
    if ($(window).scrollTop() <= 100) {
        $(".btn-bottom-floating").css("display", "none");
    } else {
        $(".btn-bottom-floating").css("display", "flex");
    }
}

/**
 * MediaQuery
 */
$(window).resize(function(){
   // _responsiveRefresh();
});


function _responsiveRefresh(){
    var _w = $(window).width();
    var _h = $(window).height();
    var iphoneMiniH = _w >= 360 && _w <= 399 && _h >= 800 && _h <= 850;
    var iphoneProH = _w >= 400 && _w <= 450 && _h >= 900 && _h <= 999;
    var iphone5SEH = _w >= 300 && _w <= 340 && _h >= 550 && _h <= 600;
    var iphone678PlUSH = _w >= 380 && _w <= 440 && _h >= 710 && _h <= 750;
    var iphoneXH = _w >= 365 && _w <= 398 && _h >= 800 && _h <= 899;
    var iphoneXRH = _w >= 400 && _w <= 420 && _h >= 880 && _h <= 910;
    var iphoneSEH = _w >= 350 && _w <= 385 && _h >= 650 && _h <= 700;
    var kindleH = _w >= 780 && _w <= 820 && _h >= 1260 && _h <= 1300;
    var androidBasicH = _w >= 580 && _w <= 620 && _h >= 940 && _h <= 980;  
    var androidPixelH = _w >= 400 && _w <= 420 && _h >= 800 && _h <= 840;    
    var notDisplayH = _w < 280 && _h <= 340;


    if(iphoneMiniH){   
        alert("MobileOP1 horizontal");
    }else if(iphoneProH){
        alert("MobileOP2 horizontal");
    }else if(iphone5SEH){
        alert("MobileOP3 horizontal");
    }else if(iphone678PlUSH){
        alert("MobileOP4 horizontal");
    }else if(iphoneXH){
        alert("MobileOP5 horizontal");
    }else if(iphoneXRH){
        alert("MobileOP6 horizontal");
    }else if(iphoneSEH){
        alert("MobileOP7 horizontal");
    }else if(kindleH){
        alert("MobileOP8 horizontal");
    }else if(androidBasicH){;
        alert("MobileOP9 horizontal");
    }else if(androidPixelH){
        alert("MobileOP10 horizontal");
    }else if(notDisplayH){
        alert("MobileOP11 horizontal");
    }else{
        alert("DEFAULT WINDOW SIZE:\n"+"H:"+_h+";"+"W;"+_w);
    }
}


hideOfShowBtnFloating();
//_responsiveRefresh();

