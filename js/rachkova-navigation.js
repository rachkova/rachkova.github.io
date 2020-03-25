window.smoothScroll = function(target) {
   var scrollContainer = target;
   // document.getElementById('header-rachkova')
   do { //find scroll container
       scrollContainer = scrollContainer.parentNode;
       if (!scrollContainer) return;
       scrollContainer.scrollTop += 1;
   } while (scrollContainer.scrollTop == 0);

   var targetY = 0;
   do { //find the top of target relatively to the container
       if (target == scrollContainer) break;
       if ( $( window ).width() > 1200 ) {targetY += target.offsetTop - 100;}
       else {targetY += target.offsetTop - 60;}

   } while (target = target.offsetParent);

   scroll = function(c, a, b, i) {
       i++; if (i > 30) return;
       c.scrollTop = a + (b - a) / 30 * i;
       setTimeout(function(){ scroll(c, a, b, i); }, 20);
   }
   // start scrolling
   scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);

   // load animation at target

}

window.clickLink = function(target) {

  if (target.indexOf("#leistungen") >= 0) {
    window.location.href = target;
    smoothScroll(document.getElementById('leistungen-rachkova'));
  }
  if (target.indexOf("#buero") >= 0) {
    window.location.href = target;
    smoothScroll(document.getElementById('buero-rachkova'));
  }
  else {
    window.location.href = target;
  }
}

$.fn.isInViewport = function(inViewType){
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = this.offset().top;
    bounds.bottom = bounds.top + this.outerHeight();
    switch(inViewType){
      case 'bottomOnly':
        return ((bounds.bottom <= viewport.bottom) && (bounds.bottom >= viewport.top));
      case 'topOnly':
        return ((bounds.top <= viewport.bottom) && (bounds.top >= viewport.top));
      case 'both':
        return ((bounds.top >= viewport.top) && (bounds.bottom <= viewport.bottom));
      default:
        return ((bounds.top >= viewport.top) && (bounds.bottom <= viewport.bottom));
    }
};


  var projekteMain = $('#projekte-index-rachkova');
  var projekteHr = $('#projekteHrAnimation');
  var projekteHeadline = $('#projekteHeader');
  var projekteSub = $('.projekte-index-kategorien-container');


  var leistungenMain = $('#leistungen-rachkova');
  var leistungenHeadline = $('#leistungenHeader');
  var leistungenSubContainer = $('#leistungenSubContainer');
  var leistungenHr = $('#leistungenHrAnimation');
  var leistungenSub = $('#leistungenSubContainer');

  var bueroMain = $('#buero-rachkova');
  var bueroHeadline = $('#bueroHeader');
  var bueroSubContainer = $('#bueroSubContainer');
  var bueroHr = $('#bueroHrAnimation');
  var bueroSub = $('#bueroSubContainer');

  var cvMain = $('#cv-rachkova');
  var cvHeadline = $('#cvHeader');
  var cvSubContainer = $('#cvSubContainer');
  var cvHr = $('#cvHrAnimation');
  var cvSub = $('#cvSubContainer');

$('body').on('resize scroll', function() {

    if ( !(projekteMain.hasClass("animationFired")) && $('#projekte-index-rachkova').isInViewport('topOnly') ) {

      projekteMain.addClass("animationFired");
      projekteHeadline.addClass("rachkova-animation-fromTopFast");
      projekteHeadline.css("opacity", "1");
      projekteHr.addClass("rachkova-hr-animationFast");
      projekteSub.addClass("rachkova-animation-fromBottomFast");
      console.log("projekte in View and changed");

    }
    else if ( !(leistungenMain.hasClass("animationFired")) && $('#leistungen-rachkova').isInViewport('topOnly') ) {

        leistungenMain.addClass("animationFired");
        leistungenHeadline.addClass("rachkova-animation-fromTopFast");
        leistungenHeadline.css("opacity", "1");
        leistungenHr.addClass("rachkova-hr-animationFast");
        leistungenSub.addClass("rachkova-animation-fromBottomFast");
        console.log("Leistungen in View and changed");
    }

    else if ( !(bueroMain.hasClass("animationFired")) &&  $('#buero-rachkova').isInViewport('topOnly') ) {

        bueroMain.addClass("animationFired");
        bueroHeadline.addClass("rachkova-animation-fromTopFast");
        bueroHeadline.css("opacity", "1");
        bueroHr.addClass("rachkova-hr-animationFast");
        bueroSub.addClass("rachkova-animation-fromBottomFast");
        console.log("Buero in View and changed");
    }

    else if ( !(cvMain.hasClass("animationFired")) &&  $('#cv-rachkova').isInViewport('topOnly') ) {

        cvMain.addClass("animationFired");
        cvHeadline.addClass("rachkova-animation-fromTopFast");
        cvHeadline.css("opacity", "1");
        cvHr.addClass("rachkova-hr-animationFast");
        cvSub.addClass("rachkova-animation-fromBottomFast");
        console.log("CV in View and changed");
    }



});

 $( window ).on('load', function(){

       if ( $('#projekte-index-rachkova').isInViewport('topOnly') ) {

         projekteMain.addClass("animationFired");
         projekteHeadline.addClass("rachkova-animation-fromTopFast");
         projekteHeadline.css("opacity", "1");
         projekteHr.addClass("rachkova-hr-animationFast");
         projekteSub.addClass("rachkova-animation-fromBottomFast");
         console.log("Window Loaded, projekte in View and changed");

       }
       else if ( $('#leistungen-rachkova').isInViewport('topOnly') ) {

           leistungenMain.addClass("animationFired");
           leistungenHeadline.addClass("rachkova-animation-fromTopFast");
           leistungenHeadline.css("opacity", "1");
           leistungenHr.addClass("rachkova-hr-animationFast");
           leistungenSub.addClass("rachkova-animation-fromBottomFast");
           console.log("Window Loaded, Leistungen in View and changed");
       }

       else if ( $('#buero-rachkova').isInViewport('topOnly') ) {

           bueroMain.addClass("animationFired");
           bueroHeadline.addClass("rachkova-animation-fromTopFast");
           bueroHeadline.css("opacity", "1");
           bueroHr.addClass("rachkova-hr-animationFast");
           bueroSub.addClass("rachkova-animation-fromBottomFast");
           console.log("Window Loaded, Buero in View and changed");
       }

});


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

// Burger
(function($) {
   $('.item-transition').on('click', function() {
      $(this).toggleClass('active');
   });

   $('.item-animation').on('click', function() {
      if($(this).hasClass('active-in')) {
         $(this).removeClass('active-in');
         $(this).addClass('active-out');
      } else {
         $(this).removeClass('active-out');
         $(this).addClass('active-in');
      }
   });
})(jQuery);


const rippleElements = document.getElementsByClassName("myRipple");

for(let i = 0; i < rippleElements.length; i++) {
  rippleElements[i].onclick = function(e){
    let X = e.pageX - this.offsetLeft;
    let Y = e.pageY - this.offsetTop;
    let rippleDiv = document.createElement("div");
    rippleDiv.classList.add('ripple');
    rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
    let customColor = this.getAttribute('ripple-color');
    if (customColor) rippleDiv.style.background = customColor;
    this.appendChild(rippleDiv);
    setTimeout(function(){
      rippleDiv.parentElement.removeChild(rippleDiv);
    }, 900);
  }
}
//
// $("#initiate").on("click",function(){
//    $(".mobileNav").toggleClass("hide");
// }
