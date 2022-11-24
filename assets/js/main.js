var lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
multiplier: 1.4, // Effect Multiplier
reloadOnContextChange: true,
touchMultiplier: 2.4,
smoothMobile: 0,
smartphone: {
    smooth: !0,
    breakpoint: 767
},
tablet: {
    smooth: !1,
    breakpoint: 1024
},
});
$( document ).ready(function() {


$('.main-container').imagesLoaded( function() {
    lscroll.update()
});

let height = $('body').height();
console.log(height)


});